import React from 'react'
import MovieIndexItem from './movie_index_item'
import MovieNavBar from './movie_navbar'

class DramaIndex extends React.Component {

    componenttDidMount() {
        this.props.fetchMovies()
    }

    render() {
        let dramaMovies = this.props.dramaMovies.map(movie => {
            return <MovieIndexItem movie={movie} key={movie.title} />
        })
        return (
            <>
                <MovieNavBar genre="Drama" />
                <ul id="drama-index">{dramaMovies}</ul>
            </>
        )
    }
}

export default DramaIndex