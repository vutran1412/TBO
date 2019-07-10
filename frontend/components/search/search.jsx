import React from 'react'
import MovieIndexItem from '../movie/movie_index_item'
import SeriesIndexItem from '../series/series_index_item'

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchTerm: '',
            autoCompleteResults: []
        }
        this.getAutoCompleResults = this.getAutoCompleResults.bind(this)
        
    }

    componentDidMount() {
        this.props.clearMovies()
        this.props.clearSeries()
    }
    
    handleChange(e) {
        this.props.clearSearchResults()
        this.getAutoCompleResults(e)
    }

    handleClick() {
        this.props.fetchSeries(this.props.match.params.seriesId)
    }

    getAutoCompleResults(e) {
        this.setState({
            searchTerm: e.target.value
        }, () => {
            this.props.search(this.state.searchTerm)
            .then(response => this.setState({
                autoCompleteResults: response.search
            }))
        })
    }

    componentWillUnmount() {
        this.props.clearSearchResults()
    }


    render() {
        let autoCompleteList
        let movies = []
        let shows = []
        this.props.searchRes.forEach((search, i) => {
            if (search.rating.split("-")[0] === "TV") {
                shows.push(<SeriesIndexItem key={search.title} show={search} onClick={this.handleClick}/>)
            } else {
                movies.push(<MovieIndexItem key={search.title} movie={search} />)
            }
        })
        autoCompleteList = movies.concat(shows)
        autoCompleteList = this.state.searchTerm === "" ? <div></div> : autoCompleteList
        const resultString = autoCompleteList.length >= 1 ? 'results' : 'result'
        return (
            <div className="search-container">
                <section className="section">
                    <input type="text"
                        ref={ (input) => { this.searchBar = input } }
                        className="search-input"
                        onChange={(e)=> this.handleChange(e)}
                        value={this.state.searchTerm}
                        placeholder="Search series or movies..." />
                    <h1 className="search-result-counter" >{autoCompleteList.length > 0 ? autoCompleteList.length : ''} {autoCompleteList.length > 0 ? resultString : <div></div>}</h1>
                    <ul className="search-result-lists">
                        {autoCompleteList}
                    </ul>
                </section>
            </div>
        )
    }
}

export default Search