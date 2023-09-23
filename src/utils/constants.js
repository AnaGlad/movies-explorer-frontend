const optionsMainApi = {
  baseUrl: `https://api.movieavp.nomoredomainsicu.ru/`,
  // baseUrl: `http://localhost:3000/`,
  headers: {
    'Content-Type': 'application/json',
  },
};
const optionsMoviesApi = {
  baseUrl: `https://api.nomoreparties.co/beatfilm-movies/`,
  // baseUrl: `http://localhost:3000/`,
  headers: {
    'Content-Type': 'application/json',
  },
};
const authOptions = {
  baseUrl: `https://api.movieavp.nomoredomainsicu.ru/`,
  // baseUrl: `http://localhost:3000/`,
}

export {
  optionsMainApi,
  authOptions,
  optionsMoviesApi

};
