import React from 'react';
import MakeReservationButton from './MakeReservationButton';

function PriceRow({ modal, provider, distance }) {

    return (
        <div className='row row-content'>
            <hr />
            <div className='col-sm-2'><p className='row-content-p'>{provider.company.name}</p></div>
            <div className='col-sm-2'><p className='row-content-p'>{provider.price}€</p></div>
            <div className='col-sm-2'><p className='row-content-p'>{distance} km</p></div>
            <div className='col-sm-2'><p className='row-content-p'>{new Date(provider.flightStart).toLocaleDateString()} - {new Date(provider.flightEnd).toLocaleDateString()}</p></div>
            <div className='col-sm-2'><p className='row-content-p'>{((Date.parse(provider.flightEnd) - Date.parse(provider.flightStart))/86400000).toFixed(1)} days</p></div>
            <MakeReservationButton
                modal={modal} />
        </div>
    );
}

export default PriceRow;