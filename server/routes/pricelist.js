const express = require("express");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This helps convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

const axios = require("axios");


// Check if there's a new pricelist, add newest one if it doesn't exist. 
// Deletes the oldest one if there's more than 15, also deleting the reservations attached to it. 
// Sends back the newest pricelist.
recordRoutes.route("/pricelists").get(function (req, res) {
  axios.get('https://cosmos-odyssey.azurewebsites.net/api/v1.0/TravelPrices')
    .then(res => res.data)
    .then(data => {
      //console.log(data);
      let db_connect = dbo.getDb("cosmosDB");
      db_connect
        .collection("pricelists")
        .findOne({
          id: data.id
        },
          async function (err, result) {
            let pricelists = await db_connect.collection("pricelists");
            if (err) { }
            if (result === null) {
              pricelists
                .insertOne(data);
            }
            let sortArray = await pricelists
            .find({})
            .toArray();
            if (sortArray.length > 15) {
              sortArray.sort((a, b) => Date.parse(a.validUntil) - Date.parse(b.validUntil));
              let oldestPricelistId = sortArray[0].id;
              pricelists
                .deleteMany({ "id": oldestPricelistId });
              let reservations = await db_connect.collection("reservations");
              reservations
                .deleteMany({ "PricelistId": oldestPricelistId });
            }
          });
      return data;
    })
    .then(data => res.send(data));
});

// Post a reservation

recordRoutes.route("/reservations/post").post(function(req, res) {
  let db_connect = dbo.getDb("cosmosDB");
  let reservation = {
      FirstName: req.body.FirstName,
      LastName: req.body.LastName,
      Route: req.body.Route,
      Price: req.body.Price,
      FlightStart: req.body.FlightStart,
      FlightEnd: req.body.FlightEnd,
      Company: req.body.Company,
      PricelistId: req.body.PricelistId
  };
  db_connect
    .collection("reservations")
    .insertOne(reservation, function(err, response) {
      if (err) throw err;
      res.send(response);
    });
});


// Gets you all the reservations
recordRoutes.route("/reservations/getall").get(function (req, res) {
  let db_connect = dbo.getDb("cosmosDB");
  db_connect
    .collection("reservations")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
        res.send(result);
    });
});

module.exports = recordRoutes;