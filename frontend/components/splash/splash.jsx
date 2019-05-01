import React from 'react'
import { Link } from 'react-router-dom'

const SplashPage = () => (
    <div className="splash-page">
        <nav className="login-signup">
            <Link to="/signup">Sign Up</Link>
            &nbsp; or &nbsp;
            <Link to="/login">Log In</Link>
        </nav>
    </div>
)


export default SplashPage