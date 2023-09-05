import React from 'react';
import './AboutMe.css';
import photoMe from '../../../images/photoMe.jpg'
import arrow from '../../../images/arrow.svg'
import HeadingBlock from '../HeadingBlock/HeadingBlock'


function AboutMe({
}) {
  return (
    <section className='about-me'>
     <HeadingBlock title='Студент'/>
      {/* <div className='about-me'> */}
        <div className='about-me__cv'>
          <div className='about-me__text'>
            <h3 className='about-me__name'>Анастасия</h3>
            <p className='about-me__prof'>Фронтенд-разработчик, 31 год</p>
            <p className='about-me__info'>Я родилась и живу в Санкт-Петербурге, закончила факультет МВШУ СПБГПУ. У меня есть муж
              и две дочки. Я люблю читать книги, занимаюсь вокалом и спортом. С 2017 года работаю в компании ООО«НИКОЛЬ». После прохождения курса по веб-разработке, хочу попробовать свои силы в сфере программирования.</p>
          </div>
          <p className='about-me__githublink'>Github</p>
          <img
            className='about-me__photo'
            src={photoMe}
            alt="Фото"
          />
        </div>
      {/* </div> */}
      <h3 className='about-me__portfolio'>Портфолио</h3>
      <ul className='about-me__link-list'>
        <li className='about-me__link'>
          <div className='about-me__link-name'>Статичный сайт</div>
          <a href='' className='about-me__link-arrow' target='_blank'><img
            className='about-me__arrow'
            src={arrow}
            alt="Стрела"
          /></a>
        </li>
        <li className='about-me__link'>
          <div className='about-me__link-name'>Адаптивный сайт</div>
          <a href='' className='about-me__link-arrow' target='_blank'><img
            className='about-me__arrow'
            src={arrow}
            alt="Стрела"
          /></a>
        </li>
        <li className='about-me__link'>
          <div className='about-me__link-name'>Одностраничное приложение</div>
          <a href='' className='about-me__link-arrow' target='_blank'><img
            className='about-me__arrow'
            src={arrow}
            alt="Стрела"
          /></a>
        </li>
      </ul>
    </section>

  );
}

export default AboutMe;