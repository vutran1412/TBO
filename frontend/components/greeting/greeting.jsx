import React from 'react'
import { Link } from 'react-router-dom'
import SplashPage from '../splash/splash'


const Greeting = ({ currentUser, logOut, modalOpen }) => {
    const splashLink = () => (
        <div className="splash-content-container">
            <h1 className="splash-header">TBO NOW</h1>
            <h1 className="splash-sub-header">Get All of TBO</h1>
            <div className="splash-pitch">
                <p>Stream on your favorite screen - no cable needed. Try 7 days free, then $14.99/month.</p>
            </div>
            <div className="splash-sign-up-container">
                <button className="splash-sign-up-button" onClick={() => modalOpen('signup')}>START YOUR FREE TRIAL</button>
            </div>
            <div className="splash-sign-in-container">
                <h2>Already have an account? <button className="splash-sign-in-button" onClick={() => modalOpen('login')}>Sign In</button></h2>
            </div>
        </div>
    )
    const personalGreeting = () => (
        <div className="main-body">
            <hgroup className="header-group">
                <button className="header-button" onClick={logOut}>Log Out</button>
            </hgroup>
        </div>
  )

  return currentUser ? personalGreeting() : splashLink()
}

export default Greeting