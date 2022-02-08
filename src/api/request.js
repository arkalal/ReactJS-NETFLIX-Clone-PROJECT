const ApiKey = 'b1df6e407820c14a5e3e4549215baa4c'

const myRequests = {
    fetchTrending: `/trending/all/week?api_key=${ApiKey}&languages=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${ApiKey}&with_network=213`,
    fetchTopRated: `movie/top_rated?api_key=${ApiKey}&languages=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${ApiKey}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${ApiKey}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${ApiKey}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${ApiKey}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${ApiKey}&with_genres=99`,
}

export default myRequests