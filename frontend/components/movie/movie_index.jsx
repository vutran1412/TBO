import React from 'react'
import MovieIndexItem from './movie_index_item'
import MovieNavContainer from './movie_nav_container'

class MovieIndex extends React.Component {

    componentDidMount() {
        this.props.fetchMovies()
    }

    render() {
        const movies = this.props.movies.map( movie => {
            return (
                <MovieIndexItem 
                    key={movie.title}
                    movie={movie}
                />
            )
        })
        return (
            <div>
                <MovieNavContainer />
                <ul>{movies}</ul>
            </div>
        )
    }
}

export default MovieIndex
