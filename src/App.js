import React from 'react';
import { Switch, Route } from 'react-router';
import OnboardingView from './views/Onboarding';
import CompleteRegistrationView from './views/CompleteRegistration';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={OnboardingView} />
      <Route
        exact
        path='/completeRegistration'
        component={CompleteRegistrationView}
      />
    </Switch>
  );
}

export default App;
