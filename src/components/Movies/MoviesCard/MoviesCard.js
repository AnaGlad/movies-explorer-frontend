import React from 'react';
import './MoviesCard.css';
import saveIcon from '../../../images/saveIcon.svg'
import saveIconActive from '../../../images/saveIconActive.svg'
import deleteFilmIcon from '../../../images/deleteFilmIcon.svg'



function MoviesCard({ movie, isSavedFilmsPage, handleSaveMovie, handleDeleteMovie }) {

  function getTimeFromMins(mins) {
    let hours = Math.trunc(mins / 60);
    let minutes = mins % 60;
    if (hours === 0) {
      return minutes + 'м'
    } else {
      return hours + 'ч ' + minutes + 'м'
    };
  };

  return (
    <>
      <li className='movies__card'>
        <div className='movies__card-info'>
          <h2 className='movies__card-name'>{movie.nameRU}</h2>
          <p className='movies__card-duration'>{getTimeFromMins(movie.duration)}</p>
          <button
            className='movies__card-save'
            type='button'
            onClick={() => isSavedFilmsPage ? handleDeleteMovie(movie.movieId) : (!movie.isInSavedMovie ? handleSaveMovie(movie) : handleDeleteMovie(movie.id))}
          >
            <img className='movies__card-save-img' src={isSavedFilmsPage ? deleteFilmIcon : (!movie.isInSavedMovie ? saveIcon : saveIconActive)} alt='Сохранить'></img>
          </button>
        </div>
        <a href={movie.trailerLink} className='movies__card-trailer' target='_blank' rel='noreferrer'><img
          className='movies__card-poster'
          src={movie?.image?.url ? "https://api.nomoreparties.co" + movie?.image?.url : movie?.image}
          alt='Постер к фильму'
        /></a>
      </li >
    </>
  );
}

export default MoviesCard;