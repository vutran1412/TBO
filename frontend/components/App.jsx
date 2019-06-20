import React from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import { AuthRoute, ProtectedRoute } from '../util/route_util'
import SignUpFormContainer from './session/signup_form_container.js'

const App = () => (
    <>
        <Switch>
            <Route path="/signup/" component={SignUpFormContainer} />
        </Switch>
    </>
)

export default App