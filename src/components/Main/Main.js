import React from 'react';
import './Main.css';
import Promo from './Promo/Promo';
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';
import AboutMe from './AboutMe/AboutMe';



function Main({header,footer
}) {
  // const currentUser = React.useContext(CurrentUserContext);
  return (
    <>{header}
      <main>
        {/* <section className='landing'> */}
          <Promo/>
          <AboutProject/>
          <Techs/>
          <AboutMe/>


          {/* <div
            className='profile__avatar'></div> */}
            {/* </section> */}
      </main>
      {footer}
    </>
  );
}

export default Main;
