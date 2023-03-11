import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import style from "./style.module.css"
import actions from "../../redux/actions";
import { connect } from "react-redux";

function Card(props) {
   const [isFav,setIsFav] =useState(false);
   const {id,name,species,gender,image} = props
   const character = {id,name,species,gender,image}

   const handleFavorite = () => {
      if(isFav===true){
         props.deleteFavorite(props.id);
         setIsFav(false);
      } else {
         setIsFav(true);
         props.addFavorite(character)
      }
   }
   
   React.useEffect(() => {
      if(props.allCharacters.some((fav) => fav.id === props.id)) setIsFav(true);
   }, [props.allCharacters,props.id]);

   return (
      <div key={props.index} className={style.divCard}>
         <div>
            <NavLink to={`/detail/${props.id}`} className={style.Nav}>
               <h1>{ props.name }</h1>
            </NavLink>
            <div>
               {props.fromFavorite?"":<button onClick={()=>props.onClose(props.id)}>X</button>}
               {isFav?<button onClick={handleFavorite}>💚</button>:<button onClick={handleFavorite}>🖤</button>}
            </div>
         </div>
         
         <img  src={ props.image } alt="" className={style.imgCard}/> 
         <h2>Species: { props.species }</h2>
         <h3>Gender: { props.gender }</h3>
      </div>
   );
}

const mapStateToProps = (state) => {
   return {
      myFavorites:state.myFavorites,
      allCharacters:state.allCharacters
   };
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFavorite: function(character){
         dispatch(actions.addFavorite(character))
      },
      deleteFavorite: function(id){
         dispatch(actions.deleteFavorite(id))
      }
   }
}

export default connect(mapStateToProps,mapDispatchToProps)(Card)