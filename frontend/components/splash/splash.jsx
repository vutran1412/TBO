import React from 'react'
import LoginFormContainer from '../session/login_form_container'
import SignUpFormContainer from '../session/signup_form_container'
import { Link } from 'react-router-dom'


const SplashPage = () => (
    <div className="splash-page">
        <div className="nav-modal-container">
           <button className="modal-button"><Link to="/signup">Sign Up</Link></button>
           <button className="modal-button"><Link to="/login">Log In</Link></button>
        </div>
    </div>
)


export default SplashPage