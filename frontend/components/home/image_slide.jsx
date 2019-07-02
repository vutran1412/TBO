import React from 'react'

export const ImageSlide = ({ movieTitle, url }) => {
    const styles= {
        backgroundImage: `url(${url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }

    return (
        <div className="image-slide" style={styles}>
            <h1 className="slide-title">{movieTitle}</h1>
        </div>
    )
}
