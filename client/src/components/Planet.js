import React, { useEffect } from 'react';
const json = require('../planetrelations.json');

function Planet({ planetName, fromPlanet, toPlanet, setFromPlanet, setToPlanet }) {

    function selectPlanet(planetName) {
        let planetClasses = document.getElementById(planetName).classList;

        if (!fromPlanet && !planetClasses.contains('disabled')) {
            planetClasses.add('selected');
            setFromPlanet(planetName);
        } else if (planetName === fromPlanet) {
            planetClasses.remove('selected');
            setFromPlanet('');
            if (toPlanet) {
                document.getElementById(toPlanet)
                    .classList.remove('selected');
                setToPlanet('');
            }
        } else if (fromPlanet && !toPlanet && !planetClasses.contains('disabled')) {
            planetClasses.add('selected');
            setToPlanet(planetName);
        } else if (planetName === toPlanet) {
            planetClasses.remove('selected');
            setToPlanet('');
        }
    };

    useEffect(() => {
        let planetClasses = document.getElementById(planetName).classList;
        let planetTextClasses = document.getElementById(planetName + "-text").classList;
        if (planetClasses.contains('disabled')) {
            if (fromPlanet && !toPlanet && json[fromPlanet].includes(planetName)) {
                planetClasses.remove('disabled');
                planetTextClasses.remove('disabled');
            } else if (fromPlanet) {
                if (planetName === fromPlanet) {
                    planetClasses.remove('disabled');
                    planetTextClasses.remove('disabled');
                    return;
                }
            } else {
                planetClasses.remove('disabled');
                planetTextClasses.remove('disabled');
                return;
            }
        }
    });

    try {
        if (fromPlanet && toPlanet) {
            if (planetName !== fromPlanet && planetName !== toPlanet) {
                document.getElementById(planetName).classList.add('disabled');
                document.getElementById(planetName+"-text").classList.add('disabled');
            }
        } else if (fromPlanet) {
            if (!json[fromPlanet].includes(planetName) && planetName !== fromPlanet) {
                document.getElementById(planetName).classList.add('disabled');
                document.getElementById(planetName+"-text").classList.add('disabled');
            }
        };
    } catch (error) {
        setFromPlanet("");
        setToPlanet("");
    }


    return (
        <>
            <div className='planet-selectable'>
                <div className='planet' onClick={() => selectPlanet(planetName)}>
                    <img id={planetName} className={'img-planet img-' + planetName.toLowerCase()} src={"/planets/" + planetName.toLowerCase() + ".png"} alt='planet'></img>
                </div>
            </div>
            <p id={planetName + "-text"} className='planet-text'>{planetName}</p>
        </>
    );
}

export default Planet;