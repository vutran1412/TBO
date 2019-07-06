import React from 'react'
import { Link } from 'react-router-dom'

export const SeriesImageSlide = ({ seriesTitle, url, seriesId }) => {
    const styles= {
        backgroundImage: `url(${url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center top'
    }

    return (
        <div className="image-slide" style={styles}>
            <Link to={`/series/${seriesId}`}>
                <h1 className="slide-title">{seriesTitle}</h1>
            </Link>
        </div>
    )
}
