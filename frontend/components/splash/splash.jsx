import React from 'react'
import Modal from '../modal/modal'

const Splash = (props) => (
    <div id="splash-body">
        <Modal />
        <div className="splash-content-container">
            <div className="splash-header"></div>
            <h1 className="splash-sub-header">Get All of TBO</h1>
            <div className="splash-pitch">
                <p>Stream your favorite screen - no cable needed. Try 7 days free, then $14.99/month.</p>
            </div>
            <div className="splash-signup-container">
                <button className="splash-signup-button" onClick={() => props.modalOpen('signup')}>START YOUR FREE TRIAL</button>
            </div>
            <div className="splash-signin-container">
                <h2>Already have an account? <button className="splash-signin-button" onClick={() => props.modalOpen('login')}>Sign In</button></h2>
            </div>
        </div>
    </div>
)

export default Splash