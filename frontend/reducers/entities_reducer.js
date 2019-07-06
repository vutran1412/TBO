import { combineReducers } from 'redux'
import usersReducer from './users_reducer'
import moviesReducer from './movies_reducer'
import seriesReducer from './series_reducer'
// import episodesReducer from './episodes_reducer'

export default combineReducers({
    users: usersReducer,
    movies: moviesReducer,
    series: seriesReducer,
    // episodes: episodesReducer
})
