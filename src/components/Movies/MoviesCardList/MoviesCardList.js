import React, { useState, useEffect } from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard'
import Preloader from '../Preloader/Preloader'

function MoviesCardList({ isActivePreloader, movies, isSavedFilmsPage, searchMoviesMessage, handleSaveMovie, handleDeleteMovie
}) {
  const [showFilmCount, setShowFilmCount] = useState((window.innerWidth > 899) ? 12 : ((window.innerWidth > 600) ? 8 : 5));

  useEffect(() => {
    setShowFilmCount((window.innerWidth > 899) ? 12 : ((window.innerWidth > 600) ? 8 : 5))
  }, [isActivePreloader]);

  function changeFilmCount() {
    setShowFilmCount(showFilmCount + ((window.innerWidth > 899) ? 3 : 2));
  }

  return (
    <>
      {isActivePreloader ? <Preloader /> : (movies?.length > 0 ?
        <ul className='movies__card-list'>
          {movies.slice(0, showFilmCount).map((props) => (
            <MoviesCard
              handleSaveMovie={handleSaveMovie}
              handleDeleteMovie={handleDeleteMovie}
              key={props.id ? props.id : props.movieId}
              movie={props}
              isSavedFilmsPage={isSavedFilmsPage} />
          ))}
        </ul> : <span className='error-message'>{searchMoviesMessage}</span>)
      }
      {movies?.length > showFilmCount ? (<button className='movies__more-button' type='button' onClick={changeFilmCount}>Ещё</button>) : (<></>)}
    </>
  );
}

export default MoviesCardList;