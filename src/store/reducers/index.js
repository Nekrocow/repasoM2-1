import { GET_MOVIES, SEARCH_MOVIE, /*ADD_MOVIE*/ } from '../actions';

const initialState = {
    movies: [],
    favorites: [],
    detail: [],
};

const reducer = (state=initialState, actions) => {
    switch(actions.type){
        case GET_MOVIES:
        return ({
            ...state,
            movies: actions.payload
        });

        case SEARCH_MOVIE:
        return ({
            ...state,
            movies: actions.payload
        });

        default:

        return state;
    };
};

export default reducer;
