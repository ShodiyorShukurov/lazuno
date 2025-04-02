import React from 'react';
import bg from '../assets/logo/Line 8.svg';


const StatisticCard = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
      className="bg-[#191D24] mt-[64px] py-[50px] xl:py-[80px] rounded-[36px]"
    >
      <div className="container flex items-center justify-center md:justify-between flex-wrap gap-[56px] md:gap-6">
        <div className="text-center flex flex-col gap-4 lg:gap-6">
          <h4 className="text-[64px] lg:text-[72px] leading-[120%] text-[#ffffff]">
            25,000 +
          </h4>
          <p className="text-[#F1F3F6] text-[18px] leading-[26px] font-[ClashDisplay-Regular] max-w-[300px] mx-auto">
            We take pride in delivering comfort and style to thousands of homes.
          </p>
        </div>
        <div className="text-center flex flex-col gap-4 lg:gap-6">
          <h4 className="text-[64px] lg:text-[72px] leading-[120%] text-[#ffffff]">1,500 +</h4>
          <p className="text-[#F1F3F6] text-[18px] leading-[26px] font-[ClashDisplay-Regular] max-w-[370px] mx-auto">
            Explore our wide range of furniture, crafted to suit every taste.
          </p>
        </div>
        <div className="text-center flex flex-col gap-4 lg:gap-6">
          <h4 className="text-[64px] lg:text-[72px] leading-[120%] text-[#ffffff]">
            7 + Years
          </h4>
          <p className="text-[#F1F3F6] text-[18px] leading-[26px] font-[ClashDisplay-Regular] max-w-[350px] mx-auto">
            A decade of expertise in furniture design and innovation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StatisticCard;
