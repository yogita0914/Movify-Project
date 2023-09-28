import React from 'react';
import styles from "./MoviesChild.module.css";
import { useNavigate } from 'react-router-dom';

const MoviesChild = ({Title, Year, imdbID, Type, Poster}) => {
    if (Poster === "N\A") return;
    
    const navigate = useNavigate()
  
    return (
        <div className = {styles.card} onClick = {()=> navigate("/" + imdbID)}>
            <img src = {Poster} alt = "Not found" className = {styles.cardImage} />
            <div className = {styles.cardContent} >
                <h3>
                    Title : <span>{Title}</span>
                </h3>
                <h4>
                    Year : <span>{Year}</span>
                </h4>
                <h4 className = {styles.movieType}>
                    Type : <span>{Type.toUpperCase()}</span>
                </h4>
            </div>
        </div>
    );
};

export default MoviesChild;