import React, {useState, useEffect} from 'react';
import Planet from './Planet';
import PossibleRoutes from './PossibleRoutes';
import SubtitleFrom from './SubtitleFrom';
import SubtitleTo from './SubtitleTo';

function Planets() {

    const [activity, setActivity] = useState('');
    const [visibility, setVisibility] = useState('hidden');
    const [clickable, setClickable] = useState([]);
    const [selectedFrom, setSelectedFrom] = useState();
    const [selectedTo, setSelectedTo] = useState();
    const [selectedObject1, setSelectedObject1] = useState();
    const [selectedObject2, setSelectedObject2] = useState();

    useEffect(() => {
        if (selectedObject1) {
            setVisibility('visibleIn');
        }    
    }, [selectedObject1])

    return (
        <div>
            <SubtitleFrom activity={activity} />
            <SubtitleTo visibility={visibility} />

            <div className='container-planets'>
                <div className='row row-planets'>
                    <div className='col-sm-1 col-planet'>
                        <Planet planetName={"Mercury"}
                            clickable={clickable}
                            selectedObject1={selectedObject1}
                            selectedObject2={selectedObject2}
                            setSelectedObject1={setSelectedObject1}
                            setSelectedObject2={setSelectedObject2} />
                    </div>
                    <div className='col-sm-1 col-planet'>
                        <Planet planetName={"Venus"}
                            clickable={clickable}
                            selectedObject1={selectedObject1}
                            selectedObject2={selectedObject2}
                            setSelectedObject1={setSelectedObject1}
                            setSelectedObject2={setSelectedObject2} />
                    </div>
                    <div className='col-sm-1 col-planet'>
                        <Planet planetName={"Earth"}
                            clickable={clickable}
                            selectedObject1={selectedObject1}
                            selectedObject2={selectedObject2}
                            setSelectedObject1={setSelectedObject1}
                            setSelectedObject2={setSelectedObject2} />
                    </div>
                    <div className='col-sm-1 col-planet'>
                        <Planet planetName={"Mars"}
                            clickable={clickable}
                            selectedObject1={selectedObject1}
                            selectedObject2={selectedObject2}
                            setSelectedObject1={setSelectedObject1}
                            setSelectedObject2={setSelectedObject2} />
                    </div>
                    <div className='col col-planet'>
                        <Planet planetName={"Jupiter"}
                            clickable={clickable}
                            selectedObject1={selectedObject1}
                            selectedObject2={selectedObject2}
                            setSelectedObject1={setSelectedObject1}
                            setSelectedObject2={setSelectedObject2} />
                    </div>
                    <div className='col col-planet'>
                        <Planet planetName={"Saturn"}
                            clickable={clickable}
                            selectedObject1={selectedObject1}
                            selectedObject2={selectedObject2}
                            setSelectedObject1={setSelectedObject1}
                            setSelectedObject2={setSelectedObject2} />
                    </div>
                    <div className='col-sm-2 col-planet'>
                        <Planet planetName={"Uranus"}
                            clickable={clickable}
                            selectedObject1={selectedObject1}
                            selectedObject2={selectedObject2}
                            setSelectedObject1={setSelectedObject1}
                            setSelectedObject2={setSelectedObject2} />
                    </div>
                    <div className='col-sm-2 col-planet'>
                        <Planet planetName={"Neptune"}
                            clickable={clickable}
                            selectedObject1={selectedObject1}
                            selectedObject2={selectedObject2}
                            setSelectedObject1={setSelectedObject1}
                            setSelectedObject2={setSelectedObject2} />
                    </div>
                </div>
            </div>
            <PossibleRoutes />
        </div>
    );
}

export default Planets;