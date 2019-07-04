import React from 'react'
import MovieIndexItem from './movie_index_item'
import Carousel from '../home/carousel'
import ActionIndex from './action_index'

class MovieIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: this.props.movies,
            isAction: false,
            isComedy: false,
            isDrama: false,
            isRomance: false
        }
        this.shuffle = this.shuffle.bind(this)
        this.handleActionClick = this.handleActionClick.bind(this)
    }

    componentDidMount() {
        this.props.fetchMovies()
    }

    handleActionClick() {
        this.setState({
            isAction: true,
            isComedy: false,
            isDrama: false,
            isRomance: false
        })
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

    componentWillUnmount() {
        this.props.clearMovies()
    }
   

    render() {
        debugger
        let movies = this.props.movies.map( movie => (
            <MovieIndexItem
                key={movie.title}
                movie={movie}
            />
        ))
        movies = this.shuffle(movies)
        let movieIndex = this.state.isAction ? <ActionIndex movies={movies} /> : <Carousel movies={this.shuffle(this.props.movies)} />
        
        return (
            <>
                <div className="index-title">
                    <span>Movies</span>
                </div>
                <div className="index-header">
                    <button className="content-index-button">
                        ALL
                    </button>
                    <button className="content-index-button" onClick={this.handleActionClick}>
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
                {movieIndex}
                <ul className="movie-index-list">{movies}</ul>
            </>
        )
    }
}

export default MovieIndex