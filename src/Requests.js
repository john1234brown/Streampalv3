const key = process.env.REACT_APP_TMDB_API_KEY;

const requests = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1`,
    requestTrending: `https://api.themoviedb.org/3/movie/popular?language=en-US&page=2`,
    requestHorror: `https://api.themoviedb.org/3/search/movie?language=en-US&query=horror&page=1`,
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?&language=en-US&page=1`,
};

export default requests