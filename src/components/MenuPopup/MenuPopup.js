import React, { useState } from 'react';
import './MenuPopup.css';
import Navigation from '../Navigation/Navigation';


function MenuPopup({ isOpen, setIsOpen, isLogin }) {

  return (
    <>
      <div className={`menupopup ${isOpen ? 'menupopup_opened' : ''}`}>
        <div className='menupopup__container'>
          <button
            className='menupopup__close-button'
            type='button'
            title='Close'
            onClick={() => setIsOpen(false)}
          ></button>
          <Navigation isPopup={true} isLogin={isLogin} children={
            <li><a href='/' className={`navigation__container-link ${(window.location.pathname === '/') ? 'navigation__container-link_active' : ''}`}>
              Главная
            </a></li>} />
        </div>
      </div>
    </>
  );
}

export default MenuPopup;