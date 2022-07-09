import React from 'react';

function ReservationRow({reservation}) {
    return (  
        <div className='row row-content'>
        <hr/>
        <div className='col-sm-3'><p className='row-content-p'>{reservation.FirstName + " " + reservation.LastName}</p></div>
        <div className='col-sm-2'><p className='row-content-p'>{reservation.Route}</p></div>
        <div className='col-sm-2'><p className='row-content-p'>{reservation.Price}€</p></div>
        <div className='col-sm-2'><p className='row-content-p'>{new Date(reservation.FlightStart).toLocaleDateString()} - {new Date(reservation.FlightEnd).toLocaleDateString()}</p></div>
        <div className='col-sm-2'><p className='row-content-p'>{reservation.Company}</p></div>
    </div>
    );
}

export default ReservationRow;
