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
    // console.log(isShortFilm);
  },
    [isShortFilmLastSearch]);


  function handleClickCheckbox(newValue) {
    console.log("handleClickCheckbox");//сюда отправка формы при изменении значения checkbox
    console.log(newValue);
    setIsShortFilm(newValue)
    if (movies?.length > 0) {
      // const form = document.querySelector('.movies__search-form')
      searchMovies(undefined, formValue.searchString, !isShortFilm)
      
      // form.submit();
    }
  }

  // const errorMessage = 'Введите ключевое слово'

  return (
    <section className='movies__search'>
      <form className='movies__search-form' noValidate onSubmit={(e) => { searchMovies(e, formValue.searchString, isShortFilm) }}>
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
            {/* <span className='popup__form-text-error popup__form-text-error_type_name'></span> */}
          </label>
          <button className='movies__search-find' type='submit'><img className='movies__search-find-button' src={findIcon} alt='Стрелочка поиска' /></button>
        </div>
        <FilterCheckbox isShortFilm={isShortFilm} handleClickCheckbox={handleClickCheckbox} />
      </form>
    </section>
  );
}

export default SearchForm;