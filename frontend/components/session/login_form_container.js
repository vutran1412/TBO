import { connect } from 'react-redux'
import SessionForm from './session_form'
import { logIn } from '../../actions/session_actions'

const mapStateToProps = ({ errors }) => (
    {
        errors: errors.session,
        formType: 'login'
    }
)

const mapDispatchToProps = dispatch => (
    {
        processForm: user => dispatch(logIn(user))
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)