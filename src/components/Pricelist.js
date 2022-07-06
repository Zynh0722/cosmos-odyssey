import React, { useEffect, useState } from 'react';
import { Fragment } from 'react';
import './css/main.css'
import PriceRow from './PriceRow';
import PriceTitles from './PriceTitles';
import ReservationModal from './ReservationModal';

function Pricelist() {

    const [modal, setModal] = useState();
    
    useEffect(() => {
        setModal(document.getElementById("ReservationModal"));
    })

    return (
        <Fragment>
            <p className='subtitle'>Select a provider</p>
            <div className='container'>
                <PriceTitles />
                <PriceRow 
                    modal={modal}/>
            </div>
            <ReservationModal 
                modal={modal}/>
        </Fragment>
    );
}

export default Pricelist;