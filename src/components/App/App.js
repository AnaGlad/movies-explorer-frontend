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
  const [currentUser, setCurrentUser] = useState({});
  const [movies, setMovies] = useState([]);
  const [searchMoviesMessage, setSearchMoviesMessage] = useState('');
  const [savedMovies, setSavedMovies] = useState([]);

  const [isActivePreloader, setisActivePreloader] = useState(false);
  const [isActiveButton, setIsActiveButton] = useState(false);

  const navigate = useNavigate();


  // const [isRegister, setIsRegister] = useState(false);

  // function handleShowMessage(isRegister) {
  //   setIsRegister(isRegister);
  //   if (isRegister) {
  //     console.log('Вы успешно зарегистрировались!');
  //   } else {
  //     console.log('Что-то пошло не так! Попробуйте ещё раз.');
  //   }
  // }
  function searchMovies(e, searchString, isShortFilm) {
    e.preventDefault()
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
              ...item,
            }))
          setMovies(result);
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
  function searchSavedMovies(e, searchString, isShortFilm) {
    e.preventDefault()
    console.log(searchString);
    if (isLoggedIn) {
      setisActivePreloader(!isActivePreloader);
      movieApi
        .getInitialMovies()
        .then((data) => {
          console.log(data)
          setMovies(
            data.filter((item) => ((item.nameRU.toLowerCase().includes(searchString.toLowerCase())) ||
              (item.nameEN.toLowerCase().includes(searchString.toLowerCase()))) && (!isShortFilm || item.duration <= 40)).map((item) => ({
                ...item,
              }))
          );
          setisActivePreloader(isActivePreloader);
        })
        .then((data) => { return (data.length > 12 ? setIsActiveButton(!isActiveButton) : '') })
        .catch((err) => {
          console.log(err);
        });
    }
  }

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
    }
  }, [isLoggedIn]);

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
      });
  }

  useEffect(() => {
    checkToken();
  }, []);

  function handleLogin(formValue) {
    console.log("handleLogin");
    console.log(isLoggedIn);
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
        console.log(error);
      });
  }

  function handleUpdateUser(user) {
    mainApi
      .changeUserInfo(user.name, user.email)
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((err) => {
        console.log(err);
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
                searchMoviesMessage={searchMoviesMessage}
                isActiveButton={isActiveButton}
                isActivePreloader={isActivePreloader}
                searchMovies={searchMovies}
                movies={movies}
                header={<Header isLoggedIn={isLoggedIn} color={'rgba(255, 255, 255, 1)'}
                  textcolor={'rgba(0, 0, 0, 1)'} colorIcon={'rgba(249, 249, 249, 1)'} />} footer={<Footer />} />}
            />
            <Route
              exact
              path='/saved-movies'
              element={<ProtectedRoute
                isLoggedIn={isLoggedIn}
                element={SavedMovies}
                savedMovies={savedMovies}
                searchSavedMovies={searchSavedMovies}
                header={<Header isLoggedIn={isLoggedIn} color={'rgba(255, 255, 255, 1)'} textcolor={'rgba(0, 0, 0, 1)'} colorIcon={'rgba(249, 249, 249, 1)'} />}
                footer={<Footer />} />}
            />
            <Route
              exact
              path='/profile'
              element={<ProtectedRoute isLoggedIn={isLoggedIn}
                element={Profile}
                setIsLoggedIn={setIsLoggedIn}
                onUpdateUser={handleUpdateUser}

                header={<Header isLoggedIn={isLoggedIn} color={'rgba(255, 255, 255, 1)'} textcolor={'rgba(0, 0, 0, 1)'} colorIcon={'rgba(249, 249, 249, 1)'} />}
                userName={currentUser.name} />}
            />
            <Route
              exact
              path='/signin'
              element={<Login onLogin={(formValue) => handleLogin(formValue)} buttonName={'Войти'} />}
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