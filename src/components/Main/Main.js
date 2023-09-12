import React from 'react';
import './Main.css';
import Promo from './Promo/Promo';
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';
import AboutMe from './AboutMe/AboutMe';



function Main({ header, footer
}) {
  return (
    <>{header}
      <main>
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
      </main>
      {footer}
    </>
  );
}

export default Main;
