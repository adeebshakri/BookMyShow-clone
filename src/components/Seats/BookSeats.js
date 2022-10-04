import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './BookSeats.css';
import Seats from './Seats';

//all seats with names
const allSeats = [
    "1A",
    "2A",
    "3A",
    "4A",
    "5A",
    "6A",
    "7A",
    "8A",
    "9A",
    "10A",
    "11A",
    "12A",
    "13A",
    "14A",
    "15A",
    "16A",
    "17A",
    "18A",
    "1B",
    "2B",
    "3B",
    "4B",
    "5B",
    "6B",
    "7B",
    "8B",
    "9B",
    "10B",
    "11B",
    "12B",
    "13B",
    "14B",
    "15B",
    "16B",
    "17B",
    "18B",
    "1C",
    "2C",
    "3C",
    "4C",
    "5C",
    "6C",
    "7C",
    "8C",
    "9C",
    "10C",
    "11C",
    "12C",
    "13C",
    "14C",
    "15C",
    "16C",
    "17C",
    "18C",
    "1D",
    "2D",
    "3D",
    "4D",
    "5D",
    "6D",
    "7D",
    "8D",
    "9D",
    "10D",
    "11D",
    "12D",
    "13D",
    "14D",
    "15D",
    "16D",
    "17D",
    "18D",
    "1E",
    "2E",
    "3E",
    "4E",
    "5E",
    "6E",
    "7E",
    "8E",
    "9E",
    "10E",
    "11E",
    "12E",
    "13E",
    "14E",
    "15E",
    "16E",
    "17E",
    "18E",
    "1F",
    "2F",
    "3F",
    "4F",
    "5F",
    "6F",
    "7F",
    "8F",
    "9F",
    "10F",
    "11F",
    "12F",
    "13F",
    "14F",
    "15F",
    "16F",
    "17F",
    "18F"
];

//create seats
const handleCreateSeats = () => {
    const createdSeats = [];
    let i = 1, k = 'A';
    while (i < 108) {
        let j = 1;
        while (j <= 18) {
            createdSeats.push(j + k);
            j++; i++;
        }
        k = String.fromCharCode(k.charCodeAt(0) + 1);
    }
    return createdSeats;
}


const BookSeats = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const { title, ageCertificate } = location.state;
    const [selectedTime, setSelectedTime] = useState({ time: "three", unavailableSeats: ["10A", "4C", "5F", "4F", "10C", "10A", "17D", "17F", "18B", "12D", "13E"] });   //this is for the timing and contains the array of seats which are already booked respectively for each timing.
    const [availableSeats, setAvailableSeats] = useState(["10A", "4C", "5F", "4F", "10C", "10A", "17D", "17F", "18B", "12D", "13E"]);
    const [bookedSeats, setBookedSeats] = useState([]);  //contains booked seats array.
    const createSeats = handleCreateSeats();   //creats seats grid.

    useEffect(() => {  //handle if selected time changes.
        setAvailableSeats(allSeats.filter(eachSeat => !selectedTime.unavailableSeats.includes(eachSeat)));
        setBookedSeats([]);
    }, [selectedTime]);

    //add the chosen seat to the bookedSeats array.
    const addToBookedSeats = (event) => {
        if (!event.target.className.includes('disabled')) {   //for seats already booked
            if (bookedSeats.includes(event.target.innerText)) {    //to discard a chosen seat
                const newAvailable = bookedSeats.filter(seat => seat !== event.target.innerText);
                setBookedSeats(newAvailable);
            } else { //add the seat to bookedSeats array.
                setBookedSeats([...bookedSeats, event.target.innerText]);
            }
        }
        else {  //for a seat that is already booked
            alert("Sorry, this seat is already booked");
        }
    };

    const confirmBooking = () => {
        navigate(`/confirmbooking`, { state: { title, bookedSeats, selectedTime: selectedTime.time } });
    };

    const changeSelectedTime = (val) => {
        setSelectedTime({
            ...selectedTime,
            time: val,
            unavailableSeats: val === "three" ? ["10A", "4C", "5F", "4F", "10C", "10A", "17D", "17F", "18B", "12D", "13E"] :
                val === "nine" ? ["1A", "5E", "4A", "9D", "7E", "2A", "3A", "3B", "8C"] : ["10A", "12C", "18A", "3F", "9B", "18C", "17E", "16B", "16A"]
        })
    }

    const handleGoBack = () => {
        navigate(`/`);
    }

    const getTomorrrow = () => {
        var currentDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
        var day = currentDate.getDate()
        var month = currentDate.getMonth() + 1
        var year = currentDate.getFullYear()
        return (day + "/" + month + "/" + year)
    }

    return (
        <div>
            <div className="go-to-movies" onClick={handleGoBack}>Back to All Movies</div>
            <div className="movie-name">{title} {ageCertificate}</div>
            <div>Tomorrow, {getTomorrrow()}</div>
            <div>
                <span className={`${selectedTime.time === "three" ? "time chosen" : "time"}`} onClick={() => changeSelectedTime("three")}>3:00 PM</span>
                <span className={`${selectedTime.time === "six" ? "time chosen" : "time"}`} onClick={() => changeSelectedTime("six")}>6:00 PM</span>
                <span className={`${selectedTime.time === "nine" ? "time chosen" : "time"}`} onClick={() => changeSelectedTime("nine")}>9:00 PM</span>
            </div>
            <p className="price">Price: Rs 120</p>
            <p className="screen">Screen</p>
            <Seats values={createSeats}
                availableSeats={availableSeats}
                bookedSeats={bookedSeats}
                addToBookedSeats={addToBookedSeats} />
            <button className="book-tickets" onClick={confirmBooking}>Book seats</button>
        </div>

    );
}

export default BookSeats;