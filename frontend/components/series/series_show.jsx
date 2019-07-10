import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import EpisodeIndex from './episode_index'

class SeriesShow extends React.Component {
    componentDidMount() {
        this.props.fetchSeries(this.props.match.params.seriesId)
    }

    componentWillMount() {
        this.props.clearEpisodes()
    }

    render() {
        debugger
        if (Object.values(this.props.episodes).length < 1 || this.props.episodes[this.props.match.params.seriesId] === undefined) return null
        return (
            <div className="series-body">
                <div className="series-header-container">
                    <span className="series-header">
                        {this.props.show.title}
                    </span>
                </div>
                <div className="series-card-container">
                    <div className="series-pilot-description-container">
                        <div className="eries-pilot-description">
                            <h1 className="action-pitch">START WATCHING</h1>
                            <span className="pilot-title">Sn {this.props.episodes[this.props.match.params.seriesId].seasonNumber} {this.props.episodes[this.props.match.params.seriesId].title} Ep {this.props.episodes[this.props.match.params.seriesId].episodeNumber}</span>
                            <span className="pilot-description">{this.props.episodes[this.props.match.params.seriesId].description}</span>
                            <span className="meta-description">{this.props.episodes[this.props.match.params.seriesId].year} | {this.props.episodes[this.props.match.params.seriesId].length}</span>
                        </div>
                    </div>
                    <div className="series-pilot-image-container">
                        <Link to={`/series/${this.props.show.id}/${this.props.episodes[this.props.match.params.seriesId].id}/`}>
                            <img className="series-pilot-image" src={this.props.episodes[this.props.match.params.seriesId].posterUrl} />
                        </Link>
                    </div>
                </div>
                <div className="series-description-container">
                    <h1 className="action-pitch">About the show</h1>
                    <span className="series-description">
                        {this.props.show.description}
                    </span>
                </div>
                <div className="episode-index-container">
                    <EpisodeIndex episodes={this.props.episodes} />
                </div>
            </div>
        )
    }
}

export default withRouter(SeriesShow)