import { search, clearSearchResults } from '../../actions/search_actions'
import { clearMovies } from '../../actions/movie_actions'
import { clearSeries, fetchSeries } from '../../actions/series_actions'
import { getAllSearchRes } from '../../reducers/selectors'
import Search from './search'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return ({
        searchRes: getAllSearchRes(state.entities)
    })
}



const mapDispatchToProps = dispatch => {
    return ({
        search: term => dispatch(search(term)),
        clearMovies: () => dispatch(clearMovies()),
        clearSeries: () => dispatch(clearSeries()),
        clearSearchResults: () => dispatch(clearSearchResults()),
        fetchSeries: id => dispatch(fetchSeries(id))
        
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)