import { connect } from 'react-redux'
import EpisodeDisplay from './episode_display'
import { fetchSeries } from '../../actions/series_actions'
import { withRouter } from 'react-router-dom'

const mapStateToProps = (state, ownProps) => {
    const show = state.entities.series[ownProps.match.params.seriesId]
    const episodes = state.entities.episodes
    const episode = episodes[ownProps.match.params.episodeId]
    return ({
        show,
        episode
    })
}

const mapDispatchToProps = dispatch => {
    return ({
        fetchSeries: id => dispatch(fetchSeries(id))
    })
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EpisodeDisplay))