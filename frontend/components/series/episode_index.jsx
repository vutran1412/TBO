import React from 'react'
import EpisodeIndexItem from './episode_index_item'

const EpisodeIndex = ({ episodes, onClick }) => {
    const allEpisodes = Object.values(episodes)
    const all = allEpisodes.map(episode => (
        <EpisodeIndexItem onClick={onClick} key={episode.title} episode={episode} />
    ))
    return (
        <>
            <ul className="search-result-lists">{all}</ul>
        </>
    )
}

export default EpisodeIndex