import React from "react";
import SearchBar from "../SearchBar/SearchBar.jsx"
import Aleatorio from "../Aleatorio/Aleatorio.jsx";
import style from "./Nav.module.css"
import { NavLink } from "react-router-dom";

export default function Nav(props){
    return(
        <div className={style.divNav}>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/favorites">Favorites</NavLink>
            <NavLink to="/about">About</NavLink>
            <SearchBar onSearch={props.onSearch}/>
            <Aleatorio onSearch={props.onSearch}/>
            <button onClick={props.logout}>Logout</button>
        </div>
    )

} 