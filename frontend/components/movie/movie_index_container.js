import { connect } from 'react-redux'
import MovieIndex from './movie_index'
import { clearMovies } from '../../actions/movie_actions'
import { fetchMovies } from '../../actions/movie_actions'
import { withRouter } from 'react-router-dom'
import { getAllMovies, getActionMovies, getComedyMovies } from '../../reducers/selectors'

const mapStateToProps = state => {
    return ({
        movies: getAllMovies(state.entities)
    })
}

const mapDispatchToProps = dispatch => {
    return({
        fetchMovies: () => dispatch(fetchMovies()),
        clearMovies: () => dispatch(clearMovies())
    })
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MovieIndex))