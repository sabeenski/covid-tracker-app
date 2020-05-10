import React from 'react';
import SecondaryScreenHead from '../../components/SecondaryScreenHead';
import EventIcon from '../../assets/images/calendar.svg';
import staticImage from '../../assets/images/covid.png';
import EventItem from './EventItem';
import { colors } from '../../utils/colors';

function EventView() {
  return (
    <section id='event'>
      <SecondaryScreenHead
        icon={EventIcon}
        color={colors.blue}
        title='Events'
        subtitle='Latest events specially for you'
      />
      <EventItem
        eventImage={staticImage}
        organizer='Social Cafe'
        time='4 days ago'
        title='Musical events to heal the boredom of people by social cafe'
      />
      <EventItem
        eventImage={staticImage}
        organizer='Social Cafe'
        time='4 days ago'
        title='Musical events to heal the boredom of people by social cafe'
      />
    </section>
  );
}

export default EventView;
