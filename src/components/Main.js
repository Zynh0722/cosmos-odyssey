import React from 'react';
import PlanetsButton from './PlanetsButton';
import ReservationsButton from './ReservationsButton';
import './css/main.css';
import Success from './Success';

function Main() {

    var query = false;

    if (new URLSearchParams(window.location.search).get('successful') === "true") {
        query = true;
    }

    return (
        <main>
            <div className="container container-main">
                <div className='title-box'>
                    <h1 className='text-center'>Cosmos Odyssey</h1>
                </div>
                <hr className='hr-main'/>
                <div className="row mx-1 my-3">
                    <PlanetsButton />
                </div>

                <div className="row mx-1 my-3">
                    <ReservationsButton />
                </div>
            </div>

            {query ? <Success /> : ""}
        </main>
    );
}

export default Main;