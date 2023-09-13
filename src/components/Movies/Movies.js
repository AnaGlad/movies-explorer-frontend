import React from 'react';
import './Movies.css';
import SearchForm from '../Movies/SearchForm/SearchForm'
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList'



function Movies({ header, footer
}) {
  return (
    <>
      {header}
      <main className='movies'>
        <SearchForm />
        <MoviesCardList isSavedFilmsPage={false} />
        <button className='movies__more-button' type='button'>Ещё</button>
      </main>
      {footer}
    </>
  );
}

export default Movies;