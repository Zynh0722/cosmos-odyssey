import React, { Fragment } from 'react';

function SubtitleTo({visibility}) {
    return (  
        <Fragment>
            <h2 className={'subtitle subtitle-traveling-to ' + visibility}>Where are you traveling to?</h2>
        </Fragment>
    );
}

export default SubtitleTo;