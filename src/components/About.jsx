import React from 'react';
import bg1 from '../assets/about-bg.png';
import bg from '../assets/about-bg2.png';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

const About = () => {
  const { t } = useTranslation();
  return (
    <section className="pt-[160px]  h-full">
      <div className="relative">
        <div className="container">
          <div
            style={{ backgroundImage: `url(${bg})` }}
            className="bg-no-repeat  flex justify-end md:justify-center items-center pb-[35px] md:pb-0  flex-col bg-cover bg-left md:bg-center h-[600px] w-full rounded-[36px]  z-50"
          >
            <h2 className="text-white text-[40px] px-[20px] md:text-[64px] leading-[120%] text-center w-full max-w-[940px] font-[ClashDisplay-Semibold]">
              {t('about.title')}
            </h2>
            <NavLink to='/category' className="w-fit pl-[24px] p-[3px] flex items-center gap-6 bg-[#037C6A] rounded-[48px] text-[16px] text-[#ffffff] leading-[150%] cursor-pointer mt-[24px]">
              {t('about.button')}
              <span className="bg-[#FFFFFF] w-[40px] h-[40px] flex justify-center items-center rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 22 22"
                  fill="none"
                >
                  <path
                    d="M12.714 7.57141L16.1426 11M16.1426 11L12.714 14.4286M16.1426 11L5.85686 11"
                    stroke="#000000"
                    strokeWidth="0.857143"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </NavLink>
          </div>
        </div>
        <img
          className="absolute w-full bottom-0 -z-10 min-h-[340px] md:min-h-[320px] xl:max-h-[300px]"
          src={bg1}
          alt="bg"
        />
      </div>
    </section>
  );
};

export default About;
