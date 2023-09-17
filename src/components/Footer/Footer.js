import React from 'react';
import './Footer.css';


function Footer({
}) {
  return (
    <footer className='footer'>
      <h4 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h4>
      <div className='footer__info'>
        <p className='footer__coopyright'>&copy; 2023 </p>
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
    </footer>
  );
}

export default Footer;