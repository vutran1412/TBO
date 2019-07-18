import React from 'react'
import Carousel from './carousel'
import { Link } from 'react-router-dom'
import ItemsCarousel from 'react-items-carousel'
import MovieIndexItem from '../movie/movie_index_item'
import SeriesIndexItem from '../series/series_index_item'


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
            
            <div style={{"maxHeight": "100%", "marginTop": "200px", "marginLeft": "90px" }}>
                <Link to="/series" className="">
                    <h1 style={{ "color": "azure", "fontSize": "20px", "marginBottom": "20px" }}>Series</h1>
                </Link>
                <ItemsCarousel
                    gutter={12}
                    activePosition={'center'}
                    chevronWidth={50}
                    numberOfCards={4}
                    slidesToScroll={2}
                    outsideChevron={false}
                    showSlither={true}
                    firstAndLastGutter={false}
                    activeItemIndex={this.state.activeItemIndex}
                    requestToChangeActive={value => this.setState({ activeItemIndex: value })}
                    rightChevron={'→'}
                    leftChevron={'←'}
                    style={{ "color": "white", "fontSize": "20px" , "display": "flex" }}
                >
                    {Array.from(series.map((show, i) =>
                        <SeriesIndexItem show={show} style={{"maxWidth": "379px", "height": 0}}/>
                    ))}
                        
                </ItemsCarousel>
            </div>
            <div style={{ "maxHeight": "100%", "marginTop": "100px", "marginLeft": "90px" }}>
                <Link to="/movies">
                    <h1 style={{ "color": "azure", "fontSize": "20px", "marginBottom": "20px" }}>Movies</h1>
                </Link>
                <ItemsCarousel
                    gutter={12}
                    activePosition={'center'}
                    chevronWidth={50}
                    numberOfCards={4}
                    slidesToScroll={2}
                    outsideChevron={false}
                    showSlither={false}
                    firstAndLastGutter={false}
                    activeItemIndex={this.state.activeItemIndex}
                    requestToChangeActive={value => this.setState({ activeItemIndex: value })}
                    rightChevron={'→'}
                    leftChevron={'←'}
                    style={{ "color": "white", "fontSize": "20px", "display": "flex" }}
                >
                    {Array.from(movies.map((movie, i) =>
                        <MovieIndexItem movie={movie} style={{ "maxWidth": "379px", "height": 0 }} />
                    ))}

                </ItemsCarousel>
            </div>
            </>
        )
    }
}

export default Home