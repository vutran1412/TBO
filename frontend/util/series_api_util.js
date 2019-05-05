export const fetchAllSeries = () => (
    $.ajax({
        url: 'api/series',
        method: 'GET'
    })
)

export const fetchSeries = id => (
    $.ajax({
        url: `api/series/${id}`,
        method: 'GET'
    })
)