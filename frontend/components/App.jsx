import React from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import GreetingContainer from './greeting/greeting_container'
import Modal from './modal/modal'
import { AuthRoute } from '../util/route_util'
import LoginFormContainer from './session/login_form_container'
import SignUpFormContainer from './session/signup_form_container'
import MoviesIndexContainer from './movie/movie_index_container'


const App = () => (
    <div>
        <Modal />
        <Switch>
            <Route exact path="/movies" component={MoviesIndexContainer} />
            <Route path="/" component={GreetingContainer} />
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />
        </Switch>
    </div>
)

export default App