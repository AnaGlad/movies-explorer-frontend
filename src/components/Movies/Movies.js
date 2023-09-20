import React from 'react';
import './Movies.css';
import SearchForm from '../Movies/SearchForm/SearchForm'
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList'



function Movies({ isActiveButton,isActivePreloader, movies, header, footer, searchMovies, searchMoviesMessage
}) {
  return (
    <>
      {header}
      <main className='movies'>
        <SearchForm searchMovies={searchMovies}/>
        <MoviesCardList searchMoviesMessage={searchMoviesMessage} isActivePreloader={isActivePreloader}movies={movies}isSavedFilmsPage={false} />
        
      </main>
      {footer}
    </>
  );
}

export default Movies;