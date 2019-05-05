import React from 'react'
import { connect } from 'react-redux'
import MovieIndex from './movie_index'
import { fetchMovies } from '../../actions/'

const mapStateToProps = state => (
    {
        movies: Object.values(state.movies)
    }
)

const mapDispatchToProps = dispatch => (
    {
        fetchMovies: () => dispatch(fetchMovies())
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(MovieIndex)