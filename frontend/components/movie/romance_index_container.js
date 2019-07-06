import { connect } from 'react-redux'
import { getRomanceMovies } from '../../reducers/selectors'
import { withRouter } from 'react-router-dom'
import { fetchMovies } from '../../actions/movie_actions'
import RomanceIndex from './romance_index'

const mapStateToProps = (state) => {
    return ({
        romanceMovies: getRomanceMovies(state.entities)
    })
}

const mapDispatchToProps = dispatch => {
    return ({
        fetchMovies: () => dispatch(fetchMovies())
    })
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RomanceIndex))