import React from 'react'
import MovieIndexItem from './movie_index_item'
import MovieNavBar from './movie_navbar'

class ComedyIndex extends React.Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        this.props.fetchMovies()
    }

    render() {
        let comedyMovies = this.props.comedyMovies.map(movie => {
            return <MovieIndexItem movie={movie} key={movie.title} />
        })
        return (
            <>
                <MovieNavBar genre="Action" />
                <ul className="movie-index-list">{comedyMovies}</ul>
            </>
        )
    }
}

export default ComedyIndex