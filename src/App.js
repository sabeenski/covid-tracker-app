import React from 'react';
import { Switch, Route } from 'react-router';
import OnboardingView from './views/Onboarding';
import CompleteRegistrationView from './views/CompleteRegistration';
import HomeScreenView from './views/HomeScreen';
import SurveyView from './views/Survey';
import ReportView from './views/Report';
import NoticeView from './views/Notice';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={OnboardingView} />
      <Route
        exact
        path='/completeRegistration'
        component={CompleteRegistrationView}
      />
      <Route exact path='/home' component={HomeScreenView} />
      <Route exact path='/survey' component={SurveyView} />
      <Route exact path='/report' component={ReportView} />
      <Route exact path='/notice' component={NoticeView} />
    </Switch>
  );
}

export default App;
