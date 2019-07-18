import { connect } from 'react-redux'
import { logout } from '../../actions/session_actions'
import UserMenuItem from './user_menu_item'

const mapDispatchToProps = dispatch => (
    {
        logout: () => dispatch(logout())
    }
)

export default connect(null, mapDispatchToProps)(UserMenuItem)