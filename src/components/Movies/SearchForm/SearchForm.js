import React from 'react';
import './SearchForm.css';
import searchIcon from '../../../images/searchIcon.svg'
import findIcon from '../../../images/findIcon.svg'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'


function SearchForm({
}) {
  return (
    <>
      <div className='movies__search-container'>
        <img className='movies__search' src={searchIcon} alt='Иконка поиска' />
        <label className='movies__search-label'>
          <input
            type='text'
            name='movie'
            // value={name || ''}
            // onChange={handleNameChange}
            className='movies__search-input'
            placeholder='Фильм'
            minLength='2'
            maxLength='40'
          // required
          />
          {/* <span className='popup__form-text-error popup__form-text-error_type_name'></span> */}
        </label>
        <button className='movies__search-find' type='button'><img className='movies__search-find-button' src={findIcon} alt='Стрелочка поиска' /></button>
      </div>
      <FilterCheckbox />
      </>
  );
}

export default SearchForm;