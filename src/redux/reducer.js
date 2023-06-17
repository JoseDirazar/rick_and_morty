import { ADD_FAV, REMOVE_FAV} from "./accionTypes";


const initialState = {
    myFavorites: []
}
/* const reducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_CARD:
            return {
            ...state,
            cards: [...state.cards, action.payload]
      };
        case GET_CARD:
            return {...state, cards: [...state.cards, action.payload]};
        default:
            return {...state}
    }
} */
const reducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ADD_FAV:
            return {
                ...state,
                myFavorites: [...state.myFavorites, payload]
            };
        case REMOVE_FAV:
            return {
                ...state,
                myFavorites: state.myFavorites.filter(fav => fav.id !== payload)
            };
        default:
            return state;
    }
};

export default reducer