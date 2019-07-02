import Carousel from './carousel'
import { connect } from 'react-redux'

const mapStateToProps = (ownProps, state) => {
    debugger
    return ({
        movies: this.state.movies
    })
}

export default connect(mapStateToProps, null)(Carousel)
