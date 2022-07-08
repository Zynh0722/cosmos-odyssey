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


// Check if there's a new pricelist, add newest one if it doesn't exist. Deletes the oldest one if there's more than 15. Sends back the newest pricelist.
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
            }
          });
      return data;
    })
    .then(data => res.send(data));
});

// This section gets you a single pricelist.
recordRoutes.route("/pricelists/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect
    .collection("pricelists")
    .findOne(myquery, function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// This section will help you get a new pricelist
recordRoutes.route("/pricelist/add").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myobj = {
    name: req.body.name,
    position: req.body.position,
    level: req.body.level,
  };
});

// This section will help you delete a pricelist
recordRoutes.route("/:id").delete((req, response) => {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection("]").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    response.json(obj);
  });
});

module.exports = recordRoutes;