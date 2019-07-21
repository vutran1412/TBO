import React from 'react'
import Carousel from './carousel'
import MiniSlider from './mini-slider/mini-slider'


class Home extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            movies: this.props.movies
        }
    }

    componentDidMount() {
        this.props.fetchMovies()
        this.props.fetchAllSeries()
    }

    

    render() {
        const { movies } = this.props
        const { series } = this.props
        return (
            <>
                <div className="home-body-container">
                    <Carousel movies={this.props.movies} />
                </div>
                
                <MiniSlider content={series} type="Series" />
                <MiniSlider content={movies} type="Movies" />
            </>
        )
    }
}

export default Home