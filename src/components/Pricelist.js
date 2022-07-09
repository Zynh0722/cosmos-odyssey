import React, { useEffect, useState } from 'react';
import { Fragment } from 'react';
import './css/main.css'
import NoPriceRow from './NoPriceRow';
import PriceRow from './PriceRow';
import PriceTitles from './PriceTitles';
import ReservationModal from './ReservationModal';

function Pricelist({ fromPlanet, toPlanet, leg, pricelistId }) {

    const [modal, setModal] = useState();
    const [condition, setCondition] = useState();
    const [sendData, setSendData] = useState();
    const [sortName, setSortName] = useState(false);
    const [currentSort, setCurrentSort] = useState("");

    useEffect(() => {
        try {
            if (leg.providers !== undefined && leg.providers !== null) {
                setCondition(true);
                leg.providers.sort();
            }
        } catch (error) {

        }
        setModal(document.getElementById("ReservationModal"));
    }, [])



    return (
        <Fragment>
            <p className='subtitle'>Select a provider</p>
            <div className='container container-pricelist'>
                <PriceTitles />
                {
                    condition ?
                        leg.providers.map((provider, index) =>
                            <PriceRow
                                modal={modal}
                                provider={provider}
                                distance={leg.routeInfo.distance}
                                pricelistId={pricelistId}
                                fromPlanet={fromPlanet}
                                toPlanet={toPlanet}
                                modalNumber={index}
                                setSendData={setSendData} />)
                        :
                        <NoPriceRow />
                }
            </div>
            <ReservationModal
                modal={modal}
                setSendData={setSendData}
                sendData={sendData} />
        </Fragment>
    );
}

export default Pricelist;