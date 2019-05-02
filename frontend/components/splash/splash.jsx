import React from 'react'
import LoginFormContainer from '../session/login_form_container'
import SignUpFormContainer from '../session/signup_form_container'
import { Link } from 'react-router-dom'


const SplashPage = () => (
    <div className="splash-page">
        <ul className="nav-modal-container">
            <li><Link to="/signup">Sign Up</Link></li>
            <li><Link to="/login">Log In</Link></li>
        </ul>
    </div>
)


export default SplashPage