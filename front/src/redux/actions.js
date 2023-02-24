import axios from 'axios'

const addFavorite = (character) => {


    return async (dispatch) => {

        try{
            let pay = await axios.post('http://localhost:3001/rickandmorty/fav',character)
            .then((response) => response.data)

            dispatch(
                {
                    type:"ADD_FAVORITE",
                    payload:pay}
            )
        } catch(e) {
            console.log(Error(e));
        }
    }
}

const deleteFavorite = (id) => {

    return async (dispatch) => {
        try{
            let pay = await axios.delete(`http://localhost:3001/rickandmorty/fav/${id}`)
            .then((response) => response.data)

            dispatch({
                type:"DELETE_FAVORITE",
                payload: parseInt(pay)
            })

        } catch (e) {
            console.log(Error(e));
        }
    }
    
}

const orderCards = (e) => {
    return {
        type: "ORDER",
        payload:e.target.value
    }
}

const filterCards = (e) => {
    return {
        type: "FILTER",
        payload:e.target.value
    }
}

const getFavorites = () => {

    return async (dispatch) => {
        try{
            let favorites = await axios.get(`http://localhost:3001/rickandmorty/fav/`)
            .then((response) => response.data)

            dispatch({
                type:"GET_FAVORITES",
                payload: favorites
            })

        } catch (e) {
            console.log(Error(e));
        }
    }
}

const actions = {addFavorite,deleteFavorite,orderCards,filterCards,getFavorites}

export default actions