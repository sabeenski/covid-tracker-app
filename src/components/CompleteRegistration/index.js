import React from 'react';
import detailsImage from '../../assets/images/details.svg';
import arrowIcon from '../../assets/images/arrow.svg';

function CompleteRegistration() {
  return (
    <div className='swipeable-item'>
      <img src={detailsImage} alt='' />
      <div className='gap'></div>
      <h3 className='title'>Few more details</h3>

      <input type='text' placeholder='Phone number' />
      <div className='gap x2'></div>
      <div className='select-field'>
        <select name='gender' placeholder='Select Gender'>
          <option value='Female'>Female</option>
          <option value='Male'>Male</option>
        </select>
        <img className='icon' src={arrowIcon} alt='Select gender' />
      </div>
    </div>
  );
}

export default CompleteRegistration;
