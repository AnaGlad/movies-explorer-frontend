import React from 'react';
import './Portfolio.css';
import arrow from '../../../images/arrow.svg'

function Portfolio({
}) {
  return (
    <section className='portfolio'>
      <h3 className='portfolio__heading'>Портфолио</h3>
      <ul className='portfolio__link-list'>
        <li className='portfolio__link'>
          <a href='https://anaglad.github.io/how-to-learn/' className='portfolio__link-name' target='_blank' rel="noreferrer">Статичный сайт
            <img
              className='portfolio__link-arrow'
              src={arrow}
              alt='Стрела'
            />
          </a>
        </li>
        <li className='portfolio__link'>
          <a href='https://anaglad.github.io/russian-travel/' className='portfolio__link-name' target='_blank' rel='noreferrer'>Адаптивный сайт
            <img
              className='portfolio__link-arrow'
              src={arrow}
              alt='Стрела'
            />
          </a>
        </li>
        <li className='portfolio__link'>
          <a href='https://avp.nomoreparties.co' className='portfolio__link-name' target='_blank' rel='noreferrer'>Одностраничное приложение
            <img
              className='portfolio__link-arrow'
              src={arrow}
              alt='Стрела'
            />
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;