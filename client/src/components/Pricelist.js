import React, { useEffect, useState } from 'react';
import { Fragment } from 'react';
import './css/main.css'
import NoPriceRow from './NoPriceRow';
import PriceRow from './PriceRow';
import PriceTitles from './PriceTitles';
import ReservationModal from './ReservationModal';

function Pricelist({ fromPlanet, toPlanet, leg, pricelistId }) {

    const [providers, setProviders] = useState([]);
    const [modal, setModal] = useState();
    const [condition, setCondition] = useState();
    const [sendData, setSendData] = useState();
    const [currentSort, setCurrentSort] = useState("");

    useEffect(() => {
        try {
            if (leg.providers !== undefined && leg.providers !== null) {
                setCondition(true);
                setProviders(leg.providers);
            }
        } catch (error) { }
        setModal(document.getElementById("ReservationModal"));
    }, []);

    switch (currentSort) {
        case "CompanyAsc":
            providers.sort((a, b) => a.company.name.localeCompare(b.company.name))
            break;
        case "CompanyDesc":
            providers.sort((a, b) => b.company.name.localeCompare(a.company.name))
            break;
        case "PriceAsc":
            providers.sort((a, b) => a.price - b.price);
            break;
        case "PriceDesc":
            providers.sort((a, b) => b.price - a.price);
            break;
        case "TimeAsc":
            providers.sort(function(a, b) { 
                console.log("========================")
                console.log(a)
                console.log(b)
                console.log(Date.parse(a.flightEnd) - Date.parse(a.flightStart))
                console.log(Date.parse(b.flightEnd) - Date.parse(b.flightStart))
                return (Date.parse(a.flightEnd) - Date.parse(a.flightStart)) - (Date.parse(b.flightEnd) - Date.parse(b.flightStart));
            });
            break;
        case "TimeDesc":
            providers.sort(function(a, b) {
                return (Date.parse(b.flightEnd) - Date.parse(b.flightStart)) - (Date.parse(a.flightEnd) - Date.parse(a.flightStart));
            });
            break;
        default:
            break;
    }

    return (
        <Fragment>
            <p className='subtitle'>Select a provider</p>
            <div className='container container-pricelist'>
                <PriceTitles
                    currentSort={currentSort}
                    setCurrentSort={setCurrentSort} />
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