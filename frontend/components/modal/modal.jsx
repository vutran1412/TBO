import { connect } from "http2";

import React from 'react'
import { modalClose } from '../../actions/modal_actions'
import { connect } from 'react-redux'

const Modal = ({ modal }) => {
    if (!modal) return null
    let component
    switch(modal) {
        default:
            return null
    }
}

return (
    <div className="modal-background">
        <div className="modal-child" onClick={e => e.stopPropagation()}>
            {component}
        </div>
    </div>
)

const mapStateToProps = state => {
    return {
        modal: state.ui.modal
    }
}

const mapDispatchToProps = dispatch => {
    return {
        modalClose: () => dispatch(modalClose())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)