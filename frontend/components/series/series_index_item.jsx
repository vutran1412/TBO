import React from 'react'
import { Link, withRouter } from 'react-router-dom'

const SeriesIndexItem = (props) => {
    return (
        <div className="search-result-item-container">
            <div className="search-result-image">
                <Link to={`/series/${props.show.id}`} onClick={props.handleClick}>
                    <img className="index-item-thumbnail" src={props.show.thumbnailUrl} />
                </Link>
            </div>
            <h1 className="index-item-title">{props.show.title}</h1>
        </div>
    )
}

export default withRouter(SeriesIndexItem)