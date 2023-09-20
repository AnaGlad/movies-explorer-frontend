import React, { useState } from 'react';
import './Profile.css';
import { useNavigate } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';


function Profile({ header,onUpdateUser, userName, setIsLoggedIn
}) {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const currentUser = React.useContext(CurrentUserContext);

  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);

  function signOut() {
    localStorage.removeItem('token');
    setIsLoggedIn(false)
    navigate('/');
  }

  React.useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser]);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
    // Передаём значения управляемых компонентов во внешний обработчик
    onUpdateUser({
      name, email
    });
  }

  return (
    <>{header}
      <main className='profile'>
        <h1 className='profile__welcome'>Привет, {userName}!</h1>
        <form className='profile__container' onSubmit={handleSubmit}>
          <div className='profile__box'>
            <h2 className='profile__box-name'>Имя</h2>
            <label className='profile__box-label'>
              <input
                type='text'
                name='name'
                value={name || ''}
                onChange={handleNameChange}
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
                value={email || ''}
                onChange={handleEmailChange}
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
            <button className='profile__button-exit' type='button' onClick={() => signOut()}>Выйти из аккаунта</button>
          </div>
          <button className={`profile__button ${isActive ? 'profile__button-save' : 'profile__button_hide'}`} onClick={() => setIsActive(false)} type='submit'>Сохранить</button>
        </form>
      </main>
    </>
  );
}

export default Profile;