import React, { useState,useEffect }  from 'react';
import './Register.css';
import headerLogo from '../../images/headerLogo.svg';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../utils/auth';
// import { useFormWithValidation } from '../FormValidation/FormValidation';
import { memo } from 'react';
import validate from '../FormValidation/formValidationRules';

function Register({ buttonName, onLogin
}) {
  const [formValue, setFormValue] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  function handleSubmit(e) {
    if (e) {e.preventDefault();
  setErrors(validate(formValue));}
    auth
      .register(formValue.name, formValue.email, formValue.password)
      .then(() => {
        console.log('Вы успешно зарегистрировались!')
        // navigate('/');
      })
      .then(()=>{
        onLogin(formValue)
      })
      .catch((error) => {
        console.log('Что-то пошло не так! Попробуйте ещё раз.')
        console.log(error);
      });
  }
  // useEffect(() => {
  //   if (Object.keys(errors).length === 0) {
  //     callback();
  //   }
  // }, [errors]);

  return (
    <>
      <main className='register'>
        <div className='register__welcome'>
          <Link to='/'><img className='register__header-logo' src={headerLogo} alt='Логотип Улыбочка' /></Link>
          <h1 className='register__title'>Добро пожаловать!</h1>
          <form className='register__form'  onSubmit={handleSubmit} >
            <label className='register__label'>Имя
              <input
                type='text'
                name='name'
                className='register__form-text register__form-text_type_name'
                placeholder='Имя'
                minLength='2'
                maxLength='30'
                onChange={handleChange}
                value={formValue.name}
                required
              />
            </label>
            <label className='register__label'>E-mail
              <input
                type='email'
                name='email'
                className='register__form-text register__form-text_type_email'
                placeholder='E-mail'
                minLength='2'
                maxLength='30'
                onChange={handleChange}
                value={formValue.email}
                required
              />
            </label>
            <label className='register__label'>Пароль
              <input
                type='password'
                name='password'
                className='register__form-text register__form-text_type_password'
                placeholder='Пароль'
                minLength='2'
                maxLength='30'
                onChange={handleChange}
                value={formValue.password}
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
      </main>
    </>
  );
}

export default Register;