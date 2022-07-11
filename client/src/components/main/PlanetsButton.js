import React from 'react';
import {Link} from 'react-router-dom';
import '../css/main.css';

function PlanetsButton() {
    return ( 
            <Link className="btn planets-btn" to="/planets">
                I'm looking to make a reservation
            </Link>
    );
}

export default PlanetsButton;