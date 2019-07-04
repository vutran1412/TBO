import React from 'react'
import MovieIndexItem from '../movie/movie_index_item'

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchTerm: '',
            autoCompleteResults: [],
            itemSelected: {},
            showItemSelected: false
        }
        this.getAutoCompleResults = this.getAutoCompleResults.bind(this)
        
    }

    componentDidUpdate(nextProps) {
        if (this.props.searchRes !== nextProps.searchRes) {
            this.setState({
                autoCompleteResults: nextProps.autoCompleteResults
            })
        }
    }
  

    getAutoCompleResults(e) {
        if (this.state.searchTerm === "") {
            this.setState({
                searchTerm: e.target.value
            }, () => {
                this.props.searchMovies(this.state.searchTerm)
                .then(response => this.setState({
                    autoCompleteResults: response.movies
                }))
            })
        } else {
            this.setState({
                searchTerm: e.target.value,
                autoCompleteResults: []
            })
        }
    }

    componentWillUnmount() {
        this.setState({
            autoCompleteResults: []
        })
    }

    render() {
        let autoCompleteList = this.state.autoCompleteResults.map((response, index) => {
            return <MovieIndexItem key={index} movie={response}/>
        })
        const resultString = autoCompleteList.length > 1 ? 'results' : 'result'
        return (
            <div className="search-container">
                <section className="section">
                    <input type="text"
                        ref={ (input) => { this.searchBar = input } }
                        className="search-input"
                        onChange={this.getAutoCompleResults}
                        value={this.state.searchTerm}
                        placeholder="Search series or movies..." />
                    <h1 className="search-result-counter" >{autoCompleteList.length} {resultString}</h1>
                    <ul className="search-result-lists">
                        {autoCompleteList}
                    </ul>
                </section>
            </div>
        )
    }
}

export default Search