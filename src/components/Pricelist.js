import React from 'react';
import { Fragment } from 'react';
import './css/main.css'

function Pricelist() {
    return (
        <Fragment>
            <p className='subtitle'>Select a provider</p>
            <div className='container'>
                <div className='row row-titles'>
                    <div className='col-sm-3'>Company</div>
                    <div className='col-sm-2'>Price</div>
                    <div className='col-sm-2'>Distance</div>
                    <div className='col-sm-2'>Travel Time</div>
                </div>
                <div className='row row-content'>
                    <hr/>
                    <div className='col-sm-3'><p className='row-content-p'>Company Name of Doom and Death</p></div>
                    <div className='col-sm-2'><p className='row-content-p'>12893718951389.23$</p></div>
                    <div className='col-sm-2'><p className='row-content-p'>1847138745 km</p></div>
                    <div className='col-sm-3'><p className='row-content-p'>12 days</p></div>
                    <div className='col-sm-2'><button className='btn btn-pricelist'>Make a reservation</button></div>
                </div>
                
            </div>
        </Fragment>
    );
}

export default Pricelist;