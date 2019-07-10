import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { fetchSeries, clearEpisodes } from '../../actions/series_actions'
import SeriesShow from './series_show'

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.seriesId
    const show = state.entities.series[id]
    const episodes = Object.values(state.entities.episodes)
    return ({
        show,
        episodes
    })
}

const mapDispatchToProps = dispatch => {
    return ({
        fetchSeries: id => dispatch(fetchSeries(id)),
        clearEpisodes: () => dispatch(clearEpisodes())
    })
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SeriesShow))