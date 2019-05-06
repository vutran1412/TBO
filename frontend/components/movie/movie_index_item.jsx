import React from 'react'

const MovieIndexItem = props => (
    <div>
        <Link to={`/movies/${props.movie.id}`}>{props.movie.title}</Link>
    </div>
)

export default MovieIndexItem