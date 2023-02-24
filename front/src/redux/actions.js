const addFavorite = (character) => {
    return {
        type:"ADD_FAVORITE",
        payload:character
    }
}

const deleteFavorite = (id) => {
    return {
        type:"DELETE_FAVORITE",
        payload: id
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

const actions = {addFavorite,deleteFavorite,orderCards,filterCards}

export default actions