import React from 'react'




const Logo = () => {
    return (
        <div className="logo-background">
            <div className="logo-loader">
                <img src={window.logoImage} className="resize"/>
            </div>
        </div>
    )
}

export default Logo