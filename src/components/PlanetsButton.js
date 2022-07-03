import React from 'react';
import {Link} from 'react-router-dom';
import './css/mainbutton.css';

function PlanetsButton() {
    return ( 
            <Link className="btn" to="/planets">
                I'm looking to make a reservation
            </Link>
    );
}

export default PlanetsButton;