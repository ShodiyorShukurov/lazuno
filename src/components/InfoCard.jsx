import React from 'react';
import bg from '../assets/logo/Line 8.svg';
import icon1 from '../assets/logo/free.svg';
import icon2 from '../assets/logo/return.svg';
import icon3 from '../assets/logo/time-24.svg';
import icon4 from '../assets/logo/master card.svg';
import { useTranslation } from 'react-i18next';



const InfoCard = () => {
  const {t}=useTranslation()

  const infoArr = [
    {
      id: 1,
      title: t("info_card.card1_title"),
      subtitle: t("info_card.card1_text"),
      icon: icon1,
    },
    {
      id: 2,
      title: t("info_card.card2_title"),
      subtitle: t("info_card.card2_text"),
      icon: icon2,
    },
    {
      id: 3,
      title: t("info_card.card3_title"),
      subtitle: t("info_card.card3_text"),
      icon: icon3,
    },
    {
      id: 4,
      title: t("info_card.card4_title"),
      subtitle: t("info_card.card4_text"),
      icon: icon4,
    },
  ];

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
