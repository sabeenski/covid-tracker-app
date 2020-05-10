import React from 'react';
import Avatar from '../../assets/images/avatar-male 1.svg';
import Menu from '../../assets/images/menu.svg';

export const AppBar = ({ name }) => {
  return (
    <div className='app-bar'>
      <div className='flex jcsb ci'>
        <div className='left flex'>
          <img src={Avatar} alt='guest-avatar' />
          <p>{name}</p>
        </div>
        <div className='right'>
          <img src={Menu} alt='menu' />
        </div>
      </div>
    </div>
  );
};

export const StaySafeText = () => {
  return (
    <div className='stay-safe'>
      <p>
        {' '}
        Stay Home <br />
        Stay Safe
      </p>
    </div>
  );
};
