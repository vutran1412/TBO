import { combineReducers } from 'redux'  
import session from './sessions_errors_reducer'

const errorsReducer = combineReducers({
    session
})

export default errorsReducer