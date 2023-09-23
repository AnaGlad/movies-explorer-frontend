import { optionsMainApi } from './constants';
class Api {
  constructor(optionsMainApi) {
    this._baseUrl = optionsMainApi.baseUrl;
    const token = localStorage.getItem('token');
    this._headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
    console.log(this._headers);
  }

  updateHeaders(token) {
    this._headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
  }

  getInitialMovies() {
    return fetch(`${this._baseUrl}movies`, {
      method: 'GET',
      headers: this._headers,
      credentials: "include",
    }).then(this._checkResponse);
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}users/me`, {
      method: 'GET',
      headers: this._headers,
      credentials: "include",
    }).then(this._checkResponse);
  }

  changeUserInfo(name, email) {
    return fetch(`${this._baseUrl}users/me`, {
      method: 'PATCH',
      headers: this._headers,
      credentials: "include",
      body: JSON.stringify({
        name: name,
        email: email,
      }),
    }).then(this._checkResponse);
  }


  deleteSaveMovie(movieId) {
    return fetch(`${this._baseUrl}movies/${movieId}`, {
      method: 'DELETE',
      headers: this._headers,
      credentials: "include",
    }).then(this._checkResponse);
  }

  postNewMovie(movie) {
    return fetch(`${this._baseUrl}movies`, {
      method: 'POST',
      headers: this._headers,
      credentials: "include",
      body: JSON.stringify({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        trailerLink: movie.trailerLink,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
        image: `${"https://api.nomoreparties.co" + movie?.image?.url}`,
        thumbnail: `${"https://api.nomoreparties.co" + movie?.image?.formats?.thumbnail?.url}`,
        movieId: movie.id
      }
      ),
    }).then(this._checkResponse);
  }
}

const mainApi = new Api(optionsMainApi);
export default mainApi;
