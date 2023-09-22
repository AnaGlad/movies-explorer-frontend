import React, { useState, useEffect } from 'react';
import './FilterCheckbox.css';
import smallTumb from '../../../images/smallTumb.svg'
import smallTumbNotActive from '../../../images/smallTumbNotActive.svg'


function FilterCheckbox({ isShortFilm, setIsShortFilm, handleClickCheckbox
}) {
  const [isShortFilmImage, setIsShortFilmImage] = useState(isShortFilm);

  useEffect(() => {
    console.log('testisShortFilm');
    console.log(isShortFilm);

    // console.log(isShortFilm);
  },
    [isShortFilm]);

  return (
    <div className='filterCheckbox'>
      <button className='filterCheckbox__button' type='button' onClick={() => handleClickCheckbox(!isShortFilm)}>
        <img className='filterCheckbox__button-icon filterCheckbox__button-icon_active'
          src={isShortFilm ? smallTumb : smallTumbNotActive} alt='Кнопка выбора короткометражных фильмов' />
      </button>
          {/* <span>{isShortFilmImage}</span> */}
      <span className='filterCheckbox__span'>Короткометражки</span>
    </div>
  );
}

export default FilterCheckbox;