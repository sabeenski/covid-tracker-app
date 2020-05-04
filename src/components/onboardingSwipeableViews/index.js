import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import stayUpdatedImage from '../../assets/images/stay_updated.svg';
import stayAlertImage from '../../assets/images/stay_alert.svg';
import readNewsImage from '../../assets/images/read_news.svg';

function OnboardingSwipeableViews() {
  const [index, setIndex] = React.useState(0);

  const handleIndexChange = (index) => {
    console.log('index', index);
    setIndex(index);
  };
  const Item = ({ image, title, desc }) => {
    return (
      <div className='swipeable-item'>
        <img src={image} alt='' />
        <div className='gap'></div>
        <h3 className='title'>{title}</h3>
        <p className='desc'>{desc}</p>
      </div>
    );
  };
  return (
    <div className='onboarding-swipeable-views'>
      <SwipeableViews index={index} onChangeIndex={handleIndexChange}>
        <Item
          image={stayUpdatedImage}
          title='Stay updated'
          desc='lore, nana asm,asd'
        ></Item>
        <Item
          image={readNewsImage}
          title='Read news'
          desc='lore, nana asm,asd'
        ></Item>
        <Item
          image={stayAlertImage}
          title='Stay alert'
          desc='lore, nana asm,asd'
        ></Item>
      </SwipeableViews>
      <div className='pagination'>
        <div className={`dots ${index === 0 && 'active'}`}></div>
        <div className={`dots ${index === 1 && 'active'}`}></div>
        <div className={`dots ${index === 2 && 'active'}`}></div>
      </div>
    </div>
  );
}

export default OnboardingSwipeableViews;
