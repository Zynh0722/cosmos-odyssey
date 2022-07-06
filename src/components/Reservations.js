import React from 'react';
import { Fragment } from 'react';

function Reservations() {
    return (  
        <Fragment>
            <p className='subtitle'>Reservations</p>
            <div className='container'>
                <div className='row row-titles'>
                    <div className='col-sm-3'>Name</div>
                    <div className='col-sm-2'>Route(s)</div>
                    <div className='col-sm-2'>Total Quoted Price</div>
                    <div className='col-sm-2'>Total Quoted Time</div>
                    <div className='col-sm-2'>Travel Company Name(s)</div>
                </div>
                <div className='row row-content'>
                    <hr/>
                    <div className='col-sm-3'><p className='row-content-p'>Friedrich Einswell der Hunt</p></div>
                    <div className='col-sm-2'><p className='row-content-p'>Mars to Earth</p></div>
                    <div className='col-sm-2'><p className='row-content-p'>19284717.12$</p></div>
                    <div className='col-sm-2'><p className='row-content-p'>12 days</p></div>
                    <div className='col-sm-2'><p className='row-content-p'>Hellflights - Straight to Hell</p></div>
                </div>
            </div>
        </Fragment>
    );
}

export default Reservations;