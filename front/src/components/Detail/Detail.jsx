import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Details () {

    const [character,setCharacter]=useState({});
    const [origen,setOrigen] = useState({});
    const { id } =useParams();
    const navigate = useNavigate();
   
    function backToHome(){
        navigate("/home");
      }

    useEffect(() => {
        fetch(`http://localhost:3001/rickandmorty/detail/${id}`)
          .then((response) => response.json())
          .then((char) => {

            if (char.name) {
              setCharacter(char);
              setOrigen(char.origin)
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        return () => setCharacter({});
      }, [id]);

      return(
        <div>
            <h1>{character.name}</h1>
            <h2>Status: {character.status}</h2>
            <h2>Especie: {character.species}</h2>
            <h2>Género: {character.gender}</h2>
            <h2>Origen: {origen.name}</h2>
            <button onClick={backToHome}>Volver</button>
            <img  src={ character.image } alt=""/> 
        </div>
      )


}