import { connect } from 'react-redux'
import { logOut } from '../../actions/session_actions'
import { modalOpen } from '../../actions/modal_actions'
import Greeting from './greeting'

const mapStateToProps = ({ session, entities: { users } }) => (
    {
        currentUser: users[session.id]
    }
)

const mapDispatchToProps = dispatch => (
    {
        logOut: () => dispatch(logOut()),
        modalOpen: modal => dispatch(modalOpen(modal))
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(Greeting)