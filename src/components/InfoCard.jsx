import React from 'react';
import bg from '../assets/logo/Line 8.svg';
import icon1 from '../assets/logo/free.svg';
import icon2 from '../assets/logo/return.svg';
import icon3 from '../assets/logo/time-24.svg';
import icon4 from '../assets/logo/master card.svg';

const infoArr = [
  {
    id: 1,
    title: 'Free Shipping',
    subtitle: 'You will love at great low prices',
    icon: icon1,
  },
  {
    id: 2,
    title: '15 Days Returns',
    subtitle: 'Within 15 days for an exchange',
    icon: icon2,
  },
  {
    id: 3,
    title: 'Customer Support',
    subtitle: '24 hours a day, 7 days a week',
    icon: icon3,
  },
  {
    id: 4,
    title: 'Flexible Payment',
    subtitle: 'Pay with multiple credit cards',
    icon: icon4,
  },
];

const InfoCard = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
      className="bg-[#191D24] mt-[64px] py-[50px] xl:py-[80px] rounded-[36px]"
    >
      <div className="container flex items-center justify-center md:justify-between flex-wrap gap-[64px] md:gap-6">
        {infoArr.map((item) => (
          <div className="text-center flex flex-col" key={item.id}>
            <img
              className="mx-auto"
              src={item.icon}
              alt={item.title}
              width={32}
              height={32}
            />
            <h4 className="text-[24px] leading-[140%] text-[#ffffff] mt-[16px]">
              {item.title}
            </h4>
            <p className="text-[#A8A29E] text-[18px] leading-[26px] font-[ClashDisplay-Regular] max-w-[300px] mx-auto mt-[4px]">
              {item.subtitle}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InfoCard;
