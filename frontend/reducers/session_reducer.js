import {
    LOGOUT_CURRENT_USER,
    RECEIVE_CURRENT_USER
} from '../actions/session_actions'

const _nullUser = Object.freeze({
    id: null
})

export default (oldState = _nullUser, action) => {
    Object.freeze(oldState)
    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            const newState = Object.assign({}, oldState, { id: action.currentUser.id })
            return newState
        case LOGOUT_CURRENT_USER:
            return _nullUser
        default:
            return oldState
    }
}