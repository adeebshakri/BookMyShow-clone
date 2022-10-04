import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import './ConfirmBooking.css'

const ConfirmBooking = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { selectedTime, bookedSeats, title } = location.state;

    const timeChosen = () => {
        const time = selectedTime === "three" ? "3:00 PM" : selectedTime === "six" ? "6:00 PM" : "9:00 PM";
        return time;
    }

    const handleOk = () => {
        navigate('/');
    }

    return (
        <div className="confirm-booking">
            <div>An embedded page at new-tab-page says</div>
            <div>You have booked {bookedSeats.length} tickets for the {timeChosen()} show of {title}.</div>
            <div>Your selected seats are:</div>
            {bookedSeats.map(seat => <div key={seat}>{seat}</div>)}
            <div className="ok" onClick={handleOk}>Ok</div>

        </div>
    )
}

export default ConfirmBooking;
