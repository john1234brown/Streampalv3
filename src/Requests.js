const key = process.env.REACT_APP_TMDB_API_KEY;

const genreIDs = {
    action: 28,
    adventure: 12,
    animation: 16,
    comedy: 35,
    crime: 80,
    documentary: 99,
    drama: 18,
    family: 10751,
    fantasy: 14,
    history: 36,
    horror: 27,
    mystery: 9648,
    romance: 10749,
    scienceFiction: 878,
    thriller: 53,
    war: 10752,
    western: 37,
};

const requests = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestAnimation: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&with_genres=${genreIDs.animation}&page=1`,
    requestFantasy: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&with_genres=${genreIDs.fantasy}&page=1`,
    requestHorror: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&with_genres=${genreIDs.horror}&page=1`,
    requestComedy: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&with_genres=${genreIDs.comedy}&page=1`,
    requestCrime: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&with_genres=${genreIDs.crime}&page=1`,
    requestWar: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&with_genres=${genreIDs.war}&page=1`,
};

export default requests