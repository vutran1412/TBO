import React from 'react'
import Carousel from './carousel'

class Home extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            movies: this.props.movies
        }
    }

    componentDidMount() {
        this.props.fetchMovies()
    }

    

    render() {
        return (
            <div>
                <Carousel movies={this.props.movies} />
            </div>
        )
    }
}

export default Home