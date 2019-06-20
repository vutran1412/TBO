import React from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import { AuthRoute, ProtectedRoute } from '../util/route_util'
import SignUpFormContainer from './session/signup_form_container'
import LoginFormContainer from './session/login_form_container'

const App = () => (
    <>
        <Switch>
            <Route path="/signup/" component={SignUpFormContainer} />
            <Route path="/login/" component={LoginFormContainer} />
        </Switch>
    </>
)

export default App