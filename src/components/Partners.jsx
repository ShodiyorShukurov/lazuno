import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import partner1 from '../assets/partners/partner1.png';
import partner2 from '../assets/partners/partner2.png';
import partner3 from '../assets/partners/partner3.png';
import partner4 from '../assets/partners/partner4.png';
import partner5 from '../assets/partners/partner5.png';
import partner6 from '../assets/partners/partner6.png';
import partner7 from '../assets/partners/partner7.png';
import partner8 from '../assets/partners/partner8.png';
import partner9 from '../assets/partners/partner9.png';
import partner10 from '../assets/partners/partner10.png';
import partner11 from '../assets/partners/partner11.png';
import partner12 from '../assets/partners/partner12.png';

const partnersArr = [
  {
    id: 1,
    img: partner1,
  },
  {
    id: 2,
    img: partner2,
  },
  {
    id: 3,
    img: partner3,
  },
  {
    id: 4,
    img: partner4,
  },
  {
    id: 5,
    img: partner5,
  },
  {
    id: 6,
    img: partner6,
  },
  {
    id: 7,
    img: partner7,
  },
  {
    id: 8,
    img: partner8,
  },
  {
    id: 9,
    img: partner9,
  },
  {
    id: 10,
    img: partner10,
  },
  {
    id: 11,
    img: partner11,
  },
  {
    id: 12,
    img: partner12,
  },
];

const Partners = () => {
  return (
    <section className="pt-[64px]">
      <div className="container">
        <h2 className="font-medium text-[48px] leading-[126%] text-center">
          Our primary suppliers and partners.
        </h2>
        <div className="hidden lg:flex gap-8 items-center justify-center flex-wrap mt-[36px]">
          {partnersArr?.slice(0, 6).map((item) => (
            <img
              key={item.id}
              src={item.img}
              alt={item.id}
              className="w-[160px] h-[45px] object-cover"
            />
          ))}
        </div>
        <div className="hidden lg:flex gap-8 items-center justify-center flex-wrap mt-[32px]">
          {partnersArr?.slice(6).map((item) => (
            <img key={item.id} src={item.img} alt={item.id} width={180} />
          ))}
        </div>

        <div className="block lg:hidden">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            loop={true}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            modules={[Navigation]}
            breakpoints={{
              0: { slidesPerView: 2 },
              480: { slidesPerView: 2 },
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 4 },
              1280: { slidesPerView: 4 },
            }}
            className="mt-[36px]"
          >
            {partnersArr.slice(0, 6).map((item) => (
              <SwiperSlide key={item.id}>
                <div
                  style={{ fontFamily: 'SF Pro Display Medium' }}
                  className="overflow-hidden cursor-pointer flex justify-center items-center"
                  onClick={() => navigate('/news/' + item.id)}
                >
                  <img
                    src={item.img}
                    alt={item.id}
                    className={`w-[160px] h-[45px] object-cover`}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="block lg:hidden">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            loop={true}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            modules={[Navigation]}
            breakpoints={{
              0: { slidesPerView: 2 },
              480: { slidesPerView: 2 },
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 4 },
              1280: { slidesPerView: 4 },
            }}
            className=" block lg:hidden mt-[32px]"
          >
            {partnersArr.slice(6).map((item) => (
              <SwiperSlide key={item.id}>
                <div
                  style={{ fontFamily: 'SF Pro Display Medium' }}
                  className="overflow-hidden cursor-pointer flex justify-center items-center"
                  onClick={() => navigate('/news/' + item.id)}
                >
                  <img
                    src={item.img}
                    alt={item.id}
                    className={`w-[160px] h-[45px] object-cover`}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <p className="hidden md:block text-[56px] leading-[140%] mt-[64px] text-[#15181E]">
          Lazuno Uz faqat mebel yaratmaydi—biz hissiyotlarni shakllantiramiz.
          Har bir buyum o‘z hikoyasiga ega bo‘lib, har qanday makonni iliq
          xotiralarga boyitadi. 1 500+ dizayn bilan uslub, qulaylik va
          mustahkamlikni taqdim etamiz. Sizning orzuingizdagi makon shu yerdan
          boshlanadi.
        </p>
      </div>
    </section>
  );
};

export default Partners;
