import './App.css'
import Nav from "./components/Nav/Nav.jsx"
import Cards from './components/Cards/Cards.jsx'
import About from './components/About/About.jsx'
import Detail from './components/Detail/Detail.jsx'
import Error from './components/Error/Error.jsx'
import Form from './components/Form/Form'
import Favorites from './components/Favorites/Favorites.jsx'
import actions from './redux/actions'
import { connect } from 'react-redux'
import { useState, useEffect } from 'react'
import { Route, Routes,useLocation,useNavigate } from 'react-router-dom'



function App (props) {

  const [characters,setCharacters]=useState([]);
  const [access,setAccess]=useState(false);
  const location = useLocation();
  const navigate=useNavigate();

  useEffect(() => {
    !access && navigate('/');
 }, [access,navigate]);

  const username="rick@prueba.com"
  const password ="rick123"

  function login(userData) {
    if (userData.password === password && userData.username === username) {
       setAccess(true);
       navigate('/home');
    } else {
      window.alert("username o password incorrect")
    }
 }

 function logout(){
  setAccess(false)
  navigate("/")
 }

  function onSearch(character) {
    fetch(`http://localhost:3001/rickandmorty/onsearch/${character}`)
       .then((response) => response.json())
       .then((data) => {
          if (data.name) {
            if(characters.some(char=>char.name===data.name)){
              window.alert('El personaje ya está incluido en la lista');
            } else{
              setCharacters((oldChars) => [...oldChars, data]);
            }
          } else {
             window.alert('No hay personajes con ese ID');
          }
       });
 }

 function onClose(id){
    props.deleteFavorite(id)
    let charactersFiltered = characters.filter(character => character.id!==id);
    setCharacters(charactersFiltered);
 }

  return (
    <div className='App' style={{ padding: '25px' }}>

        {location.pathname!=="/"&&location.pathname!=="/error"?<Nav onSearch={onSearch} logout={logout}/>:""}
       
      <hr />
        <Routes>
          <Route index element={<Form login={login}/>}/>
          <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
          <Route path='/favorites' element={<Favorites/>}/>
          <Route path='/about'  element={<About/>}/>
          <Route path='/detail/:id' element={<Detail/>}/>
          <Route path='*' element={<Error/>}/>
        </Routes>
      <hr />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
     myFavorites:state.myFavorites
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

export default connect(mapStateToProps,mapDispatchToProps)(App)

