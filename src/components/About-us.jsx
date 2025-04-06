import React from 'react';
import aboutImg1 from '../assets/about-us1.png';
import aboutImg2 from '../assets/about-us2.png';
import { useTranslation } from 'react-i18next';

const AboutUsComponent = () => {
  const {t} =useTranslation()

  return (
    <section className="pt-[128px]">
      <div className="container">
        <ul className='flex flex-col gap-[64px]'>
          <li className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-[56px] items-center">
            <img src={aboutImg1} alt="img" className='h-full min-h-[460px] object-cover rounded-4xl'/>
            <div>
              <h2 className="text-[36px] sm:text-[48px] leading-[126%] text-[#15181E]">
                {t('about-us.card1_title')}
              </h2>
              <p className="text-[20px] leading-[150%] text-[#15181E] font-[ClashDisplay-Regular] mt-[16px]" dangerouslySetInnerHTML={{__html:t('about-us.card1_text')}} />
            </div>
          </li>
          <li className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-[56px] items-center">
            <div className='row-start-2 lg:row-start-1'>
              <h2 className="text-[36px] sm:text-[48px] leading-[126%] text-[#15181E]">
              {t('about-us.card2_title')}
              </h2>
              <p className="text-[20px] leading-[150%] text-[#15181E] font-[ClashDisplay-Regular] mt-[16px]" dangerouslySetInnerHTML={{__html:t('about-us.card2_text')}} />
            </div>
            <img src={aboutImg2} alt="img" className='h-full min-h-[460px] object-cover rounded-4xl row-start-1'/>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AboutUsComponent;
