import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import './MovieDetails.css';

const MovieDetails = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const {
        ageCertificate,
        description,
        durationMins,
        genres,
        img,
        title } = location.state.movie;

    const handleOnClick = () => {
        navigate(`/movies/bookseats/${title}`, { state: { title: title, ageCertificate: ageCertificate } });
    }

    const handleGoBack = () => {
        navigate(`/`);
    }

    return (
        <div className="movie-details">
            <div><img src={img.large} className="img" /></div>
            <div>
                <div className="go-back" onClick={handleGoBack}>Back to All Movies</div>
                <div className="title">{title}</div>
                <div className="one-liners">
                <div className="i">{durationMins}</div>
                <div className="i">{ageCertificate}</div>
                {genres.map(genre => <span key={genre}>-{genre}-</span>)}
                </div>
                <div className="desc-title">About the movie</div>
                <div className="desc">{description}</div>
                <button className="book-tickets" onClick={handleOnClick}>Book Tickets</button>
            </div>

        </div>
    )
}

export default MovieDetails;
