import axios from 'axios';
import { API_KEY } from '../../const';
export const GET_MOVIES = 'GET_MOVIES';
export const ADD_MOVIE = 'ADD_MOVIE';
export const SEARCH_MOVIE = 'SEARCH_MOVIES';


export function getMovies() {

    return async function (dispatch){

        const movies = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&&page=1`)

        return dispatch((
        {
            type: GET_MOVIES,
            payload: movies.data.results
        }
    ))}
}

export function searchMovies(input) {

    return async function (dispatch){

        const movies = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${input}`)
        
        console.log(movies.data)
        return dispatch((
        {
            type: SEARCH_MOVIE,
            payload: movies.data.results
        }
    ))}
}

export const addMovie = (payload) => {
    return{
        type: ADD_MOVIE,
        payload
    }
}
