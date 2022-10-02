export const SET_MOVIES = 'SET_MOVIES';
export const SET_FILTER = 'SET_FILTER';
export const SET_USER = 'SET_USER';
export const SET_USERDELETE = 'SET_USERDELETE';
export const SET_USERUPDATE = 'SET_USERUPDATE';
export const SET_DIRECTOR = 'SET_DIRECTOR';
export const SET_GENRE = 'SET_GENRE';
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

export function setUser(value) {
    return {
        type: SET_USER,
        value
    };
}

export function setUserDelete(value) {
    return {
        type: SET_USERDELETE,
        value
    };
}


export function setUserUpdate(value) {
    return {
        type: SET_USERUPDATE,
        value
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