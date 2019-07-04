import * as MovieApiUtil from '../util/movie_util'

export const RECEIVE_ALL_MOVIES = 'RECEIVE_ALL_MOVIES'
export const RECEIVE_MOVIE = 'RECEIVE_MOVIE'
export const CLEAR_MOVIES = 'CLEAR_MOVIES'

export const receiveMovies = movies => (
    {
        type: RECEIVE_ALL_MOVIES,
        movies
    }
)

export const receiveMovie = movie => (
    {
        type: RECEIVE_MOVIE,
        movie
    }
)

export const clearMovies = () => (
    {
        type: CLEAR_MOVIES
    }
)

export const fetchMovies = () => dispatch => (
    MovieApiUtil.fetchMovies().then(movies => dispatch(receiveMovies(movies)))
)

export const fetchMovie = id => dispatch => (
    MovieApiUtil.fetchMovie(id).then(movie => dispatch(receiveMovie(movie)))
)
