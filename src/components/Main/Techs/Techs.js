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
      <div className='techs__blockList'>
        <div className='techs__block'>HTML</div>
        <div className='techs__block'>CSS</div>
        <div className='techs__block'>JS</div>
        <div className='techs__block'>React</div>
        <div className='techs__block'>Git</div>
        <div className='techs__block'>Express.js</div>
        <div className='techs__block'>mongoDB</div>
      </div>
    </section>

  );
}

export default Techs;