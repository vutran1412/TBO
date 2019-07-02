import { connect } from 'react-redux'
import Home from './home'
import { fetchMovies, fetchMovie } from '../../actions/movie_actions'

const mapStateToProps = state => (
    {
        movies: Object.values(state.entities.movies)
    }
)

const mapDispatchToProps = dispatch => (
    {
        fetchMovies: () => dispatch(fetchMovies()),
        fetchMovie: id => dispatch(fetchMovie(id))
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(Home)