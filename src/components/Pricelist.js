import React, { useEffect, useState } from 'react';
import { Fragment } from 'react';
import './css/main.css'
import NoPriceRow from './NoPriceRow';
import PriceRow from './PriceRow';
import PriceTitles from './PriceTitles';
import ReservationModal from './ReservationModal';

function Pricelist({ fromPlanet, toPlanet, leg, id }) {

    const [modal, setModal] = useState();
    const [condition, setCondition] = useState();

    useEffect(() => {
        try {
            if (leg.providers !== undefined && leg.providers !== null) {
                setCondition(true);
            }    
        } catch (error) {
            
        }
        setModal(document.getElementById("ReservationModal"));
    }, [])

    return (
        <Fragment>
            <p className='subtitle'>Select a provider</p>
            <div className='container'>
                <PriceTitles />
                {
                    condition ?
                        leg.providers.map(provider =>
                            <PriceRow
                                modal={modal}
                                provider={provider}
                                distance={leg.routeInfo.distance} />)
                        :
                        <NoPriceRow />
                }
            </div>
            <ReservationModal
                modal={modal} />
        </Fragment>
    );
}

export default Pricelist;