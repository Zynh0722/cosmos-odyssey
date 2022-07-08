import React, { Fragment, useEffect } from 'react';
const json = require('../planetrelations.json');

function Planet({ planetName, fromPlanet, toPlanet, setFromPlanet, setToPlanet }) {
    
    function selectPlanet(planetName) {
        let planetId = document.getElementById(planetName).classList;
        //console.log(planetId);
        //console.log(planetName);

        if (!fromPlanet) {
            planetId.add('selected');
            setFromPlanet(planetName);
        } else if (planetName === fromPlanet) {
            planetId.remove('selected');
            setFromPlanet('');
            if (toPlanet) {
                document.getElementById(toPlanet).
                    classList.remove('selected');
                setToPlanet('');
            }
        } else if (fromPlanet && !toPlanet) {
            planetId.add('selected');
            setToPlanet(planetName);
        } else if (planetName == toPlanet) {
            planetId.remove('selected');
            setToPlanet('');
        }
    };

    useEffect(() => {
        let planetId = document.getElementById(planetName).classList;
        if (planetId.contains('disabled')) { 
            if (fromPlanet && !toPlanet && json[fromPlanet].includes(planetName)) {
               planetId.remove('disabled');
            } else if (fromPlanet) {
                if (planetName == fromPlanet) {
                    planetId.remove('disabled');
                    return;
                }
            } else {
                planetId.remove('disabled');
                return;
            }
        }
    });

    if (fromPlanet && toPlanet) {
        if (planetName !== fromPlanet && planetName !== toPlanet) {
            document.getElementById(planetName).classList.add('disabled');
        }
    } else if (fromPlanet) {
        if (!json[fromPlanet].includes(planetName) && planetName !== fromPlanet) {
            document.getElementById(planetName).classList.add('disabled');
        }
    };


    return (
        <Fragment>
            <div className='planet-selectable'>
                <div className='planet' onClick={() => selectPlanet(planetName)}>
                    <img id={planetName} className={'img-planet img-' + planetName.toLowerCase()} src={"/planets/" + planetName.toLowerCase() + ".png"} alt='planet'></img>
                </div>
            </div>
            <p className='planet-text'>{planetName}</p>
        </Fragment>
    );
}

export default Planet;