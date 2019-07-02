import { RECEIVE_ALL_MOVIES, RECEIVE_MOVIE } from '../actions/movie_actions'
import merge from 'lodash/merge'

const moviesReducer = (state = {}, action) => {
    Object.freeze(state)
    switch(action.type) {
        case RECEIVE_ALL_MOVIES:
            const newState = merge({}, state)
            action.movies.forEach(movie => {
                newState[movie.id] = movie
            })
            return newState
        case RECEIVE_MOVIE:
            return merge({}, state, { [action.movie.id]:action.movie })
        default:
            return state
    }
}

export default moviesReducer