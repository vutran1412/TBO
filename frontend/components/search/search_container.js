import { searchMovies } from '../../actions/search_actions'
import Search from './search'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return ({
        movies: state.entities.movies
    })
}

const mapDispatchToProps = dispatch => {
    return ({
        searchMovies: term => dispatch(searchMovies(term)),
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)