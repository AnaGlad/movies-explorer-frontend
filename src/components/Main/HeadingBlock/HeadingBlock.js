import React from 'react';
import './HeadingBlock.css';

function HeadingBlock({title
}) {
  return (
    <div className='headingblock'>
      <h2 className='headingblock__title'>{title}</h2>
    </div>
  );
}

export default HeadingBlock;