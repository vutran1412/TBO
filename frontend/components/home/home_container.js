import { connect } from 'react-redux'
import Home from './home'
import { fetchMovies, fetchMovie } from '../../actions/movie_actions'
import { fetchAllSeries } from '../../actions/series_actions'
import { getAllMovies, getAllSeries } from '../../reducers/selectors'

const mapStateToProps = state => (
    {
        movies: getAllMovies(state.entities),
        series: getAllSeries(state.entities)
    }
)

const mapDispatchToProps = dispatch => (
    {
        fetchMovies: () => dispatch(fetchMovies()),
        fetchMovie: id => dispatch(fetchMovie(id)),
        fetchAllSeries: () => dispatch(fetchAllSeries())
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(Home)