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
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className='root'>
      <div className='page'>
        <Routes>
          <Route
            exact
            path='/'
            element={<Main header={<Header textcolor={'rgba(255, 255, 255, 1)'}/>}
              footer={<Footer />} />}
          />
          <Route
            exact
            path='/movies'
            element={<Movies header={<Header color={'rgba(255, 255, 255, 1)'} textcolor={'rgba(0, 0, 0, 1)'} colorIcon={'rgba(249, 249, 249, 1)'} />} footer={<Footer />} />}
          />
          <Route
            exact
            path='/saved-movies'
            element={<SavedMovies header={<Header color={'rgba(255, 255, 255, 1)'} textcolor={'rgba(0, 0, 0, 1)'} colorIcon={'rgba(249, 249, 249, 1)'} />} footer={<Footer />} />}
          />
          <Route
            exact
            path='/profile'
            element={<Profile header={<Header color={'rgba(255, 255, 255, 1)'} textcolor={'rgba(0, 0, 0, 1)'} colorIcon={'rgba(249, 249, 249, 1)'}/>} name={'Настя'} />}
          />
          <Route
            exact
            path='/signin'
            element={<Login buttonName={'Войти'} />}
          />
          <Route
            exact
            path='/signup'
            element={<Register buttonName={'Зарегистрироваться'}  />}
          />
          <Route
            path='*'
            element={<NotFoundPage />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;