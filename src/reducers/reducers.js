import { combineReducers } from "redux";
import { SET_FILTER, SET_MOVIES, SET_USER, SET_USERUPDATE, SET_USERDELETE, SET_REGISTRATION, SET_FAVORITES } from "../actions/actions";

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
        case SET_USER:
            console.log('SET_USER triggered');
            return action.value;
            default: return state;
    }
}


function updateUser(state='', action) {
    switch(action.type) {
        case SET_USERUPDATE:
            console.log('SET_USERUPDATE triggered');
            return action.value;
            default: return state;
    }
}

function deleteUser(state=[], action) {
    switch(action.type) {
        case SET_USERUPDATE:
            console.log('SET_USERDELETE triggered');
            return action.value;
            default: return state;
    }
}

function register(state='', action) {
    switch(action.type) {
        case SET_REGISTRATION:
            console.log('SET_REGISTRATION activated');
            return action.value;
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
 

const moviesApp = combineReducers({
    visibilityFilter,
    movies,
    setUser,
    updateUser,
    deleteUser,
    register,
    favorites
});

export default moviesApp;