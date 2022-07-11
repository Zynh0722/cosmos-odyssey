import React from 'react';
import {Link} from 'react-router-dom';
import './css/main.css';

function ReservationsButton() {
    return ( 
            <Link className="btn reservations-btn" to="/reservations">
                Check reservations
            </Link>
    );
}

export default ReservationsButton;