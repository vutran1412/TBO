import React from 'react'
import MovieIndexItem from './movie_index_item'
import Carousel from '../home/carousel'

class MovieIndex extends React.Component {

    componentDidMount() {
        this.props.fetchMovies()
    }

    render() {
        const movies = this.props.movies.map( movie => (
            <MovieIndexItem
                key={movie.title}
                movie={movie}
            />
        ))
        return (
            <>
                <div className="index-header">
                    <span>Movies</span>
                </div>
                <div className="index-header">
                    <button className="content-index-button">
                        ALL
                    </button>
                    <button className="content-index-button">
                        ACTION
                    </button>
                    <button className="content-index-button">
                        COMEDY
                    </button>
                    <button className="content-index-button">
                        DRAMA
                    </button>
                    <button className="content-index-button">
                        ROMANCE
                    </button>
                </div>
                <Carousel movies={this.props.movies} />
                <ul className="search-result-lists">{movies}</ul>
            </>
        )
    }
}

export default MovieIndex