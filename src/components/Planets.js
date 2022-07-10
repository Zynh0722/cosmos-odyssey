import React, {useState, useEffect} from 'react';
import Planet from './Planet';
import PossibleRoutes from './PossibleRoutes';
import SubtitleFrom from './SubtitleFrom';
import SubtitleTo from './SubtitleTo';
import SubmitButton from './SubmitButton';
const relations = require('../planetrelations.json');

function Planets({fromPlanet, toPlanet, setFromPlanet, setToPlanet}) {

    const [activity, setActivity] = useState('');
    const [visibility, setVisibility] = useState('hidden');
    const [routes, setRoutes] = useState([]);
    const [allDone, setAllDone] = useState();

    function delay(time) {
        return new Promise(resolve => setTimeout(resolve, time));
    }

    useEffect(() => {
        try{
            if (fromPlanet.length === 0) {
                setVisibility('hiddenOut');
                delay(1950).then(() => setVisibility('hidden'));
                setActivity('');
            } else if (fromPlanet.length > 1) { 
                setVisibility('visibleIn');
                setActivity('disabled');
            }
        } catch (error) {

        }
    }, [fromPlanet])

    useEffect(() => {
        try {
            setRoutes(relations[fromPlanet]);
            if(toPlanet.length > 2) {
                setAllDone(true);
            } else {
                setAllDone(false);
            }
        } catch (error) {

        }
    })

    return (
        <div>
            <SubtitleFrom 
                activity={activity}/>
            <SubtitleTo 
                visibility={visibility}/>

            <div className='container-planets'>
                <div className='row row-planets'>
                    <div className='col-sm-1 col-planet'>
                        <Planet planetName={"Mercury"}
                            fromPlanet={fromPlanet}
                            toPlanet={toPlanet}
                            setFromPlanet={setFromPlanet}
                            setToPlanet={setToPlanet} />
                    </div>
                    <div className='col-sm-1 col-planet'>
                        <Planet planetName={"Venus"}
                            fromPlanet={fromPlanet}
                            toPlanet={toPlanet}
                            setFromPlanet={setFromPlanet}
                            setToPlanet={setToPlanet} />
                    </div>
                    <div className='col-sm-1 col-planet'>
                        <Planet planetName={"Earth"}
                            fromPlanet={fromPlanet}
                            toPlanet={toPlanet}
                            setFromPlanet={setFromPlanet}
                            setToPlanet={setToPlanet} />
                    </div>
                    <div className='col-sm-1 col-planet'>
                        <Planet planetName={"Mars"}
                            fromPlanet={fromPlanet}
                            toPlanet={toPlanet}
                            setFromPlanet={setFromPlanet}
                            setToPlanet={setToPlanet} />
                    </div>
                    <div className='col col-planet'>
                        <Planet planetName={"Jupiter"}
                            fromPlanet={fromPlanet}
                            toPlanet={toPlanet}
                            setFromPlanet={setFromPlanet}
                            setToPlanet={setToPlanet} />
                    </div>
                    <div className='col col-planet'>
                        <Planet planetName={"Saturn"}
                            fromPlanet={fromPlanet}
                            toPlanet={toPlanet}
                            setFromPlanet={setFromPlanet}
                            setToPlanet={setToPlanet} />
                    </div>
                    <div className='col-sm-2 col-planet'>
                        <Planet planetName={"Uranus"}
                            fromPlanet={fromPlanet}
                            toPlanet={toPlanet}
                            setFromPlanet={setFromPlanet}
                            setToPlanet={setToPlanet} />
                    </div>
                    <div className='col-sm-2 col-planet'>
                        <Planet planetName={"Neptune"}
                            fromPlanet={fromPlanet}
                            toPlanet={toPlanet}
                            setFromPlanet={setFromPlanet}
                            setToPlanet={setToPlanet} />
                    </div>
                </div>
            </div>
            <PossibleRoutes 
                routes={routes}/>
            <SubmitButton 
                allDone={allDone}
                fromPlanet={fromPlanet}
                toPlanet={toPlanet}/>
        </div>
    );
}

export default Planets;