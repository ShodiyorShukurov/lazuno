import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import item1 from '../assets/carousel/item1.png';
import item2 from '../assets/carousel/item2.png';
import item3 from '../assets/carousel/item3.png';
import item4 from '../assets/carousel/item3.png';
import { useTranslation } from 'react-i18next';
import { Autoplay } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import UseCategory from '../hooks/UseCategory';

const items = [
  { id: 1, name: 'Isabella Chair', img: item1 },
  { id: 2, name: 'Palma', img: item2 },
  { id: 3, name: 'Berry', img: item3 },
  { id: 4, name: 'Luxury Sofa', img: item4 },
  { id: 5, name: 'Luxury Sofa', img: item1 },
  { id: 6, name: 'Luxury Sofa', img: item3 },
];

const Collection = () => {
  const { categoryData } = UseCategory();

  const { t } = useTranslation();
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const totalItems = categoryData?.data?.length;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
  };

  React.useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pt-[64px]">
      <div className="container">
        <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-[48px]">
          <h2 className="text-[36px] sm:text-[48px] leading-[126%]">
            {t('category.title')}
          </h2>
          <button
            className="w-fit pl-[24px] p-[3px] flex items-center gap-6 bg-[#037C6A] rounded-[48px] text-[16px] text-[#ffffff] leading-[150%] cursor-pointer mt-6 sm:mt-0"
            onClick={() => navigate('/category')}
          >
            {t('category.button_text')}
            <span className="bg-[#FFFFFF] w-[48px] h-[48px] flex justify-center items-center rounded-full">
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
      </div>
      <div className="hidden md:block w-full overflow-hidden relative px-[10px]">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 300}px)` }}
        >
          {categoryData?.data?.map((item, index) => (
            <div
              key={index}
              className={`flex-shrink-0 transition-all duration-500 mr-[32px] ${
                index % totalItems === currentIndex ? 'w-[700px]' : 'w-[300px]'
              } text-center`}
            >
              <div
                className="relative bg-cover bg-center rounded-[16px] overflow-hidden w-full h-[495px] project-card cursor-pointer" // Balandlikni moslashtiring, w-full qo'shildi
                style={{
                  backgroundImage: `url(${item.image_url})`,
                }}
                onClick={() => navigate('/category/' + item.id)}
              >
                <div className="absolute inset-0 bg-[#0000000A] z-0"></div>
                <div className="absolute flex bottom-0 left-0 right-0 h-auto pl-[24px] pb-[24px] text-white z-10">
                  <button className="w-fit pl-[24px] p-[3px] flex items-center gap-6 bg-white rounded-[48px] text-[16px] text-[#15181E] leading-[150%] cursor-pointer mt-[24px]">
                    {item.title}
                    <span className="bg-[#037C6A] w-[40px] h-[40px] flex justify-center items-center rounded-full">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
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
            </div>
          ))}
        </div>
      </div>
      <div className="block md:hidden px-[20px]">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={4}
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: true,
          }}
          modules={[Autoplay]}
          breakpoints={{
            480: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="w-full"
        >
          {categoryData?.data?.map((item) => (
            <SwiperSlide
              key={item.id}
              className="h-[550px] flex flex-col items-center bg-white rounded-[32px] overflow-hidden"
              onClick={() => navigate('/category/' + item.id)}
            >
              <div
                className="relative bg-cover bg-center rounded-[16px] overflow-hidden sm:h-auto project-card cursor-pointer"
                style={{
                  backgroundImage: `url(${item.image_url})`,
                  height: '495px',
                }}
              >
                <div className="absolute inset-0 bg-[#0000000A] z-0"></div>
                <div className="absolute flex bottom-0 left-0 right-0 h-auto pl-[24px] pb-[24px] text-white">
                  <button className="w-fit pl-[24px] p-[3px] flex items-center gap-6 bg-white rounded-[48px] text-[16px] text-[#15181E] leading-[150%] cursor-pointer mt-[24px]">
                    {item.title}
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
    </section>
  );
};

export default Collection;
