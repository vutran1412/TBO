import { connect } from 'react-redux'
import Greeting from './greeting'
import { logout } from '../../actions/session_actions'
import { modalOpen } from '../../actions/modal_actions'

const mapStateToProps = ({ session, entities: { users } }) => (
    {
        currentUser: users[session.id]
    }
)

const mapDispatchToProps = dispatch => (
    {
        logout: () => dispatch(logout()),
        modalOpen: () => dispatch(modalOpen())
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(Greeting)