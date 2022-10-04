export const SET_MOVIES = 'SET_MOVIES';
export const SET_FILTER = 'SET_FILTER';
export const CREATE_USER = 'CREATE_USER';
export const DELETE_USER = 'DELETE_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const SET_FAVORITES = 'SET FAVORITES';
export const REMOVE_FAVORITES = 'SET_REMOVEFAVORITES';

export function setMovies(value) {
    return {
        type: SET_MOVIES,
        value
    };
}

export function setFilter(value) {
    return {
        type: SET_FILTER,
        value
    };
}

export function createUser(text) {
    return {
        type: CREATE_USER,
        text
    };
}

export function deleteUser(id) {
    return {
        type: DELETE_USER,
        id
    };
}


export function updateUser(text) {
    return {
        type: UPDATE_USER,
        username: username,
        text
    };
}

export function setFavorites(index) {
    return {
        type: SET_FAVORITES,
        index
    };
}

export function toggleFavorites(index) {
    return {
        type: TOGGLE_FAVORITES,
        index
    };
}