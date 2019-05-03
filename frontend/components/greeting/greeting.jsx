import React from 'react'
import { Link } from 'react-router-dom'
import SplashPage from '../splash/splash'


const Greeting = ({ currentUser, logOut, modalOpen }) => {
    const splashLink = () => (
        <nav className="login-signup">
            <button className="header-button" onClick={() => modalOpen('login')}>Login</button>
            &nbsp; &nbsp;
            <button className="header-button" onClick={() => modalOpen('signup')}>Sign Up</button>
        </nav>
    )
    const personalGreeting = () => (
        <hgroup className="header-group">
            <h2>Welcome to TBO, hello {currentUser.firstName}</h2>
            <button className="header-button" onClick={logOut}>Log Out</button>
        </hgroup>
  )

  return currentUser ? personalGreeting() : splashLink()
}

export default Greeting