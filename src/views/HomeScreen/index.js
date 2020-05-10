import React from 'react';
import { AppBar, StaySafeText } from './components';
import IconButton from '../../components/IconButton';
import ContactIcon from '../../assets/images/contact.svg';
import NewsIcon from '../../assets/images/news.svg';
import ChatIcon from '../../assets/images/chat.svg';
import MoreIcon from '../../assets/images/Group.svg';
import KnowMoreImage from '../../assets/images/know_more.png';
import NepalFlag from '../../assets/images/nepalFlag.svg';
import Global from '../../assets/images/worldwide 1.svg';
import ArrowRight from '../../assets/images/arrow_right.svg';
import EventBtn from '../../assets/images/events.svg';
import SurveyBtn from '../../assets/images/survey.svg';
import NoticeBtn from '../../assets/images/notices.svg';
import ReportBtn from '../../assets/images/reports.svg';
import { colors } from '../../utils/colors';
import StatsProgressBar from '../../components/StatsProgressBar';
import ButtonSheet, { ButtonSheetIconBtn } from '../../components/ButtonSheet';

function HomeScreenView({ history }) {
  const [showMore, setShowMore] = React.useState(false);
  return (
    <section id='home-screen'>
      <ButtonSheet visible={showMore} onClose={() => setShowMore(false)}>
        <ButtonSheetIconBtn
          text='Events'
          icon={EventBtn}
          onClick={() => history.push('/event')}
        />
        <ButtonSheetIconBtn
          text='Surveys'
          icon={SurveyBtn}
          onClick={() => history.push('/survey')}
        />
        <ButtonSheetIconBtn
          text='Reports'
          icon={ReportBtn}
          onClick={() => history.push('/report')}
        />

        <ButtonSheetIconBtn
          text='Notices'
          icon={NoticeBtn}
          onClick={() => history.push('/notice')}
        />
      </ButtonSheet>
      <div className='wrap'>
        <AppBar name='Hello Sabi' />
        <StaySafeText />
        <div className='gap x2'></div>
        <div className='flex jcsb'>
          <IconButton text='Contacts' color={colors.blue} icon={ContactIcon} />
          <IconButton
            text='News'
            color={colors.orange}
            icon={NewsIcon}
            onClick={() => history.push('/news')}
          />
          <IconButton text='Chat' color={colors.purple} icon={ChatIcon} />
          <IconButton
            text='More'
            color={colors.yellow}
            icon={MoreIcon}
            onClick={() => setShowMore(true)}
          />
        </div>
        <div className='gap x2'></div>
        <KnowMore />
        <div className='gap x2'></div>
        <NepalStats />
        <div className='gap x2'></div>
        <GlobalStats />
        <div className='gap x2'></div>
      </div>
    </section>
  );
}

const KnowMore = () => {
  return (
    <div className='know-more'>
      <div className='contents'>
        <p>All you need to know about corona virus! </p>
        <button className='btn-know-more'>Know More</button>
      </div>
      <div className='illustration'>
        <img src={KnowMoreImage} alt='know-more' />
      </div>
    </div>
  );
};

const GlobalStats = () => {
  return (
    <div className='home-screen-stats-card'>
      <header className='flex jcsb'>
        <div className='left flex ci'>
          <img src={Global} alt='flag-of-nepal' />
          <div className='content'>
            <div className='stats-of'>Global</div>
            <div className='updated'>Updated 6 min ago</div>
          </div>
        </div>
        <div className='right'>
          <img src={ArrowRight} alt='check-more' />
        </div>
      </header>
      <div className='content'>
        <StatsProgressBar
          keyz='Cases'
          value='20,00,000'
          color={colors.blue}
          width='100%'
        />
        <StatsProgressBar
          keyz='Recovered'
          value='70,000'
          color={colors.green}
          width='20%'
        />
        <StatsProgressBar
          keyz='Active'
          value='90,000'
          color={colors.orange}
          width='20%'
        />
        <StatsProgressBar
          keyz='Death'
          value='20,000'
          color={colors.red}
          width='10%'
        />
      </div>
      <div className='text-btn'>
        <a href='#'>Statistics by country > </a>
      </div>
      <footer>
        <p>Source: worldometers.info </p>
      </footer>
    </div>
  );
};
const NepalStats = () => {
  return (
    <div className='home-screen-stats-card'>
      <header className='flex jcsb'>
        <div className='left flex ci'>
          <img src={NepalFlag} alt='flag-of-nepal' />
          <div className='content'>
            <div className='stats-of'>Nepal</div>
            <div className='updated'>Updated 6 min ago</div>
          </div>
        </div>
        <div className='right'>
          <img src={ArrowRight} alt='check-more' />
        </div>
      </header>
      <div className='content'>
        <div className='flex jcsb'>
          <StatsProgressBar
            keyz='Tested'
            value='10,007'
            color={colors.blue}
            width='100%'
          />
          <div className='hgap x2'></div>
          <StatsProgressBar
            keyz='Positive'
            value='9'
            color={colors.orange}
            width='50%'
          />
        </div>
        <div className='flex jcsb'>
          <StatsProgressBar
            keyz='Recovered'
            value='1'
            color={colors.green}
            width='10%'
          />
          <div className='hgap x2'></div>
          <StatsProgressBar
            keyz='Death'
            value='0'
            color={colors.red}
            width='2%'
          />
        </div>
      </div>
      <footer>
        <p>Source: mohp.gov.np </p>
      </footer>
    </div>
  );
};

export default HomeScreenView;
