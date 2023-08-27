import React from 'react';
import './Promo.css';
import landingLogo from '../../../images/landingLogo.svg'
import NavTab from '../NavTab/NavTab';


function Promo({
}) {
  // const currentUser = React.useContext(CurrentUserContext);
  return (
    <section className='promo'>
      <div className='promo-info'>
      <h1 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h1>
      <p className='promo__text'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
      <NavTab/>
      </div>
      <img
        className="promo__main-illustration"
        src={landingLogo}
        alt="Планета"
      />
      
    </section>

  );
}

export default Promo;