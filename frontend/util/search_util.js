export const searchMovies = (query) => (
    $.ajax({
        url: `/api/search?q=${query}`,
        method: 'GET'
    })
)

