import React from 'react'
import { Link } from 'react-router-dom'

export const ImageSlide = ({ movieTitle, url, movieId }) => {
    const styles= {
        backgroundImage: `url(${url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center top'
    }

    return (
        <div className="image-slide" style={styles}>
            <Link to={`/movies/${movieId}`}>
                <h1 className="slide-title">{movieTitle}</h1>
            </Link>
        </div>
    )
}
