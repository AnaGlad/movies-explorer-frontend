import React from 'react';
import './Profile.css';



function Profile({ header, name
}) {
  return (
    <>{header}
      <section className='profile'>
        <h1 className='profile__welcome'>Привет,{name}!</h1>
        <div className='profile__container'>
          <div className='profile__box'>
          <h2 className='profile__box-name'>Имя</h2>
          <label className='profile__box-label'>
            <input
              type='text'
              name='name'
              // value={name || ''}
              // onChange={handleNameChange}
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
              // value={description || ''}
              // onChange={handleDescriptionChange}
              className='profile__box-value'
              placeholder='E-mail'
              minLength='2'
              maxLength='200'
              required
            />
            {/* <span className='popup__form-text-error popup__form-text-error_type_occupation'></span> */}
          </label>
          </div>
        </div>
        <button className='profile__edit' type='button'>Редактировать</button>
        <button className='profile__exit' type='button'>Выйти из аккаунта</button>

      </section>
    </>
  );
}

export default Profile;