import React, { useState } from 'react';
import './MoviesCard.css';
import saveIcon from '../../../images/saveIcon.svg'
import saveIconActive from '../../../images/saveIconActive.svg'
import deleteFilmIcon from '../../../images/deleteFilmIcon.svg'

function MoviesCard({ picture, isSavedFilmsPage }) {
  const [isSavedFilm, setIsSavedFilm] = useState(true);
  return (
    <>
      <li className='movies__card'>
        <div className='movies__card-info'>
          <h2 className='movies__card-name'>33 слова о дизайне</h2>
          <p className='movies__card-duration'>1ч 47м</p>
          <button
            className='movies__card-save'
            type='button'
            onClick={() => setIsSavedFilm(!isSavedFilm)}
          >
            <img className='movies__card-save-img' src={isSavedFilmsPage?deleteFilmIcon:(isSavedFilm ? saveIcon : saveIconActive)} alt='Сохранить'></img>
          </button>
        </div>
        <img
          className='movies__card-poster'
          src={picture}
          alt='Постер к фильму'
        />
      </li>
    </>
  );
}

export default MoviesCard;