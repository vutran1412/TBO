import { RECEIVE_SERIES, CLEAR_EPISODES } from '../actions/series_actions'
import merge from 'lodash/merge'

const episodesReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    switch(action.type) {
        case RECEIVE_SERIES:
            return merge({}, oldState, action.episodes)
        case CLEAR_EPISODES:
            return {}
        default:
            return oldState
    }
}

export default episodesReducer