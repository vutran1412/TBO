import { connect } from 'react-redux'
import SeriesIndex from './series_index'
import { fetchAllSeries, fetchSeries } from '../../actions/series_actions'
import { getAllSeries } from '../../reducers/selectors'
import { clearMovies } from '../../actions/movie_actions'

const mapStateToProps = state => {
    const allSeries = getAllSeries(state.entities)
    return({
        allSeries
    })
}

const mapDispatchToProps = dispatch => (
    {
        fetchAllSeries: () => dispatch(fetchAllSeries()),
        fetchSeries: id => dispatch(fetchSeries(id)),
        clearMovies: () => dispatch(clearMovies())
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(SeriesIndex)