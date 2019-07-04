import React from 'react'
import { Link } from 'react-router-dom'

const MovieNavBar = ({  genre }) => {
    const header = genre ? genre : "Movies"
    return (
        <>
            <div className="index-title">
                <span>{header}</span>
            </div>
            <div className="index-header">
                <button className="content-index-button">
                    <Link to="/movies/">
                        ALL
                    </Link>
                </button>
                <button className="content-index-button">
                    <Link to="/action">
                        ACTION
                    </Link>
                </button>
                <button className="content-index-button">
                    <Link to="/comedy">
                        COMEDY
                    </Link>
                </button>
                <button className="content-index-button">
                    DRAMA
                        </button>
                <button className="content-index-button">
                    ROMANCE
                        </button>
            </div>
        </>
    )
}

export default MovieNavBar