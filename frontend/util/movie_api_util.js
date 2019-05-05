export const fetchMovies = () => (
    $.ajax({
        url: 'api/movies',
        method: 'GET'
    })
)

export const fetchMovie = movie => (
    $.ajax({
        url: `api/movies/${movie.id}`,
        method: 'GET'
    })
)
