import {
    RECEIVE_ALL_SERIES,
    RECEIVE_SERIES,
    CLEAR_SERIES
} from '../actions/series_actions'
import merge from 'lodash/merge'

const seriesReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_ALL_SERIES:
            const newState = merge({}, state)
            action.shows.forEach(series => {
                newState[series.id] = series
            })
            return newState
        case RECEIVE_SERIES:
            return merge({}, state, { [action.series.id]: action.series })
        case CLEAR_SERIES:
            return {}
        default:
            return state
    }
}

export default seriesReducer