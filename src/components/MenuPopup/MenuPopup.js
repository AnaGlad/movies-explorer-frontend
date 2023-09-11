import React, { useState } from 'react';
import './MenuPopup.css';
import Navigation from '../Navigation/Navigation';


function MenuPopup({ isOpen, setIsOpen }) {

  return (
    <>
      <div className={`menupopup ${isOpen ? 'menupopup_opened' : ''}`}>
      <div className='menupopup__container'>
      <button
          className='menupopup__close-button hover'
          type='button'
          title='Close'
          onClick={()=>setIsOpen(false)}
        ></button>
      <Navigation isPopup={true} children={
        <li><a href='/' className='header__link header__movie'>
            Главная
          </a></li>}/>
      </div>
    </div>
    </>
  );
}

export default MenuPopup;