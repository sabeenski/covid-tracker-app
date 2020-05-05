import React from 'react';
import CompleteRegistration from '../../components/CompleteRegistration';
import ActionButton from '../../components/ActionButton';

function CompleteRegistrationView() {
  return (
    <section id='complete-registration'>
      <CompleteRegistration />
      <ActionButton text='Complete Registration' />
    </section>
  );
}

export default CompleteRegistrationView;
