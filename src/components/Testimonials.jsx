import React from 'react';
import testBg from '../assets/test-bg.png';
import star from '../assets/logo/star.svg';
import { useTranslation } from 'react-i18next';
import UseProduct from '../hooks/UseProduct';
import { NavLink } from 'react-router-dom';

const testArr = [
  {
    id: 1,
    title: '“Great Delivery Service, I love It.”',
    subtitle:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    name: 'Cameron Williamson',
  },
  {
    id: 2,
    title: '“Quality of The Sofa is Truly Amazing”',
    subtitle:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    name: 'Cameron Williamson',
  },
  {
    id: 3,
    title: '“Quality of The Sofa is Truly Amazing”',
    subtitle:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    name: 'Cameron Williamson',
  },
];

const Star = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M12 2L14.2451 8.90983H21.5106L15.6327 13.1803L17.8779 20.0902L12 15.8197L6.12215 20.0902L8.36729 13.1803L2.48944 8.90983H9.75486L12 2Z"
      fill="#037C6A"
    />
  </svg>
);

const Testimonials = () => {
  const { productData } = UseProduct();
  const { t } = useTranslation();
  const allReviews = productData?.data?.flatMap((product) => product.reviews);

  return (
    <section className="pt-[64px] md:pt-[82px]">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[32px]">
          <div>
            <h2 className="text-[#15181E] text-[32px] sm:text-[48px] leading-[126%]">
              {t('testimonials.title')}
            </h2>
            <ul className="mt-[32px] flex flex-col gap-4">
              {allReviews?.slice(0, 2).map((item) => (
                <li key={item.id} className="p-[24px] bg-[#F1F3F6] rounded-2xl">
                  <span className="flex items-center gap-[2px] mt-1">
                    {[...Array(item.stars)].map((_, index) => (
                      <Star key={index} />
                    ))}
                  </span>
                  <h4 className="text-[24px] leading-[120%] text-[#15181E] mt-[24px]">
                    {item.title}
                  </h4>
                  <p className="text-[16px] leading-[150%] text-[#384252] mt-[16px] font-[ClashDisplay-Regular] w-full max-w-[580px]">
                    {item.text}
                  </p>
                  <p className="text-[18px] leading-[150%] text-[#15181E] mt-[16px]">
                    {item.name}
                  </p>
                </li>
              ))}
            </ul>
            <NavLink
              to={'/product/' + productData?.data[0]?.id}
              className="w-fit pl-[24px] p-[3px] flex items-center gap-6 bg-[#037C6A] rounded-[48px] text-[16px] text-[#ffffff] leading-[150%] cursor-pointer mt-[32px]"
            >
              {t('testimonials.button_text')}
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
            </NavLink>
          </div>

          <div
            style={{
              backgroundImage: `url(${testBg})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }}
            className="px-[24px] pb-[26px] rounded-3xl flex justify-center items-end h-[700px]"
          >
            <ul className="mt-[32px] flex flex-col gap-4 w-full max-w-[580px]">
              {allReviews?.slice(2, 3).map((item) => (
                <li key={item.id} className="p-[24px] bg-[#F1F3F6] rounded-2xl">
                  <span className="flex items-center gap-[2px] mt-1">
                    {[...Array(item.stars)].map((_, index) => (
                      <Star key={index} />
                    ))}
                  </span>
                  <h4 className="text-[24px] leading-[120%] text-[#15181E] mt-[24px]">
                    {item.title}
                  </h4>
                  <p className="text-[16px] leading-[150%] text-[#384252] mt-[16px] font-[ClashDisplay-Regular] w-full max-w-[580px]">
                    {item.subtitle}
                  </p>
                  <p className="text-[18px] leading-[150%] text-[#15181E] mt-[16px]">
                    {item.name}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
