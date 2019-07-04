import { connect } from 'react-redux'
import { getComedyMovies } from '../../reducers/selectors'
import { withRouter } from 'react-router-dom'
import { fetchMovies } from '../../actions/movie_actions'
import ComedyIndex from './comedy_index'

const mapStateToProps = (state) => {
    return ({
        actionMovies: getComedyMovies(state.entities)
    })
}

const mapDispatchToProps = dispatch => {
    return ({
        fetchMovies: () => dispatch(fetchMovies())
    })
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ComedyIndex))