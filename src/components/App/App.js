import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import './App.css';
import { ProtectedRoute } from '../ProtectedRoute';
import { Routes, Route } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';


import mainApi from '../../utils/MainApi';

import auth from '../../utils/auth';
import movieApi from '../../utils/MoviesApi';

function App() {
  const [userData, setUserData] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [loginError, setLoginError] = useState('');
  const [updateUserError, setUpdateUserError] = useState('');

  const [currentUser, setCurrentUser] = useState({});
  const [movies, setMovies] = useState([]);
  const [searchString, setSearchString] = useState('');
  const [isShortFilm, setIsShortFilm] = useState(false);

  const [searchMoviesMessage, setSearchMoviesMessage] = useState('');
  const [savedMovies, setSavedMovies] = useState([]);

  const [isActivePreloader, setisActivePreloader] = useState(false);
  const [isActiveButton, setIsActiveButton] = useState(false);

  const navigate = useNavigate();

  function searchMovies(e, searchString, isShortFilm) {
    e?.preventDefault()
    setSearchMoviesMessage('')
    console.log(searchString);
    if (isLoggedIn) {

      setisActivePreloader(!isActivePreloader);
      movieApi
        .getInitialMovies()
        .then((data) => {
          console.log(data)
          const result = data.filter((item) => ((item.nameRU.toLowerCase().includes(searchString.toLowerCase())) ||
            (item.nameEN.toLowerCase().includes(searchString.toLowerCase()))) && (!isShortFilm || item.duration <= 40)).map((item) => ({
              ...item, isInSavedMovie: isMovieInSavedMovie(item.id)
            }))
          setMovies(result);
          localStorage.setItem('searchString', searchString);
          localStorage.setItem('isShortFilm', isShortFilm);
          localStorage.setItem('movies', JSON.stringify(result));

          setisActivePreloader(isActivePreloader);
          return result
        })
        .then((data) => { return (data?.length === 0 ? setSearchMoviesMessage('Ничего не найдено') : '') })
        .catch((err) => {
          console.log(err);
          setisActivePreloader(false);
          setSearchMoviesMessage('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз')
        });
    }
  }
  // function searchSavedMovies(e, searchString, isShortFilm) {
  //   e.preventDefault()
  //   console.log(searchString);
  //   if (isLoggedIn) {
  //     setisActivePreloader(!isActivePreloader);
  //     mainApi
  //       .getInitialMovies()
  //       .then((data) => {
  //         console.log(data)
  //         setSavedMovies(
  //           data.filter((item) => ((item.nameRU.toLowerCase().includes(searchString.toLowerCase())) ||
  //             (item.nameEN.toLowerCase().includes(searchString.toLowerCase()))) && (!isShortFilm || item.duration <= 40)).map((item) => ({
  //               ...item,
  //             }))
  //         );
  //         setisActivePreloader(isActivePreloader);
  //       })
  //       .then((data) => { return (data.length > 12 ? setIsActiveButton(!isActiveButton) : '') })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }
  // }

  useEffect(() => {
    if (isLoggedIn) {
      mainApi
        .getUserInfo()
        .then((data) => {
          setCurrentUser(data);
        })
        .catch((err) => {
          console.log(err);
        });

      mainApi.getInitialMovies()
        .then((data) => {
          setSavedMovies(data);
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [isLoggedIn]);

  function handleSaveMovie(movie) {
    mainApi
      .postNewMovie(movie)
      .then((movie) => {
        console.log(movie);
        const moviesNew = movies.map((item) => item.id === movie.movieId ? { ...item, 'isInSavedMovie': true } : item)
        setMovies(moviesNew)
        localStorage.setItem('movies', JSON.stringify(moviesNew));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleDeleteMovie(movieId) {
    mainApi
      .deleteSaveMovie(movieId)
      .then((message) => {
        console.log(message);

        setSavedMovies(savedMovies.filter((movie) => movie.movieId !== movieId))
        const moviesNew = movies.map((item) => item.id === movieId ? { ...item, 'isInSavedMovie': false } : item)
        setMovies(moviesNew)
        localStorage.setItem('movies', JSON.stringify(moviesNew));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function isMovieInSavedMovie(movieId) {
    return savedMovies.filter((savedMovie) => savedMovie.movieId === movieId).length > 0
  }

  function checkToken() {
    const token = localStorage.getItem('token');
    return auth
      .getContent(token)
      .then((data) => {
        console.log('checkToken');
        console.log(data);
        if (!data) {
          return;
        }
        setUserData(data);
        setIsLoggedIn(true);
        // navigate('/');
      })
      .catch((error) => {
        setIsLoggedIn(false);
        setUserData(null);
        localStorage.removeItem('token');
        localStorage.removeItem('searchString');
        localStorage.removeItem('isShortFilm');
        localStorage.removeItem('movies');
      });
  }

  function getMovies() {
    const movies = localStorage.getItem('movies');
    // const searchString = localStorage.getItem('searchString');
    // const isShortFilm = localStorage.getItem('isShortFilm');
    // console.log(movies);
    if (movies) {
      setMovies(JSON.parse(movies));
      // setSearchString(searchString);
      // setIsShortFilm(isShortFilm);
    }
  }

  function getSearchString() {
    const searchString = localStorage.getItem('searchString');
    console.log(searchString);
    if (searchString) {
      setSearchString(searchString);
    }
  }

  function getIsShortFilm() {
    const isShortFilm = localStorage.getItem('isShortFilm');
    if (isShortFilm) {
      setIsShortFilm(isShortFilm === 'true');
    }
  }

  useEffect(() => {
    checkToken();
    getMovies();
    getSearchString();
    getIsShortFilm()
  }, []);

  function handleLogin(formValue) {
    console.log("handleLogin");
    console.log(isLoggedIn);
    setLoginError('')
    return auth
      .authorize(formValue.email, formValue.password)
      .then((data) => {
        localStorage.setItem('token', data.token);
        mainApi.updateHeaders(data.token)
        checkToken().then(() => {
          navigate('/movies');
        })
      })
      .catch((error) => {
        // handleOpenTooltip(false);
        setLoginError('Неверный логин или пароль')
        console.log(error);
      });
  }

  function handleUpdateUser(user) {
    setUpdateUserError('')
    mainApi
      .changeUserInfo(user.name, user.email)
      .then((data) => {
        setCurrentUser(data);
        alert('Данные успешно сохранены')
      })
      .catch((error) => {
        console.log(error);
        setUpdateUserError('Данные указаны неверно')
      });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='root'>
        <div className='page'>
          <Routes>
            <Route
              exact
              path='/'
              element={
                <Main
                  header={<Header isLoggedIn={isLoggedIn} textcolor={'rgba(255, 255, 255, 1)'} />}
                  footer={<Footer />} />}
            />
            <Route
              exact
              path='/movies'
              element={<ProtectedRoute isLoggedIn={isLoggedIn}
                element={Movies}
                handleSaveMovie={handleSaveMovie}
                handleDeleteMovie={handleDeleteMovie}
                searchMoviesMessage={searchMoviesMessage}
                isActiveButton={isActiveButton}
                isActivePreloader={isActivePreloader}
                searchMovies={searchMovies}
                searchString={searchString}
                movies={movies}
                isShortFilm={isShortFilm}
                header={<Header isLoggedIn={isLoggedIn} color={'rgba(255, 255, 255, 1)'}
                  textcolor={'rgba(0, 0, 0, 1)'} colorIcon={'rgba(249, 249, 249, 1)'} />} footer={<Footer />} />}
            />
            <Route
              exact
              path='/saved-movies'
              element={<ProtectedRoute
                isLoggedIn={isLoggedIn}
                handleDeleteMovie={handleDeleteMovie}
                element={SavedMovies}
                savedMovies={savedMovies}
                // searchSavedMovies={searchSavedMovies}
                header={<Header isLoggedIn={isLoggedIn} color={'rgba(255, 255, 255, 1)'} textcolor={'rgba(0, 0, 0, 1)'} colorIcon={'rgba(249, 249, 249, 1)'} />}
                footer={<Footer />} />}
            />
            <Route
              exact
              path='/profile'
              element={<ProtectedRoute isLoggedIn={isLoggedIn}
                element={Profile}
                updateUserError={updateUserError}
                setIsLoggedIn={setIsLoggedIn}
                onUpdateUser={handleUpdateUser}

                header={<Header isLoggedIn={isLoggedIn} color={'rgba(255, 255, 255, 1)'} textcolor={'rgba(0, 0, 0, 1)'} colorIcon={'rgba(249, 249, 249, 1)'} />}
                userName={currentUser.name} />}
            />
            <Route
              exact
              path='/signin'
              element={<Login onLogin={(formValue) => handleLogin(formValue)} buttonName={'Войти'} loginError={loginError} />}
            />
            <Route
              exact
              path='/signup'
              element={<Register onLogin={(formValue) => handleLogin(formValue)} buttonName={'Зарегистрироваться'} />}
            />
            <Route
              path='*'
              element={<NotFoundPage />}
            />
          </Routes>
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;