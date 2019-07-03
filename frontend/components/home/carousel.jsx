import React from 'react'
import { ImageSlide } from './image_slide'
import { withRouter } from 'react-router-dom'

class Carousel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentImageIndex: 0
        }
        this.previousSlide = this.previousSlide.bind(this)
        this.nextSlide = this.nextSlide.bind(this)
    }

    componentDidMount() {
        this.timerID = setInterval(() => {
            this.nextSlide()
        }, 7000)
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }


    previousSlide() {
        const lastIndex = this.props.movies.length - 1
        const { currentImageIndex } = this.state
        const shouldResetIndex = currentImageIndex === 0
        const index= shouldResetIndex ? lastIndex : currentImageIndex - 1

        this.setState({
            currentImageIndex: index
        })
    }


    nextSlide() {
        const lastIndex = this.props.movies.length - 1
        const { currentImageIndex } = this.state
        const shouldResetIndex = currentImageIndex === lastIndex
        const index = shouldResetIndex ? 0 : currentImageIndex + 1
        this.setState({
            currentImageIndex: index
        })
    }

    render() {
        const posterUrls = this.props.movies.map(movie => movie.posterUrl)
        const movieTitles = this.props.movies.map(movie => movie.title)
        const movieIds = this.props.movies.map(movie => movie.id)
        debugger
        return (
            <div className="carousel">
                <i className="fas fa-chevron-left" onClick={this.previousSlide}></i> 
                <ImageSlide movieTitle={movieTitles[this.state.currentImageIndex]} url={posterUrls[this.state.currentImageIndex]} movieId={movieIds[this.state.currentImageIndex]}/>
                <i className="fas fa-chevron-right" onClick={this.nextSlide}></i>
            </div>
        )
    }
}

export default withRouter(Carousel)