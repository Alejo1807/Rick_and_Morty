import Card from './Card';
import style from "./style.module.css"

export default function Cards(props) {
   
   const { characters } = props;

   return (
      <div className={style.divCards}>
         {characters.map(card=><Card 
         key={characters.indexOf(card)}
         id={card.id}
         name={card.name}
         species={card.species}
         gender={card.gender}
         image={card.image}
         onClose={props.onClose}
         />)} 
      </div>

   ) 

}
