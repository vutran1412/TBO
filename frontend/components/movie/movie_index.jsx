import React from 'react'
import MovieIndexItem from './movie_index_item'
import Carousel from '../home/carousel'

class MovieIndex extends React.Component {
    constructor(props) {
        super(props)

        this.shuffle = this.shuffle.bind(this)
    }

    componentDidMount() {
        this.props.fetchMovies()
    }

    shuffle(array) {
        var currentIndex = array.length
        var tempValue, randomIndex
        while(0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex)
            currentIndex -= 1
            tempValue = array[currentIndex]
            array[currentIndex] = array[randomIndex]
            array[randomIndex] = tempValue
        }
        return array
    }

   

    render() {
        let movies = this.props.movies.map( movie => (
            <MovieIndexItem
                key={movie.title}
                movie={movie}
            />
        ))
        movies = this.shuffle(movies)
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
                <Carousel movies={this.shuffle(this.props.movies)} />
                <ul className="search-result-lists">{movies}</ul>
            </>
        )
    }
}

export default MovieIndex