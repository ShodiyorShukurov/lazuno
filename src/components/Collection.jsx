import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import item1 from '../assets/carousel/item1.png';
import item2 from '../assets/carousel/item2.png';
import item3 from '../assets/carousel/item3.png';
import item4 from '../assets/carousel/item3.png';
import { useTranslation } from 'react-i18next';

const items = [
  { id: 1, name: 'Isabella Chair', img: item1 },
  { id: 2, name: 'Palma', img: item2 },
  { id: 3, name: 'Berry', img: item3 },
  { id: 4, name: 'Luxury Sofa', img: item4 },
  { id: 5, name: 'Luxury Sofa', img: item1 },
  { id: 6, name: 'Luxury Sofa', img: item3 },
];

const Collection = () => {
  const { t } = useTranslation();

  return (
    <section className="pt-[64px]">
      <div className="container">
        <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-[48px]">
          <h2 className="text-[36px] sm:text-[48px] leading-[126%]">{t('category.title')}</h2>
          <button className="w-fit pl-[24px] p-[3px] flex items-center gap-6 bg-[#037C6A] rounded-[48px] text-[16px] text-[#ffffff] leading-[150%] cursor-pointer mt-6 sm:mt-0">
            {t('category.button_text')}
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
          </button>
        </div>

        <div className="hidden sm:block">
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={4}
            spaceBetween={20}
            loop={true}
            breakpoints={{
              480: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="w-full"
          >
            {items.map((item) => (
              <SwiperSlide
                key={item.id}
                className="h-[550px] flex flex-col items-center bg-white rounded-[32px] overflow-hidden"
              >
                <div
                  className="relative bg-cover bg-center rounded-[16px] overflow-hidden sm:h-auto project-card cursor-pointer"
                  style={{
                    backgroundImage: `url(${item.img})`,
                    height: '495px',
                  }}
                >
                  <div className="absolute inset-0 bg-[#0000000A] z-0"></div>
                  <div className="absolute flex bottom-0 left-0 right-0 h-auto pl-[24px] pb-[24px] text-white">
                    <button className="w-fit pl-[24px] p-[3px] flex items-center gap-6 bg-white rounded-[48px] text-[16px] text-[#15181E] leading-[150%] cursor-pointer mt-[24px]">
                      {item.name}
                      <span className="bg-[#037C6A] w-[40px] h-[40px] flex justify-center items-center rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 22 22"
                          fill="none"
                        >
                          <path
                            d="M12.714 7.57141L16.1426 11M16.1426 11L12.714 14.4286M16.1426 11L5.85686 11"
                            stroke="#ffffff"
                            strokeWidth="0.857143"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="flex flex-col gap-6 sm:hidden">
          {items.slice(0,3).map((item) => (
            <div
            key={item.id}
              className="relative bg-cover bg-center bg-no-repeat max-h-[350px] rounded-[16px] overflow-hidden sm:h-auto project-card cursor-pointer"
              style={{
                backgroundImage: `url(${item.img})`,
                height: '350px',
              }}
            >
              <div className="absolute inset-0 bg-[#0000000A] z-0"></div>
              <div className="absolute flex bottom-0 left-0 right-0 h-auto pl-[24px] pb-[24px] text-white">
                <button className="w-fit pl-[24px] p-[3px] flex items-center gap-6 bg-[#fff] rounded-[48px] text-[16px] text-[#15181E] leading-[150%] cursor-pointer mt-[24px]">
                  {t('about.button')}
                  <span className="bg-[#037C6A] w-[40px] h-[40px] flex justify-center items-center rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 22 22"
                      fill="none"
                    >
                      <path
                        d="M12.714 7.57141L16.1426 11M16.1426 11L12.714 14.4286M16.1426 11L5.85686 11"
                        stroke="#ffffff"
                        strokeWidth="0.857143"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collection;
