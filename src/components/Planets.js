import React, {useState, useEffect} from 'react';
import Planet from './Planet';
import PossibleRoutes from './PossibleRoutes';
import SubtitleFrom from './SubtitleFrom';
import SubtitleTo from './SubtitleTo';
import SubmitButton from './SubmitButton';
const relations = require('../planetrelations.json');

function Planets() {

    const [activity, setActivity] = useState('');
    const [visibility, setVisibility] = useState('hidden');
    const [routes, setRoutes] = useState([]);
    const [selectedObject1, setSelectedObject1] = useState();
    const [selectedObject2, setSelectedObject2] = useState();
    const [allDone, setAllDone] = useState(false);

    function delay(time) {
        return new Promise(resolve => setTimeout(resolve, time));
    }

    useEffect(() => {
        try{
            if (selectedObject1.length === 0) {
                console.log(selectedObject1);
                setVisibility('hiddenOut');
                delay(1950).then(() => setVisibility('hidden'));
                setActivity('');
            } else if (selectedObject1.length > 1) { 
                setVisibility('visibleIn');
                setActivity('disabled');
            }
        } catch (error) {

        }
    }, [selectedObject1])

    useEffect(() => {
        try {
            setRoutes(relations[selectedObject1]);
            if(selectedObject2.length > 2) {
                document.getElementById("Continue").
                    classList.remove('disabled');
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
                            selectedObject1={selectedObject1}
                            selectedObject2={selectedObject2}
                            setSelectedObject1={setSelectedObject1}
                            setSelectedObject2={setSelectedObject2} />
                    </div>
                    <div className='col-sm-1 col-planet'>
                        <Planet planetName={"Venus"}
                            selectedObject1={selectedObject1}
                            selectedObject2={selectedObject2}
                            setSelectedObject1={setSelectedObject1}
                            setSelectedObject2={setSelectedObject2} />
                    </div>
                    <div className='col-sm-1 col-planet'>
                        <Planet planetName={"Earth"}
                            selectedObject1={selectedObject1}
                            selectedObject2={selectedObject2}
                            setSelectedObject1={setSelectedObject1}
                            setSelectedObject2={setSelectedObject2} />
                    </div>
                    <div className='col-sm-1 col-planet'>
                        <Planet planetName={"Mars"}
                            selectedObject1={selectedObject1}
                            selectedObject2={selectedObject2}
                            setSelectedObject1={setSelectedObject1}
                            setSelectedObject2={setSelectedObject2} />
                    </div>
                    <div className='col col-planet'>
                        <Planet planetName={"Jupiter"}
                            selectedObject1={selectedObject1}
                            selectedObject2={selectedObject2}
                            setSelectedObject1={setSelectedObject1}
                            setSelectedObject2={setSelectedObject2} />
                    </div>
                    <div className='col col-planet'>
                        <Planet planetName={"Saturn"}
                            selectedObject1={selectedObject1}
                            selectedObject2={selectedObject2}
                            setSelectedObject1={setSelectedObject1}
                            setSelectedObject2={setSelectedObject2} />
                    </div>
                    <div className='col-sm-2 col-planet'>
                        <Planet planetName={"Uranus"}
                            selectedObject1={selectedObject1}
                            selectedObject2={selectedObject2}
                            setSelectedObject1={setSelectedObject1}
                            setSelectedObject2={setSelectedObject2} />
                    </div>
                    <div className='col-sm-2 col-planet'>
                        <Planet planetName={"Neptune"}
                            selectedObject1={selectedObject1}
                            selectedObject2={selectedObject2}
                            setSelectedObject1={setSelectedObject1}
                            setSelectedObject2={setSelectedObject2} />
                    </div>
                </div>
            </div>
            <PossibleRoutes 
                routes={routes}/>
            <SubmitButton 
                allDone={allDone}/>
        </div>
    );
}

export default Planets;