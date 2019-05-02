import React from 'react'
import { connect } from 'react-redux'
import SessionForm from './session_form'
import { logIn } from '../../actions/session_actions'
import { modalOpen, modalClose } from '../../actions/modal_actions'

const mapStateToProps = ({ errors }) => (
    {
        errors: errors.session,
    }
)

const mapDispatchToProps = dispatch => (
    {
        logIn: user => dispatch(logIn(user)),
        otherForm: (
            <button onClick={() => dispatch(modalOpen('signup'))}>
                Signup
            </button>
        ),
        modalClose: () => dispatch(modalClose())
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)