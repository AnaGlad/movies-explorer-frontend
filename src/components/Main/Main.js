import React from 'react';
import './Main.css';
import Promo from './Promo/Promo';
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';




function Main({
}) {
  // const currentUser = React.useContext(CurrentUserContext);
  return (
    <>
      <main>
        {/* <section className='landing'> */}
          <Promo/>
          <AboutProject/>
          <Techs/>
          {/* <div
            className='profile__avatar'></div> */}
            {/* </section> */}
      </main>
      {/* {footer} */}
    </>
  );
}

export default Main;
