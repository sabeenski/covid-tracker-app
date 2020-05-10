import React from 'react';
import './style.scss';

function ButtonSheet({ visible, onClose, children }) {
  React.useEffect(() => {
    // to avoid the scrolling effect
    if (visible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [visible]);

  const handleClose = () => {
    console.log('onclose', onClose);
    if (onClose) {
      onClose();
    }
  };
  return (
    <React.Fragment>
      {visible && (
        <div className='button-sheet'>
          <div className='overlay' onClick={() => handleClose()}></div>
          <div className='contents'>{children}</div>
        </div>
      )}
    </React.Fragment>
  );
}

export default ButtonSheet;

export const ButtonSheetIconBtn = ({ icon, text, onClick }) => {
  return (
    <div className='button-sheet-btn' onClick={onClick && onClick}>
      <div className='icon-text'>
        <img src={icon} alt={text} />
        <p>{text}</p>
      </div>
      <div className='icon'>
        {/* Displays right arrow, since this is an independent component, we are putting the SVG instead of importing from assets */}
        <svg
          width='8'
          height='12'
          viewBox='0 0 8 12'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M0 10.59L4.58 6L0 1.41L1.41 0L7.41 6L1.41 12L0 10.59Z'
            fill='#4A6572'
          />
        </svg>
      </div>
    </div>
  );
};
