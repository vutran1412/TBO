import React from 'react'
import { Link } from 'react-router-dom'


const Greeting = ({ currentUser, logOut, modalOpen }) => {
    const splashLink = () => (
        <div id="splash-body">
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
        </div>
    )
    const personalGreeting = () => (
        <div>
            <div className="main-body">
                <header className="nav-header header-nav-transition">
                    <Link className="nav-link" to="/"><h2>TBO Now</h2></Link>
                    <h2 className="separator-pipe">|</h2>
                    <Link className="content-index-button"><h2>Series</h2></Link>
                    <Link to="/movies" className="content-index-button"><h2>Movies</h2></Link>
                    <Link className="nav-link" to="#"><i className="fas fa-search"></i></Link>
                    <button className="header-button" onClick={logOut}>Log Out</button>
                </header>
            </div>
        </div>
  )

  return currentUser ? personalGreeting() : splashLink()
}

export default Greeting