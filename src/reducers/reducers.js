import { combineReducers } from "redux";
import { SET_FILTER, SET_MOVIES, CREATE_USER, UPDATE_USER, DELETE_USER,  SET_FAVORITES } from "../actions/actions";

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



function setUser(state={}, action) {
    switch(action.type) {
        case CREATE_USER:
            return {
                username: action.username,
                password: action.password,
                email: action.email,
                birthday: action.birthday,
                };
        
        case UPDATE_USER: 
                return {
                  username: action.username,
                  password: action.password,
                  email: action.email,
                  birthday: action.birthday,  
                };
        
         case DELETE_USER: 
                 return {
                    users: state.users.filter((user, index) => index != action.id )
                 };
            default: return state;

    }
}


function favorites(state=[], action) {
    switch(action.type) {
        case SET_FAVORITES:
            console.log('SET_FAVORITES activated');
            return action.value;
            default: return state;
    }
}

function removeFavorites(state=[], action) {
    switch(action.type) {
        case SET_REMOVEFAVORITES:
            console.log('SET_REMOVEFAVORITES activated');
            return action.value;
            default: return state;
    }
}
 

const moviesApp = combineReducers({
    visibilityFilter,
    movies,
    setUser,
    favorites,
    removeFavorites
});

export default moviesApp;