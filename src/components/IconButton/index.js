import React from 'react';
import './style.scss';

const IconButton = ({ text, color, icon, onClick, small }) => {
  return (
    <div
      className='icon-btn'
      onClick={onClick && onClick}
      style={{ transform: small ? 'scale(0.8)' : 'scale(1)' }}
    >
      <div className='shape' style={{ backgroundColor: color }}>
        <img className='pos-center' src={icon} alt={`${text} icon`} />
      </div>
      <p>{text}</p>
    </div>
  );
};

export default IconButton;
