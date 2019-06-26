json.extract! movie, :id, :title, :genre, :audio, :format, :year, :length, :description, :rating
json.thumbnailUrl url_for(movie.thumbnail)
json.posterUrl url_for(movie.poster)
json.videoUrl url_for(movie.video)