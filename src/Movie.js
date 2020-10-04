import React from "react";
import "./movie.css"
import PropTypes from "prop-types";

function Movie({year, title, summary, poster, genres}){
    return <div className="movie">
        <img src={poster} alt={title} title={title}></img>
        <div className="movie_data">
        <h3 className="movie_title">{title}</h3>
        <h5 className="movie_year">{year}</h5>
        <ul className="genres">{genres.map((genre, idx) => <li className="genres_genre" key={idx}>{genre}</li>)}</ul>
        <p className="movie_summary">{summary.slice(0, 180)}...</p>
        </div>
    </div>;
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;