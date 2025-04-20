import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
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
import { useTranslation } from 'react-i18next';
import img1 from '../assets/img-1.png';
import img2 from '../assets/img-2.png';
import img3 from '../assets/img-3.png';

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
  const { t } = useTranslation();
  const location = window.location.pathname;
  return (
    <section className="pt-[64px]">
      <div className="container">
        <h2 className="text-[36px] sm:text-[48px] leading-[126%] text-center">
          {t('partner.title')}
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
            autoplay={{
              delay: 1500,
              disableOnInteraction: true,
            }}
            modules={[Navigation, Autoplay]}
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
            autoplay={{
              delay: 1500,
              disableOnInteraction: true,
              reverseDirection: true,
            }}
            modules={[Navigation, Autoplay]}
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
        {location == '/about-us' || location == '/contact' ? (
          ''
        ) : (
          <p className="hidden md:block text-[56px] leading-[140%] mt-[64px] text-[#15181E]">
            {localStorage.getItem('lng') == 'ру' ? (
              <>
                В Lazuno Uz мы создаем не просто мебель — мы{' '}
                <img
                  src={img1}
                  alt=""
                  className="w-[83px] h-[83px] inline object-cover rounded-[9px] rotate-[-10deg] transition-transform duration-500 hover:rotate-0"
                />{' '}
                создаем атмосферу. Каждое изделие рассказывает свою историю,
                превращая{' '}
                <img
                  src={img2}
                  alt=""
                  className="w-[83px] h-[83px] inline object-cover rounded-[9px] rotate-[10deg] transition-transform duration-500 hover:rotate-0"
                />{' '}
                пространство в уютный уголок для воспоминаний. Более 1 500
                дизайнов, чтобы наполнить ваш дом стилем, комфортом и
                надежностью. Ваш{' '}
                <img
                  src={img3}
                  alt=""
                  className="w-[83px] h-[83px] inline object-cover rounded-[9px] rotate-[0deg] transition-transform duration-500 hover:rotate-[-10deg]"
                />{' '}
                идеальный интерьер начинается здесь.
              </>
            ) : localStorage.getItem('lng') == 'en' ? (
              <>
                At Lazuno Uz, we don’t just make furniture—we{' '}
                <img
                  src={img1}
                  alt=""
                  className="w-[83px] h-[83px] inline object-cover rounded-[9px] rotate-[-10deg] transition-transform duration-500 hover:rotate-0"
                />{' '}
                craft experiences. Every piece tells a story, turning spaces
                into places{' '}
                <img
                  src={img2}
                  alt=""
                  className="w-[83px] h-[83px] inline object-cover rounded-[9px] rotate-[10deg] transition-transform duration-500 hover:rotate-0"
                />{' '}
                where memories are made. With 1,500+ designs, we bring style,
                comfort, and durability to every home. Your{' '}
                <img
                  src={img3}
                  alt=""
                  className="w-[83px] h-[83px] inline object-cover rounded-[9px] rotate-[0deg] transition-transform duration-500 hover:rotate-[-10deg]"
                />{' '}
                dream space starts here.
              </>
            ) : (
              <>
                Lazuno Uz faqat mebel yaratmaydi—biz{' '}
                <img
                  src={img1}
                  alt=""
                  className="w-[83px] h-[83px] inline object-cover rounded-[9px] rotate-[-10deg] transition-transform duration-500 hover:rotate-0"
                />
                hissiyotlarni shakllantiramiz. Har bir buyum o‘z hikoyasiga ega{' '}
                <img
                  src={img2}
                  alt=""
                  className="w-[83px] h-[83px] inline object-cover rounded-[9px] rotate-[10deg] transition-transform duration-500 hover:rotate-0"
                />{' '}
                bo‘lib, har qanday makonni iliq xotiralarga boyitadi. 1 500+
                dizayn bilan uslub, qulaylik va mustahkamlikni taqdim etamiz.
                Sizning{' '}
                <img
                  src={img3}
                  alt=""
                  className="w-[83px] h-[83px] inline object-cover rounded-[9px] rotate-[0deg] transition-transform duration-500 hover:rotate-[-10deg]"
                />{' '}
                orzuingizdagi makon shu yerdan boshlanadi.
              </>
            )}
          </p>
        )}
      </div>
    </section>
  );
};

export default Partners;
