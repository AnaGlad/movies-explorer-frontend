import React from 'react';
import './Footer.css';


function Footer({
}) {
  return (
    <section className='footer'>
      <h4 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h4>
      <div className='footer__info'>
        <div className='footer__coopyright'>&copy; 2023 </div>
        <nav className='footer__nav'>
          <ul className='footer__links'>
            <li className='footer__links-item'>
              <a href='https://practicum.yandex.ru/' className='footer__link' target='_blank' rel='noreferrer'>Яндекс.Практикум</a>
            </li>
            <li className='footer__links-item'>
              <a href='https://github.com/' className='footer__link' target='_blank' rel='noreferrer'>Github</a>
            </li>
          </ul>
        </nav>
      </div>
    </section>

  );
}

export default Footer;