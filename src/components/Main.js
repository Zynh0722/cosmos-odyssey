import React from 'react';
import PlanetsButton from './PlanetsButton';
import ReservationsButton from './ReservationsButton';
import './css/main.css';

function Main() {
    return (
        <main>
            <div className="container container-main">
                <h1 className='text-center'>Cosmos Odyssey</h1>
                <div className="row mx-1 my-3">
                    <PlanetsButton />
                </div>

                <div className="row mx-1 my-3">
                    <ReservationsButton />
                </div>
            </div>
        </main>
    );
}

export default Main;