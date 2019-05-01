import { connect } from 'react-redux'
import { logOut } from '../../actions/session_actions'
import Greeting from './greeting'

const mapStateToProps = ({ session, entities: { users } }) => (
    {
        currentUser: users[session.id]
    }
)

const mapDispatchToProps = dispatch => (
    {
        logOut: () => dispatch(logOut())
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(Greeting)