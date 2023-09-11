import React from 'react';
import './Movies.css';
import SearchForm from '../Movies/SearchForm/SearchForm'
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList'



function Movies({ header,footer,isSavedFilmsPage
}) {
  return (
    <>
    { header }
    <section className='movies'>
      <SearchForm />
      <MoviesCardList isSavedFilmsPage={isSavedFilmsPage} />
      <button className='movies__more-button' type='button'>Ещё</button>
    </section>
    { footer }
    </>
  );
}

export default Movies;