import React from 'react';
import './style.scss';
import ArrowRight from '../../assets/images/arrow-btnSheet.svg';

function TextListItem({ text }) {
  return (
    <div className='wrap'>
      <div className='flex jcsb ci text-list-item'>
        <div className='icon-text flex ci'>
          <div className='shape'></div>
          <p>{text}</p>
        </div>
        <div className='arr'>
          <img src={ArrowRight} alt='read more' />
        </div>
      </div>
    </div>
  );
}

export default TextListItem;
