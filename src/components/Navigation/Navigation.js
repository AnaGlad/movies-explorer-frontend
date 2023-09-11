import React from 'react';
import './Navigation.css';
import iconMan from '../../images/icon__COLOR_icon-main.svg';

function Navigation({ textColor, colorIcon, children, isPopup
}) {
  return (
    <>
      <nav className={`header__nav ${isPopup?'navigation__popup':''}`}>
        <ul className='header__movies'>
          {children}
          <li><a href='/movies' className={`header__link header__movie ${(window.location.pathname==='/movies')?'header__movies_active':'' }`  }  style={{ color: textColor }}>
            Фильмы
          </a></li>
        <li><a href='/saved-movies' className={`header__link header__movie ${(window.location.pathname==='/saved-movies')?'header__movies_active':'' }`  } style={{ color: textColor }}>
          Сохранённые фильмы
        </a></li></ul>
      <a href='/profile' className='header__profile header__link'>
        <span className={`header__profile-link  ${(window.location.pathname==='/profile')?'header__profile-link_active':'' }`} style={{ color: textColor }}>Аккаунт </span>
        <img className='header__image' src={iconMan} alt='Профиль' style={{ backgroundColor: colorIcon }} />
      </a>
    </nav >
    </>
  );
}

export default Navigation;