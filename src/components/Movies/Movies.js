import React, { useEffect, useState } from "react";
import Movie from "../Movie/Movie";
import './Movies.css';
import Logo from '../../assets/images/logo.png';
import Slider from "react-slick";

//using reack-slick plugin for movies scroller.
const Movies = (moviesJson) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const movies = moviesJson.moviesJson;
        setMovies(movies);
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true
    };
    return (
        <div className="movies">
            <div className="movies-data">
                <Slider {...settings} className="my-slider">
                    {movies.map(movie => (
                        <Movie key={movie.title} movie={movie} />
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default Movies;