import React from 'react';
import SecondaryScreenHead from '../../components/SecondaryScreenHead';
import ReportIcon from '../../assets/images/alert-triangle.svg';
import { colors } from '../../utils/colors';
import TextListItem from '../../components/TextListItem';

function ReportView() {
  return (
    <div>
      <section id='report'>
        <SecondaryScreenHead
          icon={ReportIcon}
          color={colors.orange}
          title='Reports'
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

export default ReportView;
