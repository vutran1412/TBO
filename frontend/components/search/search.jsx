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

    
    handleChange(e) {
        this.getAutoCompleResults(e)
    }
  

    getAutoCompleResults(e) {
        this.setState({
            searchTerm: e.target.value
        }, () => {
            this.props.searchMovies(this.state.searchTerm)
            .then(response => this.setState({
                autoCompleteResults: response.movies
            }))
        })
    }


    render() {
        let autoCompleteList = this.state.autoCompleteResults.map((response, index) => {
            return <MovieIndexItem key={index} movie={response}/>
        })
        autoCompleteList = this.state.searchTerm === "" ? <div></div> : autoCompleteList
        const resultString = autoCompleteList.length >= 2 ? 'results' : 'result'
        return (
            <div className="search-container">
                <section className="section">
                    <input type="text"
                        ref={ (input) => { this.searchBar = input } }
                        className="search-input"
                        onChange={(e)=> this.handleChange(e)}
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