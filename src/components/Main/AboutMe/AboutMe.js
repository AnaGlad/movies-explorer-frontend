import React from 'react';
import './AboutMe.css';
import photoMe from '../../../images/photoMe.jpg'
import HeadingBlock from '../HeadingBlock/HeadingBlock'
import Portfolio from '../Portfolio/Portfolio'


function AboutMe({
}) {
  return (
    <section className='about-me'>
      <HeadingBlock title='Студент' />
      <div className='about-me__cv'>
        <div className='about-me__text'>
          <h3 className='about-me__name'>Анастасия</h3>
          <p className='about-me__prof'>Фронтенд-разработчик, 31 год</p>
          <p className='about-me__info'>Я родилась и живу в Санкт-Петербурге, закончила факультет МВШУ СПБГПУ. У меня есть муж
            и две дочки. Я люблю читать книги, занимаюсь вокалом и спортом. С 2017 года работаю в компании ООО«НИКОЛЬ». После прохождения курса по веб-разработке, хочу попробовать свои силы в сфере программирования.</p>
        </div>
        <a href='https://github.com/AnaGlad' className='about-me__githublink' target='_blank' rel='noreferrer'>Github</a>
        <img
          className='about-me__photo'
          src={photoMe}
          alt="Фото"
        />
      </div>
      <Portfolio/>
    </section>
  );
}

export default AboutMe;