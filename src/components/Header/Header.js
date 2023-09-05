import React from 'react';
import headerLogo from '../../images/headerLogo.svg';
import iconMan from '../../images/icon__COLOR_icon-main.svg';
import burgerMenu from '../../images/burgerMenu.svg';


import './Header.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';


function Header({ userData }) {
  const navigate = useNavigate();
  const location = useLocation();

  function signOut() {
    localStorage.removeItem('token');
    navigate('signin');
  }
  return (
    <header className='header'>
      <img className='header__logo' src={headerLogo} alt='Логотип Улыбочка' />
      <div className='header__container'>
        {((location.pathname ==='/')||(location.pathname ==='/movies')) && ( 
        <>
        <div className='header__menu-burger'>
          <img className='header__menu-burger_img' src={burgerMenu} alt='Бургер Меню'/>
        </div>
        <nav className='header__nav'>
          <ul className='header__movies'>
            <li><a href='' className='header__link header__movie'>
              Фильмы
            </a></li>
            <li><a href='' className='header__link header__movie'>
              Сохранённые фильмы
            </a></li>
          </ul>
          <a href='' className='header__profile header__link'>
            <span className='header__profile-link'>Аккаунт</span>
            <img className='header__image' src={iconMan} alt='Профиль' />
          </a>
        </nav>
        </>
        )}
      </div>
      {/* {location.pathname === '/signup' && ( */}
      {/* <Link to='signin' className='header__link'>
            Войти
          </Link> */}
      {/* )} */}
      {/* {location.pathname === '/signup' && ( */}
      {/* <Link to='/' className='header__link header__exit' onClick={signOut}>
            Выйти
          </Link> */}
      {/* )} */}
    </header >
  );
}

export default Header;
