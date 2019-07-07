json.extract! series, :id, :title, :description, :rating, :audio, :format
json.thumbnailUrl url_for(series.thumbnail)
json.posterUrl url_for(series.poster)