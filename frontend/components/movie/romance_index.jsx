import React from 'react'
import MovieIndexItem from './movie_index_item'
import MovieNavBar from './movie_navbar'

class RomanceIndex extends React.Component {
    
    componentDidMount() {
        this.props.fetchMovies()
    }

    render() {
        let romanceMovies = this.props.romanceMovies.map(movie => {
            return <MovieIndexItem movie={movie} key={movie.id} />
        })

        return (
            <>
                <MovieNavBar genre="Romance" />
                <ul className="movie-index-list">{romanceMovies}</ul>
            </>
        )
    }
}

export default RomanceIndex