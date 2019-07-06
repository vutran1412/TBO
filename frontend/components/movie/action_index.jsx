import React from 'react'
import MovieIndexItem from './movie_index_item'
import MovieNavBar from './movie_navbar'

class ActionIndex extends React.Component {
    constructor(props) {
        super(props)
        
    }

    componentDidMount() {
        this.props.fetchMovies()
    }

    render() {
        let actionMovies = this.props.actionMovies.map(movie => {
            return <MovieIndexItem movie={movie} key={movie.title} />
        })
        return (
            <>
                <MovieNavBar genre="Action"/>
                <ul id="action-index">{actionMovies}</ul>
            </>
        )
    }
}

export default ActionIndex