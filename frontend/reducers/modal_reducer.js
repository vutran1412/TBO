//adapted from https://github.com/appacademy/curriculum/blob/master/full-stack-project/resources/ModalBnB/frontend/reducers/modal_reducer.js
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

