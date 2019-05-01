import { connect } from 'react-redux'
import { signUp, logIn } from '../../actions/session_actions'
import SignUpForm from '../session/signup_form'

const mapStateToProps = ({ errors }) => (
    {
        errors: errors.session
    }
)

const mapDispatchToProps = dispatch => (
    {
        signUp: user => dispatch(signUp(user)),
        logIn: user => dispatch(logIn(user))
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm)