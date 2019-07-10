import React from 'react'
import { Link } from 'react-router-dom'

const EpisodeIndexItem = ({ episode }) => {
    return (
        <div className="search-result-item-container">
            <div className="search-result-image">
                <Link to={`/series/${episode.series_id}/${episode.id}`}>
                    <img className="index-item-thumbnail" src={episode.thumbnailUrl} />
                </Link>
            </div>
            <h1 className="index-item-title">{episode.title}</h1>
        </div>
    )
}

export default EpisodeIndexItem