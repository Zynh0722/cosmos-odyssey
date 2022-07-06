import React, { Fragment, useEffect } from 'react';
const json = require('../planetrelations.json');

function Planet({ planetName, selectedObject1, selectedObject2, setSelectedObject1, setSelectedObject2 }) {
    
    function selectPlanet(planetName) {
        let planetId = document.getElementById(planetName).classList;
        //console.log(planetId);
        //console.log(planetName);

        if (!selectedObject1) {
            planetId.add('selected');
            setSelectedObject1(planetName);
        } else if (planetName === selectedObject1) {
            planetId.remove('selected');
            setSelectedObject1('');
            if (selectedObject2) {
                document.getElementById(selectedObject2).
                    classList.remove('selected');
                setSelectedObject2('');
            }
        } else if (selectedObject1 && !selectedObject2) {
            planetId.add('selected');
            setSelectedObject2(planetName);
        } else if (planetName == selectedObject2) {
            planetId.remove('selected');
            setSelectedObject2('');
        }
    };

    useEffect(() => {
        let planetId = document.getElementById(planetName).classList;
        if (planetId.contains('disabled')) { 
            if (selectedObject1 && !selectedObject2 && json[selectedObject1].includes(planetName)) {
               planetId.remove('disabled');
            } else if (selectedObject1) {
                if (planetName == selectedObject1) {
                    planetId.remove('disabled');
                    return;
                }
            } else {
                planetId.remove('disabled');
                return;
            }
        }
    });

    if (selectedObject1 && selectedObject2) {
        if (planetName !== selectedObject1 && planetName !== selectedObject2) {
            document.getElementById(planetName).classList.add('disabled');
        }
    } else if (selectedObject1) {
        if (!json[selectedObject1].includes(planetName) && planetName !== selectedObject1) {
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