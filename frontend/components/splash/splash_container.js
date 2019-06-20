import { connect } from 'react-redux'
import { modalOpen } from '../../actions/modal_actions'
import Splash from './splash'

const mapStateToProps = ({ session, entities: { users }, ui: { modal } }) => (
    {
        currentUser: user[session.id],
        modal: modal
    }
)

const mapDispatchToProps = dispatch => (
    {
        modalOpen: modal => dispatch(modalOpen(modal))
    }
)

export default connect(mapStateTopProps, mapDispatchToProps)(Splash)