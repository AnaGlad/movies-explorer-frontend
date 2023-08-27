import React from 'react';
import headerLogo from '../../images/headerLogo.svg';
import iconMan from '../../images/icon__COLOR_icon-main.svg';

import './Header.css';
// import { Link, useNavigate, useLocation } from 'react-router-dom';

function Header({ userData }) {
  // const navigate = useNavigate();
  // const location = useLocation();

  // function signOut() {
    // localStorage.removeItem('token');
    // navigate('signin');
  // }
  return (
    <header className='header'>
      <img className='header__logo' src={headerLogo} alt='Логотип Улыбочка' />
      <nav className='header__nav'>
        <div className='header__movies'>
          <a href='' className='header__link header__movie'>
            Фильмы
          </a>
          <a href='' className='header__link header__movie'>
            Сохранённые фильмы
          </a>
        </div>
        {/* <div className='header__profile'> */}
          <a href='' className='header__profile header__link'>
            <span className='header__profile-link'>Аккаунт</span>
            <img className='header__image' src={iconMan} alt='Профиль' />
          </a>
        {/* </div> */}
      </nav>
    </header>
  );
}

export default Header;
