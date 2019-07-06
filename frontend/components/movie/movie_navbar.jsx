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
                    <Link to="/movies">
                        ALL
                    </Link>
                </button>
                <button className="content-index-button">
                    <Link to="/movies/action">
                        ACTION
                    </Link>
                </button>
                <button className="content-index-button">
                    <Link to="/movies/comedy">
                        COMEDY
                    </Link>
                </button>
                <button className="content-index-button">
                    <Link to="/movies/drama">
                        DRAMA
                    
                    </Link>
                </button>
                <button className="content-index-button">
                    <Link to="/movies/romance">
                        ROMANCE
                    </Link>
                </button>
            </div>
        </>
    )
}

export default MovieNavBar