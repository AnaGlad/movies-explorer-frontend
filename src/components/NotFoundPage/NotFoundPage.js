import React from 'react';
import './NotFoundPage.css';


function NotFoundPage({buttonName
})
{

  return (
    <>
      <section className='default__page'>
        <h1 className='default__page-title'>404</h1>
        <p className='default__page-text'>Страница не найдена</p>
        <a href='/' className='default__page-link'>Назад</a>
      </section>
    </>
  );
}

export default NotFoundPage;