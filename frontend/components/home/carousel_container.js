import Carousel from './carousel'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

const mapStateToProps = (state, ownProps) => {
    return ({
        movies: state.entities.movies
    })
}

export default withRouter(connect(mapStateToProps, null)(Carousel))
