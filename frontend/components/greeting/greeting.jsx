import React from 'react'
import { Link } from 'react-router-dom'
import SplashPage from '../splash/splash'


const Greeting = ({ currentUser, logOut }) => {
    const splashLink = () => (
        <SplashPage />
    )
    const personalGreeting = () => (
        <hgroup className="header-group">
            
        <button className="header-button" onClick={logOut}>Log Out</button>
        </hgroup>
  )

  return currentUser ? personalGreeting() : splashLink()
}

export default Greeting