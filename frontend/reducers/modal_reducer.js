import { MODAL_OPEN, MODAL_CLOSE } from '../actions/modal_actions'

const modalReducer = (state = null, action) => {
    switch(action.type) {
        case MODAL_OPEN:
            return action.modal
        case MODAL_CLOSE:
            return null
        default:
            return state
    }
}

export default modalReducer