import { combineReducers } from 'redux'
import modal from './modal_reducer'
import search from './search_reducer'

export default combineReducers({
    modal,
    search
})