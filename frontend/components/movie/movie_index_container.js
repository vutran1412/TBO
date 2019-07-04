import { connect } from 'react-redux'
import MovieIndex from './movie_index'
import { clearMovies } from '../../actions/movie_actions'
import { fetchMovies } from '../../actions/movie_actions'
import { withRouter } from 'react-router-dom'

const mapStateToProps = state => {
    return ({
        movies: Object.values(state.entities.movies)
    })
}

const mapDispatchToProps = dispatch => {
    return({
        fetchMovies: () => dispatch(fetchMovies()),
        clearMovies: () => dispatch(clearMovies())
    })
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MovieIndex))