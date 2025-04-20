import { useState } from 'react';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import UseSimilar from '../hooks/UseSimilar';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Similar = () => {
  const {t}=useTranslation()
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [id, setId] = useState('');
  const { similarData } = UseSimilar();

  return (
    <section className="pt-[48px]">
      <div className="container">
        <h2 className="text-[32px] sm:text-[48px] leading-[126%] mb-[32px]">
          {t('similar.title')}
        </h2>
        <div className=" hidden sm:grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          {similarData?.data?.map((item) => (
            <div
              key={item.id}
              className="relative rounded-[16px]  overflow-hidden hover:scale-[0.97] transition-transform duration-300 ease-in-out cursor-pointer"
              onMouseEnter={() => {
                setId(item.id);
                setIsHovered(true);
              }}
              onMouseLeave={() => {
                setId('');
                setIsHovered(false);
              }}
              onClick={() => navigate('/product/' + item.id)}
            >
              <img
                src={item?.image_url[0]}
                alt={item.title}
                className="w-full max-w-[300px] h-[370px] rounded-[20px]"
                width={300}
              />
              <button
                className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-[#037C6A] text-white text-[16px] leading-[150%] py-[16px] transition-all duration-500 ease-in-out w-full rounded-[16px] cursor-pointer ${
                  isHovered && id === item.id
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-4'
                }`}
              >
                {t('latest_collection.button_text')}
              </button>
              <div className="mt-[8px]">
                <h3 className="text-[16px] text-[#15181E] leading-[150%] pl-0.5">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="block sm:hidden">
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
              0: { slidesPerView: 1 },
              480: { slidesPerView: 2 },
              640: { slidesPerView: 2 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="w-full"
          >
            {similarData?.data?.map((item) => (
              <SwiperSlide
                key={item.id}
                className="h-[350px] flex flex-col items-center"
                onClick={() => navigate('/category')}
              >
                <div
                  key={item.id}
                  className="relative rounded-[16px] overflow-hidden hover:scale-[0.97] transition-transform duration-300 ease-in-out cursor-pointer"
                  onMouseEnter={() => {
                    setId(item.id);
                    setIsHovered(true);
                  }}
                  onMouseLeave={() => {
                    setId('');
                    setIsHovered(false);
                  }}
                >
                  <img
                    src={item?.image_url[0]}
                    alt={item.title}
                    className="w-full max-w-[300px] h-[350px] rounded-[20px]"
                    width={300}
                  />
                  <button
                    className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-[#037C6A] text-white text-[16px] leading-[150%] py-[16px] transition-all duration-500 ease-in-out w-full rounded-[16px] cursor-pointer ${
                      isHovered && id === item.id
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-4'
                    }`}
                  >
                    Buy Now
                  </button>
                  <div className="mt-[8px]">
                    <h3 className="text-[16px] text-[#15181E] leading-[150%] pl-0.5">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Similar;
