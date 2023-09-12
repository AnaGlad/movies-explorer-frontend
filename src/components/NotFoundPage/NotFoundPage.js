import React from 'react';
import './NotFoundPage.css';
import { useNavigate } from 'react-router-dom';


function NotFoundPage({
}) {
  const navigate = useNavigate();

  return (
    <>
      <section className='default__page'>
        <h1 className='default__page-title'>404</h1>
        <p className='default__page-text'>Страница не найдена</p>
        <button onClick={() => navigate(-1)} className='default__page-link'>Назад</button>
      </section>
    </>
  );
}

export default NotFoundPage;