import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './store/store'
import Root from './components/root'
import { logIn, logOut } from './actions/session_actions'
import { fetchMovies, fetchMovie } from './actions/movie_actions'



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
    window.logIn = logIn
    window.logOut = logOut
    window.fetchMovie = fetchMovie
    window.fetchMovies = fetchMovies
    // TESTING END
    
    const root = document.getElementById('root')
    ReactDOM.render(<Root store={store} />, root)
})