import { combineReducers } from "redux";
import { SET_FILTER, SET_MOVIES, CREATE_USER, UPDATE_USER, DELETE_USER,  SET_FAVORITES, REMOVE_FAVORITES } from "../actions/actions";

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


function favorites(state=[], action) {
    switch(action.type) {
        //add to the array
        case SET_FAVORITES:
            return {
                ...state, 
                favorites: [...state.favorites, action.index] 
            }
        case REMOVE_FAVORITES:
            //remove from the array
            return {
                ...state,
                favorites: [...state.favorites.slice(0, index), state.favorites.slice(index + 1)]
            }
            
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