export const search = (query) => (
    $.ajax({
        url: `/api/search?q=${query}`,
        method: 'GET'
    })
)

