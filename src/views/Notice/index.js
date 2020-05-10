import React from 'react';
import SecondaryScreenHead from '../../components/SecondaryScreenHead';
import NoticeIcon from '../../assets/images/bell.svg';
import { colors } from '../../utils/colors';
import TextListItem from '../../components/TextListItem';

function NoticeView() {
  return (
    <div>
      <section id='notice'>
        <SecondaryScreenHead
          icon={NoticeIcon}
          color={colors.blue}
          title='Notices'
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

export default NoticeView;
