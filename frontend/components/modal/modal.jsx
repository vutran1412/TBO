import { connect } from "http2";
import React from 'react'
import { modalClose } from '../../actions/modal_actions'
import { connect } from 'react-redux'
import LoginFormContainer from '../session/login_form_container'
import SignUpFormContainer from '../session/signup_form_container'

const Modal = ({ modal }) => {
    if (!modal) return null
    let component
    switch(modal) {
        case 'login':
            component = <LoginFormContainer />
            break
        case 'signup':
            component = <SignUpFormContainer />
            break
        default:
            return null
    }

    return (
        <div className="modal-background">
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    )
}

const mapStateToProps = state => (
    {
        modal: state.ui.modal
    }
)

const mapDispatchToProps = dispatch => (
    {
        modalClose: () => dispatch(modalClose())
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(Modal)