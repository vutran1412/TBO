import { RECEIVE_ALL_SERIES, RECEIVE_SERIES } from '../actions/series_actions'
import merge from 'lodash/merge'

const seriesReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    switch(action.type) {
        case RECEIVE_ALL_SERIES:
            return merge({}, oldState, action.series)
        case RECEIVE_SERIES:
            return merge({}, oldState, { [action.series.id]: action.series})
        default:
            return oldState
    }
}

export default seriesReducer