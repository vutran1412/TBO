json.array! @series do |series|
    json.partial! '/api/series/series', series: series
    json.thumbnailUrl url_for(series.thumbnail)
    json.posterUrl url_for(series.poster)
end