import React, { useState } from 'react';
import './FilterCheckbox.css';
import smallTumb from '../../../images/smallTumb.svg'
import smallTumbNotActive from '../../../images/smallTumbNotActive.svg'


function FilterCheckbox({isShortFilm, setIsShortFilm
}) {

  return (
    <div className='filterCheckbox'>
      <button className='filterCheckbox__button' type='button' onClick={() => setIsShortFilm(!isShortFilm)}>
        <img className='filterCheckbox__button-icon filterCheckbox__button-icon_active' src={isShortFilm ? smallTumb : smallTumbNotActive} alt='Кнопка выбора короткометражных фильмов' />
      </button>
      <span className='filterCheckbox__span'>Короткометражки</span>
    </div>
  );
}

export default FilterCheckbox;