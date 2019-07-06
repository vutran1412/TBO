import { connect } from 'react-redux'
import SeriesIndex from './series_index'
import { fetchAllSeries, fetchSeries } from '../../actions/series_actions'
import { getAllSeries } from '../../reducers/selectors'

const mapStateToProps = state => {
    const allSeries = getAllSeries(state.entities)
    return({
        allSeries
    })
}

const mapDispatchToProps = dispatch => (
    {
        fetchAllSeries: () => dispatch(fetchAllSeries()),
        fetchSeries: id => dispatch(fetchSeries(id))
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(SeriesIndex)