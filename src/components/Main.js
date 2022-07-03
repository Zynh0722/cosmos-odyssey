import React from 'react';
import PlanetsButton from './PlanetsButton';
import ReservationsButton from './ReservationsButton';

function Main() {
    return (
        <main>
            <div className="row mx-1 my-3">
                <PlanetsButton />
            </div>

            <div className="row mx-1 my-3">
                <ReservationsButton />
            </div>
        </main>
    );
}

export default Main;