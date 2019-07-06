json.series do
    json.partial! '/api/series/series', series: @series
end

json.episodes do 
    json.partial! '/api/series/all_episodes', episodes: @episodes
end