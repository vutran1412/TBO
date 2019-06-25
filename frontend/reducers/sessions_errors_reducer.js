import { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER, CLEAR_SESSION_ERRORS } from '../actions/session_actions'
import { MODAL_CLOSE } from '../actions/modal_actions'

export default (state = {}, action) => {
    Object.freeze(state)
    switch(action.type) {
        case RECEIVE_SESSION_ERRORS:
            return action.errors
        case RECEIVE_CURRENT_USER:
            return {}
        case CLEAR_SESSION_ERRORS:
            return {}
        case MODAL_CLOSE:
            return {}
        default:
            return state
    }
}