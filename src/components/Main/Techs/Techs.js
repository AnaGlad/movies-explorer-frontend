import React from 'react';
import './Techs.css';
import HeadingBlock from '../HeadingBlock/HeadingBlock'


function Techs({
}) {
  return (
    <section className='techs'>
      <HeadingBlock title='Технологии' />
      <h3 className='techs__title'>7 технологий</h3>
      <p className='techs__text'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      <ul className='techs__blockList'>
        <li className='techs__block'>HTML</li>
        <li className='techs__block'>CSS</li>
        <li className='techs__block'>JS</li>
        <li className='techs__block'>React</li>
        <li className='techs__block'>Git</li>
        <li className='techs__block'>Express.js</li>
        <li className='techs__block'>mongoDB</li>
      </ul>
    </section>

  );
}

export default Techs;