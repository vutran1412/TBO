import React from 'react'
import { Link } from 'react-router-dom'

const SeriesNavBar = () => {
    return (
        <>
            <div className="index-title">
                <span>Series</span>
            </div>
            <div className="index-header">
                <button className="content-index-button">
                    <Link to="/series">
                        ALL
                    </Link>
                </button>
            </div>
        </>
    )
}

export default SeriesNavBar