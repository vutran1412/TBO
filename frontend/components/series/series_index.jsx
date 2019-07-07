import React from 'react'
import SeriesIndexItem from './series_index_item'
import SeriesNavBar from './series_nav_bar'
import SeriesCarousel from './series_carousel'

class SeriesIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: this.props.movies
        }
        this.shuffle = this.shuffle.bind(this)
    }

    componentDidMount() {
        this.props.clearMovies()
        this.props.fetchAllSeries()
    }

    shuffle(array) {
        var currentIndex = array.length
        var tempValue, randomIndex
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex)
            currentIndex -= 1
            tempValue = array[currentIndex]
            array[currentIndex] = array[randomIndex]
            array[randomIndex] = tempValue
        }
        return array
    }

    render() {
        let allSeries

        allSeries = this.props.allSeries.map(show => (
            <SeriesIndexItem key={show.title} show={show} />
        ))
        return (
            <>
                <SeriesNavBar />
                <SeriesCarousel series={this.shuffle(this.props.allSeries)} />
                <ul className="series-index-list">{allSeries}</ul>
            </>
        )
    }
}

export default SeriesIndex