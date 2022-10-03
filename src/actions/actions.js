export const SET_MOVIES = 'SET_MOVIES';
export const SET_FILTER = 'SET_FILTER';
export const CREATE_USER = 'CREATE_USER';
export const DELETE_USER = 'DELETE_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const SET_FAVORITES = 'SET FAVORITES';
export const SET_REMOVEFAVORITES = 'SET_REMOVEFAVORITES';

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

export function createUser(username, password, email, birthday) {
    return {
        type: CREATE_USER,
        username: username,
        password: password,
        email: email,
        birthday: birthday
    };
}

export function deleteUser(id) {
    return {
        type: DELETE_USER,
        id
    };
}


export function updateUser(username, password, email, birthday) {
    return {
        type: UPDATE_USER,
        username: username,
        password: password,
        email: email,
        birthday: birthday
    };
}

export function setFavorites(value) {
    return {
        type: SET_FAVORITES,
        value
    };
}

export function setRemoveFavorites(value) {
    return {
        type: SET_REMOVEFAVORITES,
        value
    };
}