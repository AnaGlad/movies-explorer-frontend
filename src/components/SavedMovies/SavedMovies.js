import React from 'react';
import './SavedMovies.css';
import SearchForm from '../Movies/SearchForm/SearchForm'
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList'



function SavedMovies ({ header, footer
}) {
  return (
    <>
      {header}
      <main className='movies'>
        <SearchForm />
        <MoviesCardList isSavedFilmsPage={true} />
        <button className='movies__more-button' type='button'>Ещё</button>
      </main>
      {footer}
    </>
  );
}

export default SavedMovies;