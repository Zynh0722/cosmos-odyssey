import React from 'react';

function getFlightDuration({ FlightEnd, FlightStart}) {
    return ((Date.parse(FlightEnd) - Date.parse(FlightStart)) / 86400000).toFixed(1)
}

function ReservationRow({reservation}) {

    console.log(reservation);
    
    return (
        <div className='row row-content'>
            <hr/>
            <div className='col-sm-3'><p className='row-content-p'>{reservation.FirstName + " " + reservation.LastName}</p></div>
            <div className='col-sm-2'><p className='row-content-p'>{reservation.Route}</p></div>
            <div className='col-sm-2'><p className='row-content-p'>{reservation.Price}€</p></div>
            <div className='col-sm-2'>
                <p className='row-content-p'>
                    {getFlightDuration(reservation)} days
                </p>
            </div>
            <div className='col-sm-2'><p className='row-content-p'>{reservation.Company}</p></div>
        </div>
    );
}

export default ReservationRow;
