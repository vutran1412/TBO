import React from 'react'
import MovieIndexItem from './movie_index_item'

const ActionIndex = ({ movies }) => {
    let actionMovies = movies.filter((movie, i) => {
        if (movie.genre === "Action") {
            return <MovieIndexItem movie={movie} key={i} />
        }
    })
    return (
        <ul className="movie-index-list">{actionMovies}</ul>
    )
}

export default ActionIndex