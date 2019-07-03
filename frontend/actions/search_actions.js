import * as SearchApiUtil from '../util/search_util'

export const RECEIVE_SEARCHED_MOVIES = 'RECEIVE_SEARCHED_MOVIES'

export const receiveSearchedMovies = (movies) => (
    {
        type: RECEIVE_SEARCHED_MOVIES,
        movies        
    }
)

export const searchMovies = (query) => dispatch => (
    SearchApiUtil.searchMovies(query).then(movies => dispatch(receiveSearchedMovies(movies)))
)


