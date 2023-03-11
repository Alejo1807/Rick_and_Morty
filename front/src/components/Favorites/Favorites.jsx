import { connect } from "react-redux";
import Card from "../Cards/Card";
import style from "./Favorites.module.css"
import { useDispatch } from "react-redux";
import actions from "../../redux/actions";

function Favorites(props) {

    const { myFavorites } = props;
    console.log(myFavorites)
    const Dispatch = useDispatch()

    function order(e) {
        Dispatch(actions.orderCards(e))
    }

    function filter(e){
        Dispatch(actions.filterCards(e))
    }

    function reset(){
        Dispatch(actions.getFavorites())
    }

    return (
       <div className={style.divCards}>
        <div className={style.div1}>
            <select name="Order" onChange={order}>
                <option value="Ascendente">Ascendente</option>
                <option value="Descendente">Descendente</option>
            </select>

            <select name="Gender" onChange={filter}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">unknown</option>
            </select>

            <button onClick={reset} >Resetear</button>
            
        </div>
        <br />

          {myFavorites.map(card=><Card 
          key={myFavorites.indexOf(card)}
          id={card.id}
          name={card.name}
          species={card.species}
          gender={card.gender}
          image={card.image}
          fromFavorite={true}
          />)} 
       </div> 
    ) 
}

const mapStateToProps = (state) => {
    return {
       myFavorites:state.myFavorites
    };
 }

 export default connect(mapStateToProps)(Favorites)