json.array! @movies do |movie|
    json.partial! 'api/movies/movie', movie: movie
end
