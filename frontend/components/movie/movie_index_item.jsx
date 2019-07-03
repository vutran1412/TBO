import React from 'react'
import { Link } from 'react-router-dom'

const MovieIndexItem = (props) => {
    return (
        <div className="search-result-item-container">
            <div className="search-result-image">
                <Link to={`/movies/${props.movie.id}/`}>
                    <img className="index-item-thumbnail" src={props.movie.thumbnailUrl} />
                </Link>
            </div>
            <h1 className="index-item-title">{props.movie.title}</h1>
        </div>
    )
}

export default MovieIndexItem