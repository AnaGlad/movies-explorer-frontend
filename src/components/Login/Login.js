import React, { useState } from 'react';
import './Login.css';
import headerLogo from '../../images/headerLogo.svg';
import { Link, useNavigate } from 'react-router-dom';


function Login({ onLogin, buttonName
}) {
  const [formValue, setFormValue] = useState({
    email: '',
    password: '',
  });
  // const navigate = useNavigate();
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  function handleSubmit(e) {
    e.preventDefault();
    onLogin(formValue);
  }

  return (
    <>
      <main className='login'>
        <div className='login__welcome'>
          <Link to='/'><img className='login__header-logo' src={headerLogo} alt='Логотип Улыбочка' /></Link>
          <h1 className='login__title'>Рады видеть!</h1>
          <form className='login__form' onSubmit={handleSubmit}>
            <label className='login__label'>E-mail
              <input
                type='email'
                name='email'
                value={formValue.email}
                className='login__form-text login__form-text_type_email'
                placeholder='E-mail'
                minLength='2'
                maxLength='30'
                onChange={handleChange}
                required
              />
            </label>
            <label className='login__label'>Пароль
              <input
                type='password'
                name='password'
                value={formValue.password}
                className='login__form-text login__form-text_type_password'
                placeholder='Пароль'
                minLength='2'
                maxLength='30'
                onChange={handleChange}
                required
              />
            </label>
            <button className='login__form-save-button' type='submit'>
              {buttonName}
            </button>
          </form>
          <Link to='/signup' className='login__link'>
            Еще не зарегистрированы? <span className='login__span'>Регистрация</span>
          </Link>
        </div>
      </main>
    </>
  );
}

export default Login;