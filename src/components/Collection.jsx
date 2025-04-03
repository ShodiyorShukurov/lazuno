import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { EffectCoverflow } from 'swiper/modules';
import item1 from '../assets/carousel/item1.png';
import item2 from '../assets/carousel/item2.png';
import item3 from '../assets/carousel/item3.png';
import item4 from '../assets/carousel/item3.png';

const items = [
  { id: 1, name: 'Isabella Chair', img: item1 },
  { id: 2, name: 'Palma', img: item2 },
  { id: 3, name: 'Berry', img: item3 },
  { id: 4, name: 'Luxury Sofa', img: item4 },
];

const Collection = () => {
  return (
    <section className="pt-[64px]">
      <div className="container">
        <div className="flex justify-between items-center mb-[48px]">
          <h2 className="text-[48px] leading-[126%]">Shop By Category</h2>
          <button className="w-fit pl-[24px] p-[3px] flex items-center gap-6 bg-[#037C6A] rounded-[48px] text-[16px] text-[#ffffff] leading-[150%] cursor-pointer">
            View All
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

        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          spaceBetween={20}
          loop={true}
          className="w-full"
        >
          {items.map((item) => (
            <SwiperSlide
              key={item.id}
              className="h-[450px] flex flex-col items-center bg-white rounded-[32px] overflow-hidden"
            >
              <div className="w-full h-[350px] flex justify-center items-center">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover "
                />
              </div>
              <div className="w-full p-3 flex justify-between items-center">
                <p className="text-black">{item.name}</p>
                <button className="bg-green-600 text-white w-8 h-8 flex items-center justify-center rounded-full">
                  +
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Collection;
