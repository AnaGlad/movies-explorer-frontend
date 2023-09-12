import React, { useState } from 'react';
import headerLogo from '../../images/headerLogo.svg';
import burgerMenu from '../../images/burgerMenu.svg';
import Navigation from '../Navigation/Navigation';

import './Header.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import MenuPopup from '../MenuPopup/MenuPopup';


function Header({ color, textcolor, colorIcon }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  function signOut() {
    localStorage.removeItem('token');
    navigate('signin');
  }
  return (
    <header className='header' style={{ backgroundColor: color }}>
      <Link to='/'><img className='header__logo' src={headerLogo} alt='Логотип Улыбочка' /></Link>
      <div className='header__container'>
        {((location.pathname === '/') || (location.pathname === '/movies') || (location.pathname === '/saved-movies') || (location.pathname === '/profile')) && (
          <>
            <div className='header__menu-burger'
              onClick={() => setIsOpen(true)}>
              <img className='header__menu-burger_img' src={burgerMenu} alt='Бургер Меню' />
            </div>
            <Navigation textColor={textcolor} colorIcon={colorIcon} />
            <MenuPopup isOpen={isOpen} setIsOpen={setIsOpen} />
          </>
        )}
      </div>
    </header >
  );
}

export default Header;
