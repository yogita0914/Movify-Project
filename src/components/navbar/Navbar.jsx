import React, { useState } from "react";
import styles  from "./Navbar.module.css";
import SearchIcon from "@mui/icons-material/Search";
import DarkModeIcon  from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { Tooltip } from "@mui/material";

const Navbar = ({movie, setMovie}) => {
    const[search, setSearch] = useState("")
    const [isDark, setIsDark] = useState(false)
    const handleSearch = (e) =>{
        const value = e.target.value;
        setSearch(value);
        value.length === 0 ? setMovie("avengers"):
        setMovie(value);
    };
    return (
    <>
    <div className = {styles.navbarParent}>
        <div className = {styles.navbarLogo}>🎥 🎬 </div>
        <div className = {styles.navbarTitle}>THE MOVIFY PROJECT</div>
        <div className = {styles.navbarSearch}>
            <SearchIcon/>
            <input type = "search" placeholder="Search a Movie..." value={search} onChange={handleSearch}/>
        </div>

        {!isDark? <Tooltip title = "Switch to DarkMode">
            <DarkModeIcon className = {styles.themeIcons} onClick = {()=> {
                setIsDark(!isDark);
                document.body.classList.add("darkMode")
            }}/>
            </Tooltip>:
            <Tooltip title = "Switch to LightMode">
            <LightModeIcon className = {styles.themeIcons} onClick = {()=> {
                setIsDark(!isDark);
                document.body.classList.remove("darkMode")
            }}/>
            </Tooltip>
        }
        
        
    </div>
    </>
    );
};

export default Navbar;