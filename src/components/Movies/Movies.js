import React from 'react';
import './Movies.css';
import FilterCheckbox from '../Movies/FilterCheckbox/FilterCheckbox'



function Movies({
}) {
  return (
    <section className='movies'>
     <div className='movies'></div>
      <FilterCheckbox/>
      
    </section>

  );
}

export default Movies;