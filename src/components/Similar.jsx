import { useState } from 'react';
import card1 from '../assets/card/card1.png';
import card2 from '../assets/card/card2.png';
import card3 from '../assets/card/card3.png';
import card4 from '../assets/card/card4.png';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';

const cardArr = [
  {
    id: 1,
    title: 'Blue Leather Sofa Chair',
    img: card1,
  },
  {
    id: 2,
    title: 'Blue Leather Sofa Chair',
    img: card2,
  },
  {
    id: 3,
    title: 'Blue Leather Sofa Chair',
    img: card3,
  },
  {
    id: 4,
    title: 'Blue Leather Sofa Chair',
    img: card4,
  },
];

const Similar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [id, setId] = useState('');

  return (
    <section className="pt-[48px]">
      <div className="container">
        <h2 className="text-[32px] sm:text-[48px] leading-[126%] mb-[32px]">
        Similar Products
        </h2>
        <div className=" hidden sm:grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          {cardArr?.map((item) => (
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
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full max-w-[300px] h-full max-h-[370px] rounded-[20px]"
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
          ))}
        </div>

        <div className='block sm:hidden'>
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
                0: {slidesPerView:1},
              480: { slidesPerView: 2 },
              640: { slidesPerView: 2 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="w-full"
          >
            {cardArr.map((item) => (
              <SwiperSlide
                key={item.id}
                className="h-[350px] flex flex-col items-center"
                onClick={()=>navigate('/category')}
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
                src={item.img}
                alt={item.title}
                className="w-full max-w-[300px] h-full max-h-[350px] rounded-[20px]"
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
