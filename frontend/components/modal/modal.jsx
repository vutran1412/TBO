import React from 'react'
import { modalClose } from '../../actions/modal_actions'
import { connect } from 'react-redux'
import LoginFormContainer from '../session/login_form_container'
import SignUpFormContainer from '../session/signup_form_container'


const Modal = ({ modal, closeModal }) => {
    if (!modal) {
        return null;
    }
    let component
    switch(modal) {
        case 'login':
            component = <LoginFormContainer />
            return component
        case 'signup':
            component = <SignUpFormContainer />
            return component
        default:
            return null
    }

    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                { component }
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        modal: state.ui.modal
    }
}

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatchEvent(closeModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)