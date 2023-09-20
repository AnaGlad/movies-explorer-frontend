import React, { useState } from 'react';
import './MoviesCard.css';
import saveIcon from '../../../images/saveIcon.svg'
import saveIconActive from '../../../images/saveIconActive.svg'
import deleteFilmIcon from '../../../images/deleteFilmIcon.svg'
import { CurrentUserContext } from '../../../contexts/CurrentUserContext';
import movieApi from '../../../utils/MoviesApi';


function MoviesCard({ movie, isSavedFilmsPage }) {
  const [isSavedFilm, setIsSavedFilm] = useState(true);
  const [movies, setMovies] = useState([]);

  // const currentUser = React.useContext(CurrentUserContext);

  function getTimeFromMins(mins) {
    let hours = Math.trunc(mins / 60);
    let minutes = mins % 60;
    return hours + 'ч' + minutes + 'м';
  };
  // function handleClick() {
  //   onCardClick(card);
  // }

  // function handleLikeClick() {
  //   onCardLike(card);
  // }

  // function handleDeleteClick() {
  //   onCardDelete(card._id);
  // }

  function handleSaveMovie(movie) {
    setIsSavedFilm(!isSavedFilm)
    movieApi
      .changeSaveMovieStatus(movie.id, !isSavedFilm)
      .then((newMovie) => {
        console.log(newMovie);
        const newMovies = movies.map((movie) =>
          movie.id === newMovie.id ? newMovies : movie
        );
        setMovies(newMovies);
      })
      .catch((err) => {
        console.log(err);
      });
  }

return (
  <>
    <li className='movies__card'>
      <div className='movies__card-info'>
        <h2 className='movies__card-name'>{movie.nameRU}</h2>
        <p className='movies__card-duration'>{getTimeFromMins(movie.duration)}</p>
        <button
          className='movies__card-save'
          type='button'
          onClick={() => handleSaveMovie(movie)}
        >
          <img className='movies__card-save-img' src={isSavedFilmsPage ? deleteFilmIcon : (isSavedFilm ? saveIcon : saveIconActive)} alt='Сохранить'></img>
        </button>
      </div>
      <img
        className='movies__card-poster'
        src={"https://api.nomoreparties.co" + movie?.image?.url}
        alt='Постер к фильму'
      />
    </li>
  </>
);
}

export default MoviesCard;