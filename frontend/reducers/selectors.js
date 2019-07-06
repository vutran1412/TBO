export const getAllMovies = ({ movies }) => (
    Object.keys(movies).map(id => movies[id])
)

export const getAllSeries = ({ series }) => (
    Object.keys(series).map(id => series[id])
)

export const getActionMovies = ({ movies }) => {
    let actionMovies = []
    for (let id in movies) {
        if (movies[id].genre === "Action") {
            actionMovies.push(movies[id])
        }
    }
    return actionMovies
}

export const getComedyMovies = ({ movies }) => {
    let comedyMovies = []
    for (let id in movies) {
        if (movies[id].genre === "Comedy") {
            comedyMovies.push(movies[id])
        }
    }
    return comedyMovies
}

export const getDramaMovies = ({ movies }) => {
    let dramaMovies = []
    for (let id in movies) {
        if (movies[id].genre === "Drama") {
            dramaMovies.push(movies[id])
        }
    }
    return dramaMovies
}

export const getRomanceMovies = ({ movies }) => {
    let romanceMovies = []
    for (let id in movies) {
        if (movies[id].genre === "Romance") {
            romanceMovies.push(movies[id])
        }
    }
    return romanceMovies
}



