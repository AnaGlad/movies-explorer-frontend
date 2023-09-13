import React, { useState } from 'react';
import './Navigation.css';
import iconMan from '../../images/icon__COLOR_icon-main.svg';

function Navigation({ textColor, colorIcon, children, isPopup, isLogin
}) {
  return (
    <>
      <nav className={`navigation`}>
        <ul className={`navigation__container ${(isLogin) ? '' : 'navigation__container_hidden'} ${(isPopup) ? '' : 'navigation__container_popup'} `}>
          {children}
          <li>
            <a href='/movies' className={`navigation__container-link ${(window.location.pathname === '/movies') ? 'navigation__container-link_active' : ''}`} style={{ color: textColor }}>
              Фильмы
            </a>
          </li>
          <li>
            <a href='/saved-movies' className={`navigation__container-link ${(window.location.pathname === '/saved-movies') ? 'navigation__container-link_active' : ''}`} style={{ color: textColor }}>
              Сохранённые фильмы
            </a>
          </li>
        </ul>
        <a href='/profile' className={`navigation__profile ${(isLogin) ? '' : 'navigation__profile_hidden'} ${(isPopup) ? '' : 'navigation__profile_popup'}`}>
          <span className='navigation__profile-link' style={{ color: textColor }}>Аккаунт </span>
          <img className='navigation__profile-image' src={iconMan} alt='Профиль' style={{ backgroundColor: colorIcon }} />
        </a>
        <div className={`navigation__enter ${isLogin ? 'navigation__enter_hidden' : ''}`}>
          <a href='/signin' className='navigation__enter-register navigation__container-link' style={{ color: textColor }}>Регистрация</a>
          <a href='/signup' className='navigation__enter-login navigation__container-link' >Войти</a>
        </div>
      </nav >
    </>
  );
}

export default Navigation;