import React from 'react'
import styled from 'styled-components'


const LogoImage = styled.img`
    height: 100%;
    width: 100%;
    object-fit: contain;
`

const Logo = () => {
    return (
        <div className="logo-background">
            <div className="logo-loader">
                <LogoImage src={window.logoImage} />
            </div>
        </div>
    )
}

export default Logo