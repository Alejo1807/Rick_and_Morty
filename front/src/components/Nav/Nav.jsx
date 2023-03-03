import React from "react";
import SearchBar from "../SearchBar/SearchBar.jsx"
import Aleatorio from "../Aleatorio/Aleatorio.jsx";
import style from "./Nav.module.css"
import { NavLink } from "react-router-dom";

export default function Nav(props){
    return(
        <div className={style.divNav}>
            <div>
                <NavLink to="/home" className={({isActive})=> isActive ? style.active : style.NavLink}>Home</NavLink>
                <NavLink to="/favorites" className={({isActive})=> isActive ? style.active : style.NavLink}>Favorites</NavLink>
                <NavLink to="/about" className={({isActive})=> isActive ? style.active : style.NavLink}>About</NavLink>
            </div>

            <div>
                <SearchBar onSearch={props.onSearch}/>
                <Aleatorio onSearch={props.onSearch}/>
            </div>
            <div>
                <button onClick={props.logout} className={style.logout}>Logout</button>
            </div> 
        </div>
    )

} 

