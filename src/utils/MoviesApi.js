import { optionsMoviesApi } from './constants';
class Api {
  constructor(optionsMoviesApi) {
    this._baseUrl = optionsMoviesApi.baseUrl;
    this._headers = {
      'Content-Type': 'application/json',
    }
    console.log(this._headers);
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
  }

  getInitialMovies() {
    return fetch(`${this._baseUrl}`, {
      headers: this._headers,
    }).then(this._checkResponse);
  }
}
const movieApi = new Api(optionsMoviesApi);
export default movieApi;
