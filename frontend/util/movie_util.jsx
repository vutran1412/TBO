export const fetchMovies = () => (
    $.ajax({
        url: 'api/movies',
        method: 'GET'
    })
)

export const fetchMovie = id => (
    $.ajax({
        url: `api/movies/${id}`,
        method: 'GET'
    })
)