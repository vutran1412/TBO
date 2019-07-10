episodes.each do |episode|
    json.set! episode.id do
        json.partial! '/api/series/episode', episode: episode
        json.thumbnailUrl url_for(episode.thumbnail)
        json.posterUrl url_for(episode.poster)
        json.videoUrl url_for(episode.video)
    end
end