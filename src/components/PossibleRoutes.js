import React from 'react';

function PossibleRoutes({route1, route2}) {
    return (
        <div className='container container-routes'>
            <div>
                <h3 className='subtitle-routes align-middle '>Possible Routes: {route1 + " " + route2}</h3>
            </div>
        </div>
    );
}

export default PossibleRoutes;