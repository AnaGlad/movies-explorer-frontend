import React from 'react';
import './Register.css';
import headerLogo from '../../images/headerLogo.svg';
import { Link, useNavigate } from 'react-router-dom';


function Register({ buttonName
}) {
  const navigate = useNavigate();

  return (
    <>
      <section className='register'>
        <div className='register__welcome'>
          <Link to='/'><img className='login__header-logo' src={headerLogo} alt='Логотип Улыбочка' /></Link>
          <h1 className='register__title'>Добро пожаловать!</h1>
          <form className='register__form'>
            <label className='register__label'>Имя
              <input
                type='name'
                name='name'
                className='register__form-text register__form-text_type_name'
                placeholder='Имя'
                required
              />
            </label>
            <label className='register__label'>E-mail
              <input
                type='email'
                name='email'
                className='register__form-text register__form-text_type_email'
                placeholder='E-mail'
                required
              />
            </label>
            <label className='register__label'>Пароль
              <input
                type='password'
                name='password'
                className='register__form-text register__form-text_type_password'
                placeholder='Пароль'
                required
              />
            </label>
            <span className='register__validation'>Что-то пошло не так</span>
            <button className='register__form-save-button' type='submit'>
              {buttonName}
            </button>
          </form>
          <Link to='/signin' className='register__link'>
            Уже зарегистрированы? <span className='register__span'>Войти</span>
          </Link>
        </div>
      </section>
    </>
  );
}

export default Register;