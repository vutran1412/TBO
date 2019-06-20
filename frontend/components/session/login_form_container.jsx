import React from 'react'
import {  connect } from 'react-redux'
import SessionForm from './session_form'
import { logIn } from '../../actions/session_actions'
import { modalOpen, modalClose } from '../../actions/modal_actions'

const mapStateToProps = ({ errors }) => (
    {
        // errors: errors.session,
        formType: 'Sign In'
    }
)

const mapDispatchToProps = dispatch => {
    return ({
        logIn: user => dispatch(logIn(user)),
        otherForm: (
            <button className="modal-switch" onClick={() => dispatch(modalOpen('signup'))}>
                Sign Up
            </button>
        ),
        modalClose: () => dispatch(modalClose())
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)