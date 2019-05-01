import React from 'react'
import { Link } from 'react-router-dom'

const Greeting = ({ currentUser, logOut }) => {
    const sessionLinks = () => (
        <nav className="login-signup">
            <Link to="/signup">Sign Up</Link>
            &nbsp; or &nbsp;
            <Link to="/login">Log In</Link>
        </nav>
    )
    const personalGreeting = () => (
        <hgroup className="header-group">
            <h2 className="header-name">Hi, {currentUser.first_name}</h2>
        <button className="header-button" onClick={logOut}>Log Out</button>
    </hgroup>
  )

  return currentUser ? personalGreeting() : sessionLinks()
}

export default Greeting