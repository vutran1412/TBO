import React from 'react'
import { Route } from 'react-router-dom'
import GreetingContainer from './greeting/greeting_container'
import LoginFormContainer from './session/login_form_container'
import SignUpFormContainer from './session/signup_form_container'

const App = () => (
    <div>
        <header>
            <h1>Welcome TBO</h1>
            <GreetingContainer />
        </header>
        <Route path="/login" component={LoginFormContainer} />
        <Route path="/signup" component={SignUpFormContainer} />
    </div>
)

export default App