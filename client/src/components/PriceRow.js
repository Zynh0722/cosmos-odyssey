import React, { useEffect } from 'react';

function PriceRow({ modal, provider, distance, pricelistId, fromPlanet, toPlanet, modalNumber, setSendData }) {

    const data =
    {
        FirstName: "",
        LastName: "",
        Route: fromPlanet + "-" + toPlanet,
        Price: provider.price,
        FlightStart: provider.flightStart,
        FlightEnd: provider.flightEnd,
        Company: provider.company.name,
        PricelistId: pricelistId
    };

    const modalId = modal;

    useEffect(() => {
        var btn = document.getElementById("ModalButton-" + modalNumber);

        btn.onclick = function () {
            setSendData(data);
            modalId.style.display = "block";
            console.log(modalId);
        };
    }, []);



    return (
        <div className='row row-content'>
            <hr />
            <div className='col-sm-2'><p className='row-content-p'>{provider.company.name}</p></div>
            <div className='col-sm-2'><p className='row-content-p'>{provider.price}€</p></div>
            <div className='col-sm-2'><p className='row-content-p'>{distance} km</p></div>
            <div className='col-sm-2'><p className='row-content-p'>{new Date(provider.flightStart).toLocaleDateString()} - {new Date(provider.flightEnd).toLocaleDateString()}</p></div>
            <div className='col-sm-2'><p className='row-content-p'>{((Date.parse(provider.flightEnd) - Date.parse(provider.flightStart)) / 86400000).toFixed(1)} days</p></div>
            <div className='col-sm-2'><button id={"ModalButton-" + modalNumber} className='btn btn-pricelist'>Make a reservation</button></div>
        </div>
    );
}

export default PriceRow;