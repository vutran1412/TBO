json.array! @movies do |movie|
    json.partial! 'api/movies/movie', movie: movie
end

json.array! @series do |series|
    json.partial! 'api/series/series', series: series
end
