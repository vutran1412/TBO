import React from 'react'
import { connect } from 'react-redux'
import { signUp, logIn } from '../../actions/session_actions'
import SignUpForm from '../session/signup_form'
import { modalOpen, modalClose } from '../../actions/modal_actions'

const mapStateToProps = ({ errors }) => (
    {
        // errors: errors.session,
        formType: 'Sign Up'
    }
)

const mapDispatchToProps = dispatch => (
    {
        signUp: user => dispatch(signUp(user)),
        otherForm: (
            <button className="modal-switch" onClick={() => dispatch(modalOpen('login'))}>
                Sign In
            </button>
        ),
        modalClose: () => dispatch(modalClose())
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm)