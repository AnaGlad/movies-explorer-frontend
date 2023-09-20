import React, { useState } from 'react';
import './SearchForm.css';
import searchIcon from '../../../images/searchIcon.svg'
import findIcon from '../../../images/findIcon.svg'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'


function SearchForm({searchMovies
}) {
  const [formValue, setFormValue] = useState({
    searchString: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const [isShortFilm, setIsShortFilm] = useState(true);


  return (
    <section className='movies__search'>
      <form className='movies__search-form' onSubmit={(e)=>{searchMovies(e,formValue.searchString, isShortFilm)}}>
        <div className='movies__search-container'>
          <img className='movies__search-img' src={searchIcon} alt='Иконка поиска' />
          <label className='movies__search-label'>
            <input
              type='text'
              name='searchString'
              className='movies__search-input'
              placeholder='Фильм'
              minLength='2'
              maxLength='40'
              value={formValue.searchString}
              required
              onChange={handleChange}
            />
            {/* <span className='popup__form-text-error popup__form-text-error_type_name'></span> */}
          </label>
          <button className='movies__search-find' type='submit'><img className='movies__search-find-button' src={findIcon} alt='Стрелочка поиска' /></button>
        </div>
        <FilterCheckbox isShortFilm={isShortFilm} setIsShortFilm={setIsShortFilm}/>
      </form>
    </section>
  );
}

export default SearchForm;