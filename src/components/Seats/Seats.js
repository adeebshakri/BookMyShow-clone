import React from 'react';

const Seats = (props) => {
    return (
        <div className='section'>
            {props.values.map(seat => {
                const isAvailable = props.availableSeats.includes(seat);
                const isBooked = props.bookedSeats.includes(seat);
                let seatDetail;
                if (!isAvailable) {
                    seatDetail = 'seat disabled';
                }
                if (isBooked) {
                    seatDetail = 'seat booked';
                }
                return <div className={seatDetail} onClick={props.addToBookedSeats} key={seat}>{seat}</div>;
            })}
        </div>
    );
}
export default Seats;