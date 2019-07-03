import { connect } from 'react-redux'
import MovieDisplay from './movie_display'
import { fetchMovie } from '../../actions/movie_actions'
import { withRouter } from 'react-router-dom'

const mapStateToProps = (state, ownProps) => {
    return ({
        movie: state.entities.movies[ownProps.match.params.movieId]
    })
}

const mapDispatchToProps = dispatch => (
    {
        fetchMovie: id => dispatch(fetchMovie(id))
    }
)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MovieDisplay))