import { useState } from 'react'

export default function SearchBar(props) {

   const [character,setCharacter] = useState("")

   const handleChange =(event)=>{
      setCharacter(
         event.target.value
      )
   }


   return (
      <div>
         <input type='search' onChange={handleChange}/>
      <button onClick={()=>props.onSearch(character)}>Agregar</button> 
      </div>
   );
}
