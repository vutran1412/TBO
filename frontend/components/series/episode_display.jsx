import React from 'react'

class EpisodeDisplay extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hasScroll: false
        }

        this.handleScroll = this.handleScroll.bind(this)

    }

    componentDidMount() {
        this.scrollToTop()
        this.props.fetchSeries(this.props.match.params.seriesId)
    }

   

    scrollToTop() {
        window.scrollTo(0, 0)
    }

    handleScroll() {
        if (window.scrollY === 0) {
            this.setState({
                hasScroll: false
            })
        } else if (this.state.hasScroll === false) {
            this.setState({
                hasScroll: true
            })
        }
    }

    render() {
        if (this.props.episode === undefined) return null
        return (
            <div className="video-display-container">
                <div className="video-container">
                    <video className="video"
                        controls
                        src={this.props.episode.videoUrl}></video>
                </div>
                <div className="content-description-container">
                    <span className="content-title">{this.props.episode.title} SN {this.props.episode.season_number}</span>
                    <span className="meta-description">{this.props.show.rating} | {this.props.show.audio} | {this.props.show.format}</span>
                    <span className="content-description">{this.props.episode.description}</span>
                    <span className="meta-description">{this.props.episode.year} | {this.props.episode.length}</span>
                </div>
            </div>
        )
    }
}

export default EpisodeDisplay