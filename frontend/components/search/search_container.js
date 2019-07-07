import { search } from '../../actions/search_actions'
import { clearMovies } from '../../actions/movie_actions'
import { clearSeries } from '../../actions/series_actions'
import { getAllSearchRes } from '../../reducers/selectors'
import Search from './search'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return ({
        searchRes: getAllSearchRes(state.ui)
    })
}

function filterSearchRes() {
    
}

const mapDispatchToProps = dispatch => {
    return ({
        search: term => dispatch(search(term)),
        clearMovies: () => dispatch(clearMovies()),
        clearSeries: () => dispatch(clearSeries())
        
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)