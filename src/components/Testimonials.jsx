import React from 'react';
import testBg from '../assets/test-bg.png';
import test1 from '../assets/test1.png';
import star from '../assets/logo/star.svg';

const testArr = [
  {
    id: 1,
    title: '“Great Delivery Service, I love It.”',
    subtitle:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  },
  {
    id: 2,
    title: '“Quality of The Sofa is Truly Amazing”',
    subtitle:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  },
  {
    id: 3,
    title: '“Quality of The Sofa is Truly Amazing”',
    subtitle:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  },
];

const Testimonials = () => {
  return (
    <section className="pt-[64px] md:pt-[82px]">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[32px]">
          <div>
            <h2 className="text-[#15181E] text-[48px] leading-[126%]">
              Testimonials
            </h2>
            <ul className="mt-[32px] flex flex-col gap-4">
              {testArr.slice(0, 2).map((item) => (
                <li key={item.id} className="p-[24px] bg-[#F1F3F6] rounded-2xl">
                  <img src={star} alt="star" width={128} height={24} />
                  <h4 className="text-[24px] leading-[120%] text-[#15181E] mt-[24px]">
                    {item.title}
                  </h4>
                  <p className="text-[16px] leading-[150%] text-[#384252] mt-[16px] font-[ClashDisplay-Regular] w-full max-w-[580px]">
                    {item.subtitle}
                  </p>
                </li>
              ))}
            </ul>
            <button className="w-fit pl-[24px] p-[3px] flex items-center gap-6 bg-[#037C6A] rounded-[48px] text-[16px] text-[#ffffff] leading-[150%] cursor-pointer mt-[32px]">
              View All Reviews
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

          <div
            style={{
              backgroundImage: `url(${testBg})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }}
            className="px-[24px] pb-[26px] rounded-3xl flex justify-center items-end h-[700px]"
          >
            <ul className="mt-[32px] flex flex-col gap-4">
              {testArr.slice(2).map((item) => (
                <li key={item.id} className="p-[24px] bg-[#F1F3F6] rounded-2xl">
                  <img src={star} alt="star" width={128} height={24} />
                  <h4 className="text-[24px] leading-[120%] text-[#15181E] mt-[24px]">
                    {item.title}
                  </h4>
                  <p className="text-[16px] leading-[150%] text-[#384252] mt-[16px] font-[ClashDisplay-Regular] w-full max-w-[580px]">
                    {item.subtitle}
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
