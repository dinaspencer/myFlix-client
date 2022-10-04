import { combineReducers } from "redux";
import { SET_FILTER, SET_MOVIES, CREATE_USER, UPDATE_USER, DELETE_USER,  SET_FAVORITES, TOGGLE_FAVORITES } from "../actions/actions";

function visibilityFilter(state='', action) {
    switch (action.type) {
        case SET_FILTER:
            console.log('SET_FILTER action triggered');
            return action.value;
            default:
                return state;
    }
}

function movies(state = [], action) {
    switch (action.type) {
        case SET_MOVIES:
            console.log('SET_MOVIES reducer reached');
            return action.value;
            default: return state;
    }
}



function users(state={}, action) {
    switch(action.type) {
        case CREATE_USER:
            return {
                ...state,
                username: action.username,
                password: action.password,
                email: action.email,
                birthday: action.birthday,
                };
        
        case UPDATE_USER: 
                return {
                    ...state,
                  username: action.username,
                  password: action.password,
                  email: action.email,
                  birthday: action.birthday,  
                };
        
         case DELETE_USER: 
                 return state.map((user, index) => (index===action.index) ? {...user, deleted: !user.deleted} : user)
                    
                 
            default: return state;

    }
}

//here we want to add (or toggle?) favorites - we're not creating a new favorite, just toggling whether it's "added" to the array or not. 
function favorites(state=[], action) {
    switch(action.type) {
        case SET_FAVORITES:
            return [
                ...state, 
                {
                    index: action.index,
                    added: false
                }
            ]
        case TOGGLE_FAVORITES:
            return state.map((favorite, index) => (index === action.index) ? {...favorite, added: !favorite.added} : favorite)
            
            default: return state;

    }
}


 

const moviesApp = combineReducers({
    visibilityFilter,
    movies,
    users,
    favorites
});

export default moviesApp;