import React, { useEffect, useState } from 'react';

const axios = require("axios");

function ReservationModal({ modal, setSendData, sendData }) {

    const modalId = modal;

    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");

    var span = document.getElementById("close");
    var el = document.getElementById("FName");
    var el2 = document.getElementById("LName");

    if (el) {
        el.addEventListener("keypress", function (event) {
            if (event.key === "Enter") {
                event.preventDefault();
            }
        });
    }

    if (el) {
        el2.addEventListener("keypress", function (event) {
            if (event.key === "Enter") {
                event.preventDefault();
            }
        });
    }

    if (span) {
        span.onclick = function () {
            modalId.style.display = "none";
        }
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modalId.style.display = "none";
        }
    }

    function handleSubmit(e) {
        e.preventDefault();


        axios.post("http://localhost:5000/reservations/post", sendData);

        window.location.href = "/?successful=true";
    }
    useEffect(() => {
        const error1 = document.getElementById("Error1");
        const error2 = document.getElementById("Error2");
        const submit = document.getElementById("ReservationButton");

        if (fName.length <= 35 && fName.length > 0 && lName.length > 0 && lName.length <= 35) {
            submit.classList.remove('disabled');
            setSendData(
                {
                    FirstName: fName,
                    LastName: lName,
                    Route: sendData.Route,
                    Price: sendData.Price,
                    FlightStart: sendData.FlightStart,
                    FlightEnd: sendData.FlightEnd,
                    Company: sendData.Company,
                    PricelistId: sendData.PricelistId
                }
            );
        } else if (!submit.classList.contains('disabled')) {
            submit.classList.add('disabled');
        }

        if (fName.length > 35) {
            error1.style.display = "block";
        } else if (error1.style.display == "block") {
            error1.style.display = "none";
        }

        if (lName.length > 35) {
            error2.style.display = "block";
        } else if (error2.style.display == "block") {
            error2.style.display = "none";
        }
    })

    return (
        <div style={{ display: "none" }} id="ReservationModal" className="modal">

            <div className="modal-content">
                <span id='close' className="close">&times;</span>
                <h2 className='subtitle subtitle-modal'>
                    Reservation Information
                </h2>
                <form onSubmit={handleSubmit} className="reservation-form">
                    <input id="FName" type="text" name="fname" onChange={(e) => setFName(e.target.value)} placeholder="First Name" />
                    <div id='Error1' className='error-message' style={{ display: "none" }}>First name must be 35 or less characters.</div>
                    <input id="LName" type="text" name="lname" onChange={(e) => setLName(e.target.value)} placeholder="Last Name" />
                    <div id='Error2' className='error-message' style={{ display: "none" }}>Last name must be 35 or less characters.</div>
                    <input id='ReservationButton' className="btn btn-modal disabled" type="submit" value="Submit"></input>
                </form>
            </div>
        </div>
    );
}

export default ReservationModal;