import React from 'react';
import SecondaryScreenHead from '../../components/SecondaryScreenHead';
import SurveyIcon from '../../assets/images/survey-icon.svg';
import { colors } from '../../utils/colors';
import TextListItem from '../../components/TextListItem';

function SurveyView() {
  return (
    <div>
      <section id='survey'>
        <SecondaryScreenHead
          icon={SurveyIcon}
          color={colors.purple}
          title='Survey'
          subtitle='Help us in filling the form'
        />
        <TextListItem text='Protocols when entering home' />
        <TextListItem text='Protocols when entering home' />
        <TextListItem text='Protocols when entering home' />
        <TextListItem text='Protocols when entering home' />
      </section>
    </div>
  );
}

export default SurveyView;
