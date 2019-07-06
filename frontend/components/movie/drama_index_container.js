import { connect } from 'react-redux'
import { getDramaMovies } from '../../reducers/selectors'
import { withRouter } from 'react-router-dom'
import { fetchMovies } from '../../actions/movie_actions'
import DramaIndex from './drama_index'

const mapStateToProps = (state) => {
    return ({
        dramaMovies: getDramaMovies(state.entities)
    })
}

const mapDispatchToProps = dispatch => {
    return ({
        fetchMovies: () => dispatch(fetchMovies())
    })
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DramaIndex))