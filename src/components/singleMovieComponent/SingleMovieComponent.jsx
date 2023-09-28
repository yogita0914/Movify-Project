import React from "react"
import styles from "./SingleMovieComponent.module.css";

const SingleMovieComponent = (
    {Title,
    Type,
    imdbRating, 
    Year, 
    Rated,
    Released,
    Runtime, 
    Genre, 
    Director, 
    Writer, 
    Actors, 
    Plot, 
    Language, 
    Country, 
    Awards, 
    Poster }) => {

    return (
        <div className = {styles.movieCard}>
            <img src = {Poster} alt = "Not Found" className = {styles.poster} />
            <div className = {styles.details}>
                <h1>{Title}</h1> 
                <div className = {styles.ratingTypingWrap}>
                    <h4 className = {styles.movieType}>
                        <span>{Type}</span>
                    </h4>
                    <h4 className = {styles.rating}>
                        <span>Imdb Rating: {imdbRating}</span>
                    </h4>
                </div>
                <p>
                    <span>Year: </span>
                    {Year}
                </p>
                <p>
                    <span>Rated: </span>
                    {Rated}
                </p>
                <p>
                    <span>Release: </span>
                    {Released}
                </p>
                <p>
                    <span>Runtime: </span>
                    {Runtime}
                </p>
                <p>
                    <span>Genre: </span>
                    {Genre}
                </p>
                <p>
                    <span>Director: </span>
                    {Director}
                </p>
                <p>
                    <span>Writer: </span>
                    {Writer}
                </p>
                <p>
                    <span>Actors: </span>
                    {Actors}
                </p>
                <p>
                    <span>Plot: </span>
                    {Plot}
                </p>
                <p>
                    <span>Language: </span>
                    {Language}
                </p>
                <p>
                    <span>Country: </span>
                    {Country}
                </p>
                <p>
                    <span>Awards: </span>
                    {Awards}
                </p>

            </div>

        </div>
    );
};

export default SingleMovieComponent;