import React from 'react';
import OnboardingSwipeableViews from './components/onboardingSwipeableViews';

function App() {
  return (
    <div>
      <OnboardingSwipeableViews />
      <div className='gap x2'></div>

      <div className='login-button-component'>
        <div className='login-btn'>
          <google-img></google-img>
          Login with Google
        </div>
      </div>
    </div>
  );
}

export default App;
