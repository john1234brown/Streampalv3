export const key = process.env.REACT_APP_TMDB_API_KEY;

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

export const popular = [
    `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
    `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=3`,
    `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=4`,
    `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=5`,
    `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=6`,
    `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=7`,
    `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=8`,
];

export const animation = [
    `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&with_genres=${genreIDs.animation}&page=1`,
    `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&with_genres=${genreIDs.animation}&page=2`,
    `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&with_genres=${genreIDs.animation}&page=3`,
    `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&with_genres=${genreIDs.animation}&page=4`,
    `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&with_genres=${genreIDs.animation}&page=5`,
    `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&with_genres=${genreIDs.animation}&page=6`,
    `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&with_genres=${genreIDs.animation}&page=7`,
    `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&with_genres=${genreIDs.animation}&page=8`,
];

export const fantasy = [
    `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&with_genres=${genreIDs.fantasy}&page=1`,
    `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&with_genres=${genreIDs.fantasy}&page=2`,
    `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&with_genres=${genreIDs.fantasy}&page=3`,
    `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&with_genres=${genreIDs.fantasy}&page=4`,
    `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&with_genres=${genreIDs.fantasy}&page=5`,
    `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&with_genres=${genreIDs.fantasy}&page=6`,
    `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&with_genres=${genreIDs.fantasy}&page=7`,
    `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&with_genres=${genreIDs.fantasy}&page=8`,
];

export const horror = [
    `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&with_genres=${genreIDs.horror}&page=1`,
    `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&with_genres=${genreIDs.horror}&page=2`,
    `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&with_genres=${genreIDs.horror}&page=3`,
    `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&with_genres=${genreIDs.horror}&page=4`,
    `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&with_genres=${genreIDs.horror}&page=5`,
    `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&with_genres=${genreIDs.horror}&page=6`,
    `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&with_genres=${genreIDs.horror}&page=7`,
    `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&with_genres=${genreIDs.horror}&page=8`,
];

export const comedy = [
    `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&with_genres=${genreIDs.comedy}&page=1`,
    `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&with_genres=${genreIDs.comedy}&page=2`,
    `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&with_genres=${genreIDs.comedy}&page=3`,
    `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&with_genres=${genreIDs.comedy}&page=4`,
    `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&with_genres=${genreIDs.comedy}&page=5`,
    `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&with_genres=${genreIDs.comedy}&page=6`,
    `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&with_genres=${genreIDs.comedy}&page=7`,
    `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&with_genres=${genreIDs.comedy}&page=8`,
];

export const crime = [
    `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&with_genres=${genreIDs.crime}&page=1`,
    `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&with_genres=${genreIDs.crime}&page=2`,
    `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&with_genres=${genreIDs.crime}&page=3`,
    `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&with_genres=${genreIDs.crime}&page=4`,
    `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&with_genres=${genreIDs.crime}&page=5`,
    `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&with_genres=${genreIDs.crime}&page=6`,
    `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&with_genres=${genreIDs.crime}&page=7`,
    `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&with_genres=${genreIDs.crime}&page=8`,
];

export const war = [
    `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&with_genres=${genreIDs.war}&page=1`,
    `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&with_genres=${genreIDs.war}&page=2`,
    `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&with_genres=${genreIDs.war}&page=3`,
    `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&with_genres=${genreIDs.war}&page=4`,
    `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&with_genres=${genreIDs.war}&page=5`,
    `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&with_genres=${genreIDs.war}&page=6`,
    `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&with_genres=${genreIDs.war}&page=7`,
    `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&with_genres=${genreIDs.war}&page=8`,
];