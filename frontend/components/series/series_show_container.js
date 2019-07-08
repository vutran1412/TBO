import { connect } from 'reac-redux'
import { withRouter } from 'react-router-dom'
import { fetchSeries } from '../../actions/series_actions'
import SeriesShow from './series/show'

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.seriesId
    const show = state.entities.series[id]
    return ({
        show
    })
}

const mapDispatchToProps = dispatch => {
    return ({
        fetchSeries: id => dispatch(fetchSeries(id))
    })
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SeriesShow))