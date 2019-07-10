import React from 'react'
import { SeriesImageSlide } from './series_image_slide'
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
        const lastIndex = this.props.series.length - 1
        const { currentImageIndex } = this.state
        const shouldResetIndex = currentImageIndex === 0
        const index = shouldResetIndex ? lastIndex : currentImageIndex - 1

        this.setState({
            currentImageIndex: index
        })
    }


    nextSlide() {
        const lastIndex = this.props.series.length - 1
        const { currentImageIndex } = this.state
        const shouldResetIndex = currentImageIndex === lastIndex
        const index = shouldResetIndex ? 0 : currentImageIndex + 1
        this.setState({
            currentImageIndex: index
        })
    }

    render() {
        const posterUrls = this.props.series.map(show => show.posterUrl)
        const seriesTitles = this.props.series.map(show => show.title)
        const seriesIds = this.props.series.map(show => show.id)
        return (
            <div className="carousel">
                <i className="fas fa-chevron-left" onClick={this.previousSlide}></i>
                <SeriesImageSlide seriesTitle={seriesTitles[this.state.currentImageIndex]} url={posterUrls[this.state.currentImageIndex]} seriesId={seriesIds[this.state.currentImageIndex]} />
                <i className="fas fa-chevron-right" onClick={this.nextSlide}></i>
            </div>
        )
    }
}

export default withRouter(Carousel)