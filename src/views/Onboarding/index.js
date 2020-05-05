import React from 'react';
import OnboardingSwipeableViews from '../../components/OnboardingSwipeableViews';
import ActionButton from '../../components/ActionButton';

function OnboardingView({ history }) {
  const handleGoogleLogin = () => {
    // Todo: do google login
    console.log('hey');
    history.push('/completeRegistration');
  };
  return (
    <section id='onboarding'>
      <OnboardingSwipeableViews />
      <ActionButton
        text='Login with Google'
        onClick={() => handleGoogleLogin()}
      />
    </section>
  );
}

export default OnboardingView;
