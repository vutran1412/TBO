import * as SessionApiUtil from '../util/session_api_util'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER' 
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS'

export const receiveCurrentUser = currentUser => (
    {
        type: RECEIVE_CURRENT_USER,
        currentUser
    }
)

export const logoutCurrentUser = () => (
    {
        type: LOGOUT_CURRENT_USER
    }
)

export const receiveErrors = errors => (
    {
        type: RECEIVE_SESSION_ERRORS,
        errors
    }
)

export const signUp = user => dispatch => (
    SessionApiUtil.signUp(user).then(user => dispatch(receiveCurrentUser(user))), errors => dispatch(receiveErrors(errors))
)

export const logIn = user => dispatch => (
    SessionApiUtil.signIn(user).then(user => dispatch(receiveCurrentUser(user))), errors => dispatch(receiveErrors(errors))
)

export const logOut = () => dispatch => (
    SessionApiUtil.signOut().then(() => dispatch(logoutCurrentUser()))
)