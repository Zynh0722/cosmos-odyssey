import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';
import './css/main.css';

function SubmitButton({allDone, fromPlanet, toPlanet}) {

    useEffect(() => {
        if (allDone) {
            document.getElementById("Continue")
                    .classList.remove('disabled');
        } else {
            document.getElementById("Continue")
                    .classList.add('disabled');
        }
    });

    return ( 
        <Link id="Continue" className="btn btn-confirm disabled" to="/pricelist">
            Confirm
        </Link>
     );
}

export default SubmitButton;