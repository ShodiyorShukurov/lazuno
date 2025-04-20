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
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const totalItems = items.length;

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

        {/* <div className="hidden sm:block">
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
            {items.map((item) => (
              <SwiperSlide
                key={item.id}
                className="h-[550px] flex flex-col items-center bg-white rounded-[32px] overflow-hidden"
                onClick={()=>navigate('/category')}
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
        </div> */}

        {/* <div className="flex flex-col gap-6 sm:hidden">
          {items.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className="relative bg-cover bg-center bg-no-repeat max-h-[350px] rounded-[16px] overflow-hidden sm:h-auto project-card cursor-pointer"
              style={{
                backgroundImage: `url(${item.img})`,
                height: '350px',
              }}
              onClick={() => navigate('/category')}
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
        </div> */}
      </div>

      {/* <div className="hidden sm:block">
      <Swiper
        ref={swiperRef} // ref ni Swiper komponentiga to'g'ridan-to'g'ri bog'lash mumkin (lekin onSwiper yetarli)
        modules={[Autoplay]} // Kerakli modullarni import qiling
        // Swiper ishga tushganda birinchi marta chaqiriladi
        onSwiper={(swiper) => {
          swiperRef.current = swiper; // Ref ni saqlab qo'yamiz (agar kerak bo'lsa)
          handleSlideChange(swiper); // Boshlang'ich klasslarni o'rnatish
        }}
        // Har bir slayd almashinuvi tugagandan so'ng chaqiriladi
        onSlideChange={(swiper) => {
          handleSlideChange(swiper); // Klasslarni yangilash
        }}
        centeredSlides={true}
        slidesPerView={4} // Asosiy qiymat (katta ekranlar uchun)
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        breakpoints={{
          // Breakpointlar kichikdan kattaga qarab yozilgani yaxshi
          480: { slidesPerView: 1, spaceBetween: 10 }, // Kichikroq oraliq kerak bo'lishi mumkin
          640: { slidesPerView: 2, spaceBetween: 15 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 20 },
          1280: { slidesPerView: 4, spaceBetween: 20 },
        }}
        className="w-full"
      >
        {items.map((item) => (
          <SwiperSlide
            key={item.id}
            
            className="flex flex-col items-center bg-white rounded-[32px] overflow-hidden transition-transform duration-300 ease-in-out" // Animatsiya uchun transition qo'shildi
         
          >
           
            <div
              className="relative bg-cover bg-center rounded-[16px] overflow-hidden w-full h-[495px] project-card cursor-pointer" // Balandlikni moslashtiring, w-full qo'shildi
              style={{
                backgroundImage: `url(${item.img})`,
                
              }}
               onClick={() => navigate('/category')} // Clickni shu yerga qo'yish mantiqliroq
            >
              <div className="absolute inset-0 bg-[#0000000A] z-0"></div>
              <div className="absolute flex bottom-0 left-0 right-0 h-auto pl-[24px] pb-[24px] text-white z-10"> 
                <button className="w-fit pl-[24px] p-[3px] flex items-center gap-6 bg-white rounded-[48px] text-[16px] text-[#15181E] leading-[150%] cursor-pointer mt-[24px]">
                  {item.name}
                  <span className="bg-[#037C6A] w-[40px] h-[40px] flex justify-center items-center rounded-full">
                    
                    <svg width="24" height="24" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.714 7.57141L16.1426 11M16.1426 11L12.714 14.4286M16.1426 11L5.85686 11" stroke="#ffffff" strokeWidth="0.857143" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div> */}
      <div className="w-full overflow-hidden relative">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 300}px)` }}
        >
          {[...items].map((item, index) => (
            <div
              key={index}
              className={`flex-shrink-0 transition-all duration-500 mr-[32px] ${
                index % totalItems === currentIndex ? 'w-[700px]' : 'w-[300px]'
              } text-center`}
            >
              <div
                className="relative bg-cover bg-center rounded-[16px] overflow-hidden w-full h-[495px] project-card cursor-pointer" // Balandlikni moslashtiring, w-full qo'shildi
                style={{
                  backgroundImage: `url(${item.img})`,
                }}
                onClick={() => navigate('/category')} // Clickni shu yerga qo'yish mantiqliroq
              >
                <div className="absolute inset-0 bg-[#0000000A] z-0"></div>
                <div className="absolute flex bottom-0 left-0 right-0 h-auto pl-[24px] pb-[24px] text-white z-10">
                  <button className="w-fit pl-[24px] p-[3px] flex items-center gap-6 bg-white rounded-[48px] text-[16px] text-[#15181E] leading-[150%] cursor-pointer mt-[24px]">
                    {item.name}
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
    </section>
  );
};

export default Collection;

// const Carousel = () => {
//   const [currentSlide, setCurrentSlide] = React.useState(0);
//   const carouselRef = React.useRef(null);

//   // Slaydlar uchun ma'lumotlar (id'lar tuzatildi)
//   const slides = [
//     {
//       id: 1,
//       content: "Afro Vibes",
//       image: "https://via.placeholder.com/750x400/1a1a1a/FFD700?text=Afro+Vibes",
//     },
//     {
//       id: 2,
//       content: "Black Excellence",
//       image: "https://via.placeholder.com/750x400/1a1a1a/FFD700?text=Black+Excellence",
//     },
//     {
//       id: 3,
//       content: "Cultural Roots",
//       image: "https://via.placeholder.com/750x400/1a1a1a/FFD700?text=Cultural+Roots",
//     },
//     {
//       id: 4,
//       content: "Heritage Pride",
//       image: "https://via.placeholder.com/750x400/1a1a1a/FFD700?text=Heritage+Pride",
//     },
//   ];

//   // Cheksiz aylanish uchun slaydlarni klonlash
//   const extendedSlides = [
//     ...slides.slice(-2), // Oxirgi ikkita slayd boshiga qo'shiladi
//     ...slides,
//     ...slides.slice(0, 2), // Birinchi ikkita slayd oxiriga qo'shiladi
//   ];

//   // Avtomatik aylanish
//   React.useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => prev + 1);
//     }, 3000); // Har 3 soniyada almashtirish

//     return () => clearInterval(interval);
//   }, []);

//   // Cheksiz aylanish uchun silliq o'tish
//   React.useEffect(() => {
//     if (currentSlide >= slides.length + 2) {
//       // Oxirgi klonlangan slayddan keyin
//       setTimeout(() => {
//         carouselRef.current.style.transition = "none";
//         setCurrentSlide(2); // Haqiqiy birinchi slaydga o'tish
//         carouselRef.current.style.transform = `translateX(-${2 * 750}px)`;
//         setTimeout(() => {
//           carouselRef.current.style.transition = "transform 0.5s ease";
//         }, 50);
//       }, 500);
//     } else if (currentSlide < 2) {
//       // Boshlang'ich klonlangan slayddan oldin
//       setTimeout(() => {
//         carouselRef.current.style.transition = "none";
//         setCurrentSlide(slides.length);
//         carouselRef.current.style.transform = `translateX(-${slides.length * 750}px)`;
//         setTimeout(() => {
//           carouselRef.current.style.transition = "transform 0.5s ease";
//         }, 50);
//       }, 500);
//     }
//   }, [currentSlide, slides.length]);

//   return (
//     <div className="w-full mx-auto py-8 bg-afro-black rounded-xl shadow-lg overflow-hidden">
//       <div
//         ref={carouselRef}
//         className="flex transition-transform duration-500"
//         style={{ transform: `translateX(-${currentSlide * 750}px)` }}
//       >
//         {extendedSlides.map((slide, index) => (
//           <div
//             key={`${slide.id}-${index}`}
//             className={`flex-shrink-0 transition-all duration-500 ${
//               index === currentSlide ? "w-[750px]" : "w-[300px]"
//             } p-4`}
//           >
//             <div className="relative">
//               <img
//                 src={slide.image}
//                 alt={slide.content}
//                 className="w-full h-96 object-cover rounded-lg border-2 border-afro-gold"
//               />
//               <div className="absolute inset-0 flex items-center justify-center bg-[#0000000A] bg-opacity-40 rounded-lg">
//                 <h3 className="text-3xl font-bold text-afro-gold">
//                   {slide.content}
//                 </h3>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Carousel;
