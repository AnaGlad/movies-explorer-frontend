import React, { useState } from 'react';
import './MoviesCard.css';
import saveIcon from '../../../images/saveIcon.svg'
import saveIconActive from '../../../images/saveIconActive.svg'
import deleteFilmIcon from '../../../images/deleteFilmIcon.svg'


// import picture from '../../../images/picture.png'



function MoviesCard({ picture, isSavedFilmsPage }) {
  const [isSavedFilm, setIsSavedFilm] = useState(true);
  return (
    <>
      <div className='movies__card'>
        <div className='movies__card-info'>
          <h2 className='movies__card-name'>33 слова о дизайне</h2>
          <p className='movies__card-duration'>1ч 47м</p>
          {/* {isOwn && ( */}
          <button
            className='movies__card-save'
            type='button'
            onClick={() => setIsSavedFilm(!isSavedFilm)}
          >
            <img className='movies__card-save-img' src={isSavedFilmsPage?deleteFilmIcon:(isSavedFilm ? saveIcon : saveIconActive)} alt='Сохранить'></img>
          </button>
          {/* )} */}
        </div>
        <div
          className='movies__card-poster'
          style={{ backgroundImage: `url(${picture})` }}
        // title={card.name}
        // onClick={handleClick}
        ></div>
      </div>

    </>
  );
}

export default MoviesCard;