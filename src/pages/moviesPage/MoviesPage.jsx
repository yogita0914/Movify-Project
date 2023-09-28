import React, { useEffect, useState } from "react";
import styles from "./MoviesPage.module.css";
import MoviesChild from "../../components/moviesChild/MoviesChild";

const MoviesPage = ({movie,setMovie}) => {
    const [moviesData, setMoviesData] = useState([]);


const fetchMovieData = async(search) => {
    try {
        const response = await fetch
        (`https://www.omdbapi.com/?s=${search}&apikey=fd32ce49`);
    
        const data = await response.json();
        setMoviesData(data.Search);
    
    } catch (error) {
        console.log(error);
    };
};

    useEffect(()=>{
        fetchMovieData(movie);
    }, [movie]);


    return (
        <div className = {styles.moviesParent}>
        {
            !moviesData ?(
                <h1>Oops...Not found !</h1>
            ):(
            moviesData.map((data)=>{
                return <MoviesChild key = {data.imdbID}{...data} />
            })
        )}
        </div>
    );
};

export default MoviesPage;