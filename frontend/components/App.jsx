import React from 'react'
import { Switch, Link } from 'react-router-dom'
import { AuthRoute, ProtectedRoute, Route } from '../util/route_util'
import SignUpFormContainer from './session/signup_form_container'
import LoginFormContainer from './session/login_form_container'
import GreetingContainer from './greeting/greeting_container'
import HomeContainer from './home/home_container'
import MovieDisplayContainer from './movie/movie_display_container'
import MovieIndexContainer from './movie/movie_index_container'
import SearchContainer from './search/search_container'
import ActionIndexContainer from './movie/action_index_container'
import ComedyIndexContainer from './movie/comedy_index_container'
import DramaIndexContainer from './movie/drama_index_container'
import RomanceIndexContainer from './movie/romance_index_container'
import SeriesIndexContainer from './series/series_index_container'

const App = () => (
    <>
    <GreetingContainer />
        <Switch>
            <ProtectedRoute exact path="/movies/action" component={ActionIndexContainer} />
            <ProtectedRoute exact path="/movies/comedy" component={ComedyIndexContainer} />
            <ProtectedRoute exact path="/movies/drama" component={DramaIndexContainer} />
            <ProtectedRoute exact path="/movies/romance" component={RomanceIndexContainer} />
            <ProtectedRoute exact path="/series" component={SeriesIndexContainer} />
            <ProtectedRoute exact path="/search/" component={SearchContainer} />
            <ProtectedRoute exact path="/movies/" component={MovieIndexContainer} />
            <ProtectedRoute exact path="/movies/:movieId/" component={MovieDisplayContainer} />
            <ProtectedRoute exact path="/home/" component={HomeContainer} />
            <AuthRoute exact path="/signup/" component={SignUpFormContainer} />
            <AuthRoute exact path="/login/" component={LoginFormContainer} />
            <ProtectedRoute exact path="/" component={HomeContainer} />
        </Switch>
    </>
)

export default App