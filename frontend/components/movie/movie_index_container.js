import { connect } from 'react-redux'
import MovieIndex from './movie_index'
import { fetchMovies } from '../../actions/movie_actions'
import { withRouter } from 'react-router-dom'

const mapStateToProps = state => {
    return ({
        movies: Object.values(state.entities.movies)
    })
}

const mapDispatchToProps = dispatch => {
    return({
        fetchMovies: () => dispatch(fetchMovies())
    })
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MovieIndex))