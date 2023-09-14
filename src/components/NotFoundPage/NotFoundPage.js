import React from 'react';
import './NotFoundPage.css';
import { useNavigate } from 'react-router-dom';


function NotFoundPage({
}) {
  const navigate = useNavigate();

  return (
    <>
      <main className='page__default'>
        <h1 className='page__default-title'>404</h1>
        <p className='page__default-text'>Страница не найдена</p>
        <button onClick={() => navigate(-1)} className='page__default-link' type='button'>Назад</button>
      </main>
    </>
  );
}

export default NotFoundPage;