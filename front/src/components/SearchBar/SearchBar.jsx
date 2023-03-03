import { useState } from 'react'
import style from "../Nav/Nav.module.css"

export default function SearchBar(props) {

   const [character,setCharacter] = useState("")

   const handleChange =(event)=>{
      setCharacter(
         event.target.value
      )
   }


   return (
      <div>
         <input type='search' onChange={handleChange} className={style.search}/>
      <button onClick={()=>props.onSearch(character)} className={style.NavLink}>Agregar</button> 
      </div>
   );
}
