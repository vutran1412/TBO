import { RECEIVE_ALL_MOVIES, RECEIVE_MOVIE, CLEAR_MOVIES } from '../actions/movie_actions'
import { RECEIVE_SEARCHED_MOVIES } from '../actions/search_actions'
import merge from 'lodash/merge'

const moviesReducer = (state = {}, action) => {
    Object.freeze(state)
    switch(action.type) {
        case RECEIVE_SEARCHED_MOVIES:
            const searchState = merge({}, state)
            action.movies.forEach(movie => {
                searchState[movie.id] = movie
            })
            return searchState
        case RECEIVE_ALL_MOVIES:
            const newState = merge({}, state)
            action.movies.forEach(movie => {
                newState[movie.id] = movie
            })
            return newState
        case RECEIVE_MOVIE:
            return merge({}, state, { [action.movie.id]: action.movie })
        case CLEAR_MOVIES:
            return {}
        default:
            return state
    }
}

export default moviesReducer