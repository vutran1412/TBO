import { connect } from 'react-redux'
import { getActionMovies } from '../../reducers/selectors'
import { withRouter } from 'react-router-dom'
import { fetchMovies } from '../../actions/movie_actions'
import ActionIndex from './action_index'

const mapStateToProps = (state) => {
    return({
        actionMovies: getActionMovies(state.entities)
    })
}

const mapDispatchToProps = dispatch => {
    return({
        fetchMovies: () => dispatch(fetchMovies())
    })
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ActionIndex))
