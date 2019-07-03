import React from 'react'
import { withRouter } from 'react-router-dom'

class MovieDisplay extends React.Component {
    componentDidMount() {
        this.props.fetchMovie(this.props.match.params.movieId)
    }

    render() {
        if (!this.props.movie) return null
        return (
            <div className="video-display-container">
                <div className="video-container">
                    <video className="video"
                        controls
                        src={this.props.movie.videoUrl}>
                    </video>
                </div>
                <div className="content-description-container">
                    <span className="content-title">{this.props.movie.title}</span>
                    <span className="meta-description">{this.props.movie.rating} | {this.props.movie.audio} | {this.props.movie.format}</span>
                    <span className="content-description">{this.props.movie.description}</span>
                    <span className="meta-description">{this.props.movie.year} | {this.props.movie.length}</span>
                </div>
            </div>
        )
    }
}

export default withRouter(MovieDisplay)