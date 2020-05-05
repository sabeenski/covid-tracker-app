import React from 'react';

function ActionButton({ text, onClick }) {
  return (
    <div className='login-button-component' onClick={onClick && onClick}>
      <div className='login-btn'>{text}</div>
    </div>
  );
}

export default ActionButton;
