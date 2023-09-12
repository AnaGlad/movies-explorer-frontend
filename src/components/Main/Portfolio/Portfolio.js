import React from 'react';
import './Portfolio.css';
import arrow from '../../../images/arrow.svg'

function Portfolio({
}) {
  return (
    <>
      <h3 className='portfolio__heading'>Портфолио</h3>
      <ul className='portfolio__link-list'>
        <li className='portfolio__link'>
          <div className='portfolio__link-name'>Статичный сайт</div>
          <a href='https://anaglad.github.io/russian-travel/' className='portfolio__link-arrow' target='_blank' rel="noreferrer"><img
            className='about-me__arrow'
            src={arrow}
            alt='Стрела'
          /></a>
        </li>
        <li className='portfolio__link'>
          <div className='portfolio__link-name'>Адаптивный сайт</div>
          <a href='https://anaglad.github.io/russian-travel/' className='portfolio__link-arrow' target='_blank' rel='noreferrer'><img
            className='about-me__arrow'
            src={arrow}
            alt='Стрела'
          /></a>
        </li>
        <li className='portfolio__link'>
          <div className='portfolio__link-name'>Одностраничное приложение</div>
          <a href='https://avp.nomoreparties.co' className='portfolio__link-arrow' target='_blank' rel='noreferrer'><img
            className='about-me__arrow'
            src={arrow}
            alt='Стрела'
          /></a>
        </li>
      </ul>
    </>
  );
}

export default Portfolio;