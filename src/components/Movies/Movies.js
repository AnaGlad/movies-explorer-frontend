import React from 'react';
import './Movies.css';
import SearchForm from '../Movies/SearchForm/SearchForm'
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList'



function Movies({ isActivePreloader, movies, header, footer, searchMovies, searchMoviesMessage, 
  searchString, isShortFilm, handleSaveMovie, handleDeleteMovie
}) {
  return (
    <>
      {header}
      <main className='movies'>
        <SearchForm searchMovies={searchMovies} movies={movies} searchStringLastSearch={searchString} isShortFilmLastSearch={isShortFilm}/>
        <MoviesCardList searchMoviesMessage={searchMoviesMessage} isActivePreloader={isActivePreloader} movies={movies} 
        isSavedFilmsPage={false} handleSaveMovie={handleSaveMovie} handleDeleteMovie={handleDeleteMovie}/>
      </main>
      {footer}
    </>
  );
}

export default Movies;