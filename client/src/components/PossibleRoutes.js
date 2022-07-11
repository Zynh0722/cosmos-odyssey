import React from 'react';

function PossibleRoutes({routes}) {

    let textRoutes;

    try {
        textRoutes = routes.join(", ")
    } catch (error) {
        
    }

    return (
        <div className='container container-routes'>
            <div>
                <h3 className='subtitle subtitle-routes'>Possible Routes: {textRoutes}</h3>
            </div>
        </div>
    );
}

export default PossibleRoutes;