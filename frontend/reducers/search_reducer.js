import {
    RECEIVE_SEARCH_RESULTS,
    CLEAR_SEARCH_RESULTS
} from '../actions/search_actions'
import merge from 'lodash/merge'

const searchReducer = (state ={}, action) => {
    Object.freeze(state)
    switch(action.type) {
        case RECEIVE_SEARCH_RESULTS:
            const newState = merge({}, state)
            action.searchRes.forEach(res => {
                newState[res.id] = res
            })
            return newState
        case CLEAR_SEARCH_RESULTS:
            return {}
        default:
            return state
    }
}

export default searchReducer