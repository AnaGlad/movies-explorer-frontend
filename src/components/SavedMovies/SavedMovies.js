import React, { useState } from 'react';
import './SavedMovies.css';
import SearchForm from '../Movies/SearchForm/SearchForm'
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList'



function SavedMovies({ header, footer, savedMovies, handleDeleteMovie
}) {
  const [filterSavedMovies, setFilterSavedMovies] = useState('')
  const [isShortFilm, setIsShortFilm] = useState(false)

  function handleSearchSavedMovies(e, filterSavedMovies, isShortFilm) {
    e?.preventDefault();
    setFilterSavedMovies(filterSavedMovies ? filterSavedMovies : '')
    setIsShortFilm(isShortFilm ? isShortFilm : false)
  }

  return (
    <>
      {header}
      <main className='movies'>
        <SearchForm searchStringLastSearch={''} searchMovies={handleSearchSavedMovies} movies={savedMovies} />
        <MoviesCardList movies={savedMovies.filter((item) => ((item.nameRU.toLowerCase().includes(filterSavedMovies.toLowerCase())) ||
          (item.nameEN.toLowerCase().includes(filterSavedMovies.toLowerCase()))) && (!isShortFilm || item.duration <= 40))} isSavedFilmsPage={true} handleDeleteMovie={handleDeleteMovie} />
        {/* <button className='movies__more-button' type='button'>Ещё</button> */}
      </main>
      {footer}
    </>
  );
}

export default SavedMovies;