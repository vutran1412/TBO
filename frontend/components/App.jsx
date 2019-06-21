import React from 'react'
import { Switch, Link } from 'react-router-dom'
import { AuthRoute, ProtectedRoute } from '../util/route_util'
import SignUpFormContainer from './session/signup_form_container'
import LoginFormContainer from './session/login_form_container'
import GreetingContainer from './greeting/greeting_container'


const App = () => (
    <>
    <GreetingContainer />
        <Switch>
            <AuthRoute exact path="/signup/" component={SignUpFormContainer} />
            <AuthRoute exact path="/login/" component={LoginFormContainer} />
            
        </Switch>
    </>
)

export default App