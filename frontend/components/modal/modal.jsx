import React from 'react'
import { modalClose } from '../../actions/modal_actions'
import { connect } from 'react-redux'
import LoginFormContainer from '../session/login_form_container'
import SignUpFormContainer from '../session/signup_form_container'


const Modal = ({ modal, modalClose }) => {
    if (!modal) {
        return null;
    }
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
        <div className="modal-background" onClick={modalClose}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
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
        modalClose: () => dispatchEvent(modalClose())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)