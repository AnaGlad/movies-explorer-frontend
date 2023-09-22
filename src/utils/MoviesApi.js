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

 

}
const movieApi = new Api(optionsMoviesApi);
export default movieApi;
