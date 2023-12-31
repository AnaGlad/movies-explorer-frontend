import React, { useState } from 'react';
import './Profile.css';
import { useNavigate } from 'react-router-dom';




function Profile({ header, name
}) {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);
  return (
    <>{header}
      <main className='profile'>
        <h1 className='profile__welcome'>Привет, {name}!</h1>
        <form className='profile__container'>
          <div className='profile__box'>
            <h2 className='profile__box-name'>Имя</h2>
            <label className='profile__box-label'>
              <input
                type='text'
                name='name'
                className='profile__box-value'
                placeholder='Имя'
                minLength='2'
                maxLength='40'
                required
              />
              {/* <span className='popup__form-text-error popup__form-text-error_type_name'></span> */}
            </label>
          </div>
          <div className='profile__box'>
            <h2 className='profile__box-name'>E-mail</h2>
            <label className='profile__box-label'>
              <input
                type='text'
                name='email'
                className='profile__box-value'
                placeholder='E-mail'
                minLength='2'
                maxLength='200'
                required
              />
              {/* <span className='popup__form-text-error popup__form-text-error_type_occupation'></span> */}
            </label>
          </div>
          <div className={`${isActive ? 'profile__buttons_hide' : 'profile__buttons'}`}>
            <button className='profile__button-edit' type='button' onClick={() => setIsActive(true)}>Редактировать</button>
            <button className='profile__button-exit' type='button' onClick={() => navigate('/')}>Выйти из аккаунта</button>
          </div>
          <button className={`profile__button ${isActive ? 'profile__button-save' : 'profile__button_hide'}`} type='submit'>Сохранить</button>
        </form>
      </main>
    </>
  );
}

export default Profile;