import React, { useEffect, useState } from 'react'
import styles from "./SingleMoviePage.module.css";
import { useParams } from 'react-router-dom';
import SingleMovieComponent from '../../components/singleMovieComponent/SingleMovieComponent';

const SingleMoviePage = () => {
    const {id} = useParams();
    const [singleMovieData,setSingleMoviesData] = useState(null)
    const fetchMovieData = async(id) => {
        try {
            const response = await fetch
            (`https://www.omdbapi.com/?i=${id}&apikey=fd32ce49`);
      
            const data = await response.json();
                setSingleMoviesData(data);
      
            } catch (error) {
                console.log(error);
            };
        }
  
    useEffect(()=>{
    fetchMovieData(id);
    }, [])

    return (
        <div className = {styles.SingleMovieComponentWrap}>
            <SingleMovieComponent {...singleMovieData}/>
        </div>
    );
};

export default SingleMoviePage; 