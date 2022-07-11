import React, { useEffect, useState } from 'react';
import { Fragment } from 'react';
import ReservationRow from './ReservationRow';
import NoReservationRow from './NoReservationRow';

function Reservations({reservations}) {

    console.log(reservations);

    const [condition, setCondition] = useState(false);

    useEffect(() => {
        if (reservations !== null && reservations !== undefined && reservations.length > 0) {
            setCondition(true);
        }
    }, [])

    return (  
        <Fragment>
            <p className='subtitle'>Reservations</p>
            <div className='container container-reservations'>
                <div className='row row-titles'>
                    <div className='col-sm-3'>Name</div>
                    <div className='col-sm-2'>Route(s)</div>
                    <div className='col-sm-2'>Total Quoted Price</div>
                    <div className='col-sm-2'>Total Quoted Time</div>
                    <div className='col-sm-2'>Travel Company Name(s)</div>
                </div>
                {
                    condition ?
                        reservations.map((reservation) =>
                            <ReservationRow
                                reservation={reservation} />)
                        :
                        <NoReservationRow />
                }
            </div>
        </Fragment>
    );
}

export default Reservations;