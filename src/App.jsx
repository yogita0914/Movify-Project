import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import MoviesPage from "./pages/moviesPage/MoviesPage";
import SingleMoviePage from "./pages/singleMoviePage/SingleMoviePage";
import Navbar from "./components/navbar/Navbar";
import React , { useState } from "react";

function App() {
    const [movie, setMovie] = useState("avengers");
    return (
    <>
    <BrowserRouter>
    <Navbar movie = {movie} setMovie = {setMovie}/>
         <Routes>
            <Route path="/" element={<MoviesPage movie = {movie} setMovie = {setMovie}/>} />
            <Route path="/:id" element={<SingleMoviePage/>} />
         </Routes>
    </BrowserRouter>
    </>
    );
};

export default App;
