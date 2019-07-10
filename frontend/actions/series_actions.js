import * as SeriesApiUtil from '../util/series_util'

export const RECEIVE_ALL_SERIES = 'RECEIVE_ALL_SERIES'
export const RECEIVE_SERIES = 'RECEIVE_SERIES'
export const CLEAR_SERIES = 'CLEAR_SERIES'
export const CLEAR_EPISODES = 'CLEAR_EPISODES'

export const receiveAllSeries = shows => (
    {
        type: RECEIVE_ALL_SERIES,
        shows
    }
)

export const receiveSeries = ({ series, episodes }) => (
    {
        type: RECEIVE_SERIES,
        series,
        episodes
    }
)

export const clearSeries = () => (
    {
        type: CLEAR_SERIES
    }
)

export const clearEpisodes = () => (
    {
        type: CLEAR_EPISODES
    }
)

export const fetchAllSeries = () => dispatch => (
    SeriesApiUtil.fetchAllSeries().then(shows => dispatch(receiveAllSeries(shows)))
)

export const fetchSeries = id => dispatch => (
    SeriesApiUtil.fetchSeries(id).then(payload => dispatch(receiveSeries(payload)))
)