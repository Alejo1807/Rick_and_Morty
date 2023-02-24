const initialState = {
    myFavorites:[],
    allCharacters:[]
}

const reducer = (state=initialState,action) => {
    switch(action.type){
        case "ADD_FAVORITE":
            return{
                ...state,
                allCharacters:[...state.allCharacters,action.payload],
                myFavorites:[...state.allCharacters,action.payload]
            }
        case "DELETE_FAVORITE":
            return{
                ...state,
                allCharacters:state.allCharacters.filter(favorite => favorite.id!==action.payload),
                myFavorites:state.allCharacters.filter(favorite => favorite.id!==action.payload)
            }
        case "FILTER":
            return{
                ...state,
                myFavorites:state.allCharacters.filter(favorite => favorite.gender===action.payload)
            }
        case "ORDER":
            return{
                ...state,
                myFavorites:[...state.allCharacters].sort((a,b)=>{
                    if(action.payload==="Ascendente")
                    {   
                        if (a.id > b.id) {return 1;}
                        if (a.id < b.id) {return -1;}
                        return 0;} 
                    else {
                        if (b.id > a.id) {return 1;}
                        if (b.id < a.id) {return -1;}
                        return 0;
                    }
                })
            }
        case "GET_FAVORITES":
            return{
                ...state,
                myFavorites:action.payload
            }
        default:
            return initialState;
    };
};

export default reducer