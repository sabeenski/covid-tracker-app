import React from 'react';
import './style.scss';
import arrowIcon from '../../assets/images/mdi_arrow_back.svg';
import IconButton from '../IconButton';
import { withRouter } from 'react-router';

const SecondaryScreenNav = ({ history }) => {
  return (
    <div className='sec-screen-nav'>
      <img
        src={arrowIcon}
        alt='go back button'
        onClick={() => history.push('/home')}
      />
    </div>
  );
};

function SecondaryScreenHead({ icon, color, title, subtitle, history }) {
  return (
    <div className='sec-screen-head'>
      <div className='gap x2'></div>
      <div className='wrap'>
        <SecondaryScreenNav history={history} />
        <div className='gap'>
          <header className='flex ci'>
            <IconButton icon={icon} color={color} small />
            <div className='desc'>
              <p className='title'>{title}</p>
              <div className='sub-title'>{subtitle}</div>
            </div>
          </header>
        </div>
      </div>
      <div className='gap x2'></div>
    </div>
  );
}

export default withRouter(SecondaryScreenHead);
