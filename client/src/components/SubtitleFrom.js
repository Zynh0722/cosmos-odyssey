import React from 'react';

function SubtitleFrom({activity}) {

    return (
        <h2 className={'subtitle subtitle-traveling-from visibleIn ' + activity}>Where are you traveling from?</h2>
    );
}

export default SubtitleFrom;