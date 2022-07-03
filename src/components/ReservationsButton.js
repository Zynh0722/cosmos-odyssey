import React from 'react';
import {Link} from 'react-router-dom';
import './css/mainbutton.css';

function ReservationsButton() {
    return ( 
            <Link className="btn btn-primary" to="/reservations">
                Check reservations
            </Link>
    );
}

export default ReservationsButton;