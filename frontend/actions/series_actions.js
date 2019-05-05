import * as SeriesApiUtil from '../util/series_api_util'

export const RECEIVE_ALL_SERIES = 'RECEIVE_ALL_SERIES'
export const RECEIVE_SERIES = 'RECEIVE_SERIES'

export const receiveAllSeries = series => (
    {
        type: RECEIVE_ALL_SERIES,
        series
    }
)

export const receiveSeries = series => (
    {
        type: RECEIVE_SERIES,
        series
    }
)

export const fetchAllSeries = () => dispatch => (
    SeriesApiUtil.fetchAllSeries().then(series => dispatch(receiveAllSeries(series)))
)

export const fetchSeries = id => dispatch => (
    SeriesApiUtil.fetchSeries(id).then(series => dispatch(receiveSeries(series)))
)