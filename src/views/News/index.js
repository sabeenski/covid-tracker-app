import React from 'react';
import SecondaryScreenHead from '../../components/SecondaryScreenHead';
import NewsIcon from '../../assets/images/news.svg';
import { colors } from '../../utils/colors';
import NewsItem from './NewsItem';
import staticImage from '../../assets/images/covid.png';
import eImage from '../../assets/images/e-kantipur.svg';

function NewsView() {
  return (
    <section id='news'>
      <SecondaryScreenHead
        icon={NewsIcon}
        color={colors.orange}
        title='News'
        subtitle='Recent news'
      />
      <div className='wrap'>
        <NewsItem
          source='Kantipur'
          time='3 days ago'
          title='lorem lorem lorem loremmer lorem lorem lorem loremmer'
          newsImage={staticImage}
          sourceImage={eImage}
        />
        <NewsItem
          source='Kantipur'
          time='3 days ago'
          title='lorem lorem lorem loremmer lorem lorem lorem loremmer'
          newsImage={staticImage}
          sourceImage={eImage}
        />
      </div>
    </section>
  );
}

export default NewsView;
