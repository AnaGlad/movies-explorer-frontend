import React, { useEffect, useState } from 'react';
import './SearchForm.css';
import searchIcon from '../../../images/searchIcon.svg'
import findIcon from '../../../images/findIcon.svg'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'


function SearchForm({ searchMovies, searchStringLastSearch, isShortFilmLastSearch, movies
}) {
  const [formValue, setFormValue] = useState({
    searchString: searchStringLastSearch,
  });

  const [isShortFilm, setIsShortFilm] = useState(isShortFilmLastSearch);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  useEffect(() => {
    setFormValue({ searchString: searchStringLastSearch })
  },
    [searchStringLastSearch]);

  useEffect(() => {
    console.log('test3');
    console.log(isShortFilmLastSearch);

    setIsShortFilm(isShortFilmLastSearch)
  },
    [isShortFilmLastSearch]);


  function handleClickCheckbox(newValue) {
    console.log("handleClickCheckbox");
    console.log(newValue);
    setIsShortFilm(newValue)
    if (movies?.length > 0) {
      searchMovies(undefined, formValue.searchString, !isShortFilm)
    }
  }

  function handleSubmit(e) {
    if (formValue.searchString.length > 0) {
      searchMovies(e, formValue.searchString, isShortFilm)
    } else {
      alert ('Введите не пустой запрос')
    }
  }

  return (
    <section className='movies__search'>
      <form className='movies__search-form' noValidate onSubmit={(e) => { handleSubmit(e) }}>
        <div className='movies__search-container'>
          <img className='movies__search-img' src={searchIcon} alt='Иконка поиска' />
          <label className='movies__search-label'>
            <input
              type='text'
              name='searchString'
              className='movies__search-input'
              placeholder='Фильм'
              minLength='1'
              maxLength='40'
              value={formValue.searchString}
              required
              onChange={handleChange}
            />
          </label>
          <button className='movies__search-find' type='submit'><img className='movies__search-find-button' src={findIcon} alt='Стрелочка поиска' /></button>
        </div>
        <FilterCheckbox isShortFilm={isShortFilm} handleClickCheckbox={handleClickCheckbox} />
      </form>
    </section>
  );
}

export default SearchForm;