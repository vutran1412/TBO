import { connect } from 'react-redux'
import MovieIndex from './movie_index'
import { clearSeries } from '../../actions/series_actions'
import { fetchMovies } from '../../actions/movie_actions'
import { withRouter } from 'react-router-dom'
import { getAllMovies } from '../../reducers/selectors'

const mapStateToProps = state => {
    return ({
        movies: getAllMovies(state.entities)
    })
}

const mapDispatchToProps = dispatch => {
    return({
        fetchMovies: () => dispatch(fetchMovies()),
        clearSeries: () => dispatch(clearSeries())
    })
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MovieIndex))