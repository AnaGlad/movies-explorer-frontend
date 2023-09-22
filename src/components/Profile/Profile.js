import React, { useState } from 'react';
import './Profile.css';
import { useNavigate } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';


function Profile({ header, onUpdateUser, userName, setIsLoggedIn, updateUserError
}) {
  const [formValue, setFormValue] = useState({
    name: '',
    email: '',
  });
  const currentUser = React.useContext(CurrentUserContext);

  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);

  function signOut() {
    localStorage.removeItem('token');
    setIsLoggedIn(false)
    navigate('/');
  }

  React.useEffect(() => {
    setFormValue({ name: currentUser.name, email: currentUser.email });
  }, [currentUser]);


  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setFormValue({ ...formValue, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
    setIsValid(target.closest("form").checkValidity());
  };


  function handleSubmit(e) {

    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
    // Передаём значения управляемых компонентов во внешний обработчик
    onUpdateUser(
      formValue
    );
  }

  return (
    <>{header}
      <main className='profile'>
        <h1 className='profile__welcome'>Привет, {userName}!</h1>
        <form className='profile__container' onSubmit={handleSubmit} noValidate>
          <div className='profile__box'>
            <h2 className='profile__box-name'>Имя</h2>
            <label className='profile__box-label'>
              <input
                type='text'
                name='name'
                value={formValue.name || ''}
                onChange={handleChange}
                className='profile__box-value'
                placeholder='Имя'
                minLength='1'
                maxLength='40'
                required
              />
            </label>
          </div>
          {(errors?.name) ? <span className='login__form-validation'>{errors.name}</span> : <></>}
          <div className='profile__box'>
            <h2 className='profile__box-name'>E-mail</h2>
            <label className='profile__box-label'>
              <input
                type='email'
                name='email'
                pattern='[^@\s]+@[^@\s]+\.[^@\s]+'
                value={formValue.email || ''}
                onChange={handleChange}
                className='profile__box-value'
                placeholder='E-mail'
                minLength='2'
                maxLength='200'
                required
              />
            </label>
          </div>
          {(errors?.email) ? <span className='login__form-validation'>{errors.email}</span> : <></>}
          {(updateUserError?.length > 0) ? <span className='register__form-validation'>{updateUserError}</span> : <></>}
          <div className={`${isActive ? 'profile__buttons_hide' : 'profile__buttons'}`}>
            <button className={isValid && !(formValue.name === currentUser.name && formValue.email === currentUser.email) ?
              'profile__button-edit' : 'profile__button-edit_hidden'} 
              disabled={!(isValid && !(formValue.name === currentUser.name && formValue.email === currentUser.email))} type='button' onClick={() => setIsActive(true)}>Редактировать</button>
            <button className='profile__button-exit' type='button' onClick={() => signOut()}>Выйти из аккаунта</button>
          </div>
          <button className={`profile__button ${isActive
            ? 'profile__button-save' : 'profile__button_hide'}`} onClick={() => setIsActive(false)} type='submit'>Сохранить</button>
        </form>
      </main>
    </>
  );
}

export default Profile;