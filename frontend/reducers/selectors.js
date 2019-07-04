export const getAllMovies = ({ movies }) => (
    Object.keys(movies).map(id => movies[id])
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
}

export const getDramaMovies = ({ movies }) => {
    let dramaMovies = []
    for (let id in movies) {
        if (movies[id].genre === "Drama") {
            dramaMovies.push(movies[id])
        }
    }
}

