import React from 'react';
import { Fragment } from 'react';

function SubtitleFrom({activity}) {

    return (
        <Fragment>
            <h2 className={'subtitle subtitle-traveling-from visibleIn ' + activity}>Where are you traveling from?</h2>
        </Fragment>
    );
}

export default SubtitleFrom;