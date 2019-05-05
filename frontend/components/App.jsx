import React from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import GreetingContainer from './greeting/greeting_container'
import Modal from './modal/modal'
import { AuthRoute } from '../util/route_util'
import LoginFormContainer from './session/login_form_container'
import SignUpFormContainer from './session/signup_form_container'


const App = () => (
    <body>
        <GreetingContainer />
        <Modal />
        <Switch>
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />
        </Switch>
    </body>
)

export default App