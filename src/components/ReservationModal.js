import React, { useEffect, useState } from 'react';

function ReservationModal({ modal }) {

    const modalId = modal;

    const [fName, setFName] = useState('');
    const [lName, setLName] = useState('');

    useEffect(() => {
        const el = document.getElementById("FName");
        const el2 = document.getElementById("LName");
        const error1 = document.getElementById("Error1");
        const error2 = document.getElementById("Error2");
        const submit = document.getElementById("ReservationButton");
        var span = document.getElementById("close");
        span.onclick = function () {
            modalId.style.display = "none";
        }

        window.onclick = function (event) {
            if (event.target == modal) {
                modalId.style.display = "none";
            }
        }

        el.addEventListener("keypress", function(event) {
          if (event.key === "Enter") {
            event.preventDefault();
          }
        });

        el2.addEventListener("keypress", function(event) {
          if (event.key === "Enter") {
            event.preventDefault();
          }
        });

        if (fName.length <= 35 && fName.length > 0 && lName.length > 0 && lName.length <= 35) {
            submit.classList.remove('disabled');
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
                <form className="reservation-form">
                    <input id="FName" type="text" name="fname" onChange={(e) => setFName(e.target.value)} placeholder="First Name" />
                    <div id='Error1' className='error-message' style={{display: "none"}}>First name must be 35 or less characters.</div>
                    <input id="LName" type="text" name="lname" onChange={(e) => setLName(e.target.value)} placeholder="Last Name" />
                    <div id='Error2' className='error-message' style={{display: "none"}}>Last name must be 35 or less characters.</div>
                    <input id='ReservationButton' className="btn btn-modal disabled" type="submit" value="Submit"></input>
                </form>
            </div>
        </div>
    );
}

export default ReservationModal;