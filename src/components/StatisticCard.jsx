import React from 'react';
import bg from '../assets/logo/Line 8.svg';
import { useTranslation } from 'react-i18next';
import CountUp from 'react-countup';


const StatisticCard = () => {

  const {t} =useTranslation()

  return (
    <section
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: 'no-repeat',
      }}
      className="bg-[#191D24] bg-cover mt-[64px] py-[50px] xl:py-[80px] rounded-[36px]"
    >
      <div className="container flex items-center justify-center md:justify-between flex-wrap gap-[56px] md:gap-6">
        <div className="text-center flex flex-col gap-4 lg:gap-6">
          <h4 className="text-[64px] lg:text-[72px] leading-[120%] text-[#ffffff]">
          <CountUp end={25000} /> +
          </h4>
          <p className="text-[#F1F3F6] text-[18px] leading-[26px] font-[ClashDisplay-Regular] max-w-[300px] mx-auto">
            {t('statistic.card1_title')}
          </p>
        </div>
        <div className="text-center flex flex-col gap-4 lg:gap-6">
          <h4 className="text-[64px] lg:text-[72px] leading-[120%] text-[#ffffff]"><CountUp end={1500} /> +</h4>
          <p className="text-[#F1F3F6] text-[18px] leading-[26px] font-[ClashDisplay-Regular] max-w-[370px] mx-auto">
          {t('statistic.card2_title')}
          </p>
        </div>
        <div className="text-center flex flex-col gap-4 lg:gap-6">
          <h4 className="text-[64px] lg:text-[72px] leading-[120%] text-[#ffffff]">
          <CountUp end={7} duration={5} />+
          </h4>
          <p className="text-[#F1F3F6] text-[18px] leading-[26px] font-[ClashDisplay-Regular] max-w-[350px] mx-auto">
          {t('statistic.card3_title')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default StatisticCard;
