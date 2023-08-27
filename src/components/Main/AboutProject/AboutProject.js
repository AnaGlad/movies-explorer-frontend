import React from 'react';
import './AboutProject.css';
import blackLine from '../../../images/blackLine.svg'



function AboutProject({
}) {
  return (
    <section className='about-project'>
      <h2 className='about-project__title'>О проекте</h2>
      <div className='line'><img src={blackLine} alt='черная линия'></img></div>
      <div className='about-project__info'>
        <div className='about-project__info-diplom'>
          <p className='about-project__heading'>Дипломный проект включал 5 этапов</p>
          <p className='about-project__text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className='about-project__info-time'>
          <p className='about-project__heading'>На выполнение диплома ушло 5 недель</p>
          <p className='about-project__text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
        <div className='about-project__timeline'>
          <div className='about-project__timeline-green'>1 неделя</div>
          <div className='about-project__timeline-grey'>4 недели</div>
          <div className='about-project__timeline-back'>Back-end</div>
          <div className='about-project__timeline-front'>Front-end</div>
      </div>

    </section>

  );
}

export default AboutProject;