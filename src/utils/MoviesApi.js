import { optionsMoviesApi } from './constants';
class Api {
  constructor(optionsMoviesApi) {
    this._baseUrl = optionsMoviesApi.baseUrl;
    // const token = localStorage.getItem('token');
    this._headers = {
      'Content-Type': 'application/json',
      // 'Authorization': `Bearer ${token}`,
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
      // credentials: "include",
    }).then(this._checkResponse);
  }

  postNewCard(cardName, url) {
    return fetch(`${this._baseUrl}cards`, {
      method: 'POST',
      headers: this._headers,
      credentials: "include",
      body: JSON.stringify({
        name: cardName,
        link: url,
      }),
    }).then(this._checkResponse);
  }
  saveMovie(movieId) {
    return fetch(`${this._baseUrl}${movieId}`, {
      method: 'PUT',
      headers: this._headers,
      credentials: "include",
    }).then(this._checkResponse)
    // .then(localStorage.setItem());
  }

  deleteSaveMovie(movieId) {
    return fetch(`${this._baseUrl}${movieId}`, {
      method: 'DELETE',
      headers: this._headers,
      credentials: "include",
    }).then(this._checkResponse);
  }
  changeSaveMovieStatus(movieId, isSavedFilm) {
    if (isSavedFilm) {
      return this.deleteSaveMovie(movieId);
    } else {
      return this.saveMovie(movieId);
    }
  }
}
const movieApi = new Api(optionsMoviesApi);
export default movieApi;
