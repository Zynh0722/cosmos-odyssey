import React, { useEffect } from 'react';

function PriceRow({ modal }) {

    const modalId = modal;

    useEffect(() => {
        var btn = document.getElementById("ModalButton");

        btn.onclick = function () {
            modalId.style.display = "block";
        }
    })

    return (
        <div className='row row-content'>
            <hr />
            <div className='col-sm-3'><p className='row-content-p'>Company Name of Doom and Death</p></div>
            <div className='col-sm-2'><p className='row-content-p'>12893718951389.23$</p></div>
            <div className='col-sm-2'><p className='row-content-p'>1847138745 km</p></div>
            <div className='col-sm-3'><p className='row-content-p'>12 days</p></div>
            <div className='col-sm-2'><button id='ModalButton' className='btn btn-pricelist'>Make a reservation</button></div>
        </div>
    );
}

export default PriceRow;