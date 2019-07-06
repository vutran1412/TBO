import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './store/store'
import Root from './components/root'
import { logout } from './actions/session_actions'
import { fetchMovies, fetchMovie } from './actions/movie_actions'
import { searchMovies } from './actions/search_actions'
import { fetchAllSeries, fetchSeries } from './actions/series_actions'


document.addEventListener('DOMContentLoaded', () => {
    let store

    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        }
        store = configureStore(preloadedState)
        delete window.currentUser
    } else {
        store = configureStore()
    }

    // TESTING START
    window.getState = store.getState
    window.dispatch = store.dispatch
    window.fetchMovies = fetchMovies
    window.fetchMovie = fetchMovie
    window.searchMovies = searchMovies
    window.fetchAllSeries = fetchAllSeries
    window.fetchSeries = fetchSeries
    window.logout = logout
    
    // TESTING END

    const root = document.getElementById('root')
    ReactDOM.render(<Root store={store} />, root)
})