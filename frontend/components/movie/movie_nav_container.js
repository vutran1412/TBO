import { connect } from 'react-redux'
import { fetchMovies, fetchMovie } from '../../actions/movie_actions'
import MovieNav from './movie_nav'

const mapStateToProps = state => (
    {
        movies: Object.values(state.movies)
    }
)

const mapDispatchToProps = dispatch => (
    {
        fetchMovies: () => dispatch(fetchMovies()),
        fetchMovie: id => dispatch(fetchMovie(id))
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(MovieNav)
