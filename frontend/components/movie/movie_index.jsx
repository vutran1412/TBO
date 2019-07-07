import React from 'react'
import MovieIndexItem from './movie_index_item'
import MovieNavBar from './movie_navbar'
import Carousel from '../home/carousel'
import { Link } from 'react-router-dom'

class MovieIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: this.props.movies
        }
        this.shuffle = this.shuffle.bind(this)
    }

    componentDidMount() {
        this.props.clearSeries()
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
        let movies
        movies = this.props.movies.map(movie => (
            <MovieIndexItem
                key={movie.title}
                movie={movie}
            />
        ))
        movies = this.shuffle(movies)
        return (
            <>
                <MovieNavBar />
                <Carousel movies={this.shuffle(this.props.movies)} />
                <ul className="movie-index-list">{movies}</ul>
            </>
        )
    }
}

export default MovieIndex