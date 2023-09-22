import React, { useState, useEffect } from 'react';
import './Login.css';
import headerLogo from '../../images/headerLogo.svg';
import { Link, useNavigate } from 'react-router-dom';


function Login({ onLogin, buttonName, loginError
}) {
  const [formValue, setFormValue] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);


  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setFormValue({ ...formValue, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
    setIsValid(target.closest("form").checkValidity());
  };
  // const navigate = useNavigate();

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormValue({
  //     ...formValue,
  //     [name]: value,
  //   });
  //   console.log(name);
  //   setErrors(validate(name, value));
  // };

  // useEffect(() => {
  //   setIsValidForm(validatForm(formValue));
  //   // console.log(errors);
  // }, [formValue]);

  // function validatForm(values) {
  //   let errors = {};
  //   if (!values.email) {
  //     return false
  //   } else if (!/\S+@\S+\.\S+/.test(values.email)) {
  //     return false
  //   }
  //   if (!values.password) {
  //     return false
  //   }
  //   console.log(errors);
  //   return true;
  // };

  // function validate(name, value) {
  //   let errors = {};
  //   if (name === "email") {
  //     if (!value) {
  //       errors.email = 'Введите email';
  //     } else if (!/\S+@\S+\.\S+/.test(value)) {
  //       errors.email = 'Email некорректный';
  //     }
  //   } else {
  //     if (!value) {
  //       errors.password = 'Введите пароль';
  //     }
  //   }

  //   console.log(errors);
  //   return errors;
  // };

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
          <form className='login__form' onSubmit={handleSubmit} noValidate>
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
            {(errors?.email) ? <span className='login__form-validation'>{errors.email}</span> : <></>}
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
            {(errors?.password) ? <span className='login__form-validation'>{errors.password}</span> : <></>}
            {(loginError.length>0) ? <span className='login__form-validation'>{loginError}</span> : <></>}
            <button className={isValid ? 'login__form-save-button' : 'login__form-save-button_hidden'} type='submit' disabled={!isValid}>
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