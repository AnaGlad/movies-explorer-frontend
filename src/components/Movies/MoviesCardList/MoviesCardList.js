import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard'
import pic1 from '../../../images/picture1.png'
import pic2 from '../../../images/picture2.png'
import pic3 from '../../../images/picture3.png'
import pic4 from '../../../images/picture4.png'
import pic5 from '../../../images/picture5.png'
import pic6 from '../../../images/picture6.png'
import pic7 from '../../../images/picture7.png'
import pic8 from '../../../images/picture8.png'
import pic9 from '../../../images/picture9.png'
import pic10 from '../../../images/picture10.png'
import pic11 from '../../../images/picture11.png'
import pic12 from '../../../images/picture12.png'
import Preloader from '../Preloader/Preloader'

function MoviesCardList({ isSavedFilmsPage
}) {
  return (
    <>
      {/* <Preloader/> */}
      <ul className='movies__card-list'>
        <MoviesCard isSavedFilmsPage={isSavedFilmsPage} picture={pic1} />
        <MoviesCard isSavedFilmsPage={isSavedFilmsPage} picture={pic2} />
        <MoviesCard isSavedFilmsPage={isSavedFilmsPage} picture={pic3} />
        <MoviesCard isSavedFilmsPage={isSavedFilmsPage} picture={pic4} />
        <MoviesCard isSavedFilmsPage={isSavedFilmsPage} picture={pic5} />
        <MoviesCard isSavedFilmsPage={isSavedFilmsPage} picture={pic6} />
        <MoviesCard isSavedFilmsPage={isSavedFilmsPage} picture={pic7} />
        <MoviesCard isSavedFilmsPage={isSavedFilmsPage} picture={pic8} />
        <MoviesCard isSavedFilmsPage={isSavedFilmsPage} picture={pic9} />
        <MoviesCard isSavedFilmsPage={isSavedFilmsPage} picture={pic10} />
        <MoviesCard isSavedFilmsPage={isSavedFilmsPage} picture={pic11} />
        <MoviesCard isSavedFilmsPage={isSavedFilmsPage} picture={pic12} />
      </ul>

    </>
  );
}

export default MoviesCardList;