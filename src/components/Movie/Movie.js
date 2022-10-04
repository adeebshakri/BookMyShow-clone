import React from "react";
import { Link, useNavigate } from "react-router-dom";
import './Movie.css'


const Movie = (movie) => {
    const { img, title } = movie.movie;
    const navigate = useNavigate();

    const handleOnClick = () => {
        navigate(`/movies/${title}`, { state: movie });
    }

    return (
        <div className="movie-thumbnail-container">
            <img src={img.thumbnail} className={"movie-thumbnail"} onClick={handleOnClick} />
        </div>
    )
}

export default Movie;
