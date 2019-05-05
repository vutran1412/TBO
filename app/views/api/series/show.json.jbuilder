json.partial! 'api/series/series', series: @series

json.set! "seasons" do
    @series.seasons.each do |season|
        json.partial! 'api/series/season', season: season
    end
end

json.set! "episodes" do
    @series.episodes.each do |episode|
        json.partial! 'api/series/episode', episode: episode
    end
end