import React, { useEffect, useState } from 'react';

function MakeReservationButton({ modal }) {

    const modalId = modal;

    useEffect(() => {
        var btn = document.getElementById("ModalButton");

        btn.onclick = function () {
            modalId.style.display = "block";
        }
    }, []);

    return (
        <div className='col-sm-2'><button id={"ModalButton"} className='btn btn-pricelist'>Make a reservation</button></div>
    );
}

export default MakeReservationButton;