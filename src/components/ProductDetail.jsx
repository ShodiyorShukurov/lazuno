import React from 'react';
import card1 from '../assets/product-img1.png';
import card2 from '../assets/product-img2.png';
import card3 from '../assets/product-img3.png';
import card4 from '../assets/product-img4.png';
import eye from '../assets/logo/eye.svg';
import minus from '../assets/logo/minus.svg';
import plus from '../assets/logo/plus.svg';
import right from '../assets/logo/direction-right 2.svg';

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

const ProductDetail = () => {
  const [count, setCount] = React.useState(1);

  return (
    <section className="pt-[120px]">
      <div className="container">
        <h5 className="hidden sm:flex  text-[14px] leading-[140%] text-[#15181E] font-[ClashDisplay-Regular]">
          Home <img src={right} alt="right" /> Product{' '}
          <img src={right} alt="right" /> Yellow Leather Sofa Chair
        </h5>
        <div className="grid md:grid-cols-2 gap-10 pt-6">
          <div>
            <div className="rounded-[16px] md:rounded-[32px] overflow-hidden">
              <img
                src={card1}
                alt="Main Product"
                className="w-full h-auto max-h-[500px] object-cover"
              />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
              <img
                src={card2}
                alt="thumb1"
                className="w-full rounded-[16px] md:rounded-[32px] object-cover"
              />
              <img
                src={card3}
                alt="thumb2"
                className="w-full rounded-[16px] md:rounded-[32px] object-cover"
              />
              <img
                src={card4}
                alt="thumb3"
                className="w-0 md:w-full rounded-[32px] object-cover"
              />
            </div>
          </div>

          {/* Right side - details */}
          <div className="flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-green-600 text-sm">
                <span className="flex items-center gap-[2px]">
                  {[...Array(4)].map((_, index) => (
                    <Star key={index} />
                  ))}
                </span>
                <span className="text-[16px] leading-[150%] text-[#15181E] font-[ClashDisplay-Regular]">
                  5.0 (2.5K Reviews)
                </span>
              </div>
              <h1 className="text-[36px] md:text-[48px] leading-[126%] text-[#15181E] mt-4 pb-4 border-b border-[#E0E4EA]">
                Yellow Leather Sofa Chair
              </h1>

              <div className="pt-6 flex items-center gap-2">
                <img src={eye} alt="eye" width={24} height={24} />
                <p className="text-[16px] leading-[150%] text-[#15181E] ">
                  83 People are viewing this right now
                </p>
              </div>
              <p className="text-[#384252] text-[14px] leading-[140%] mt-4">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>

              <div className="flex items-center gap-4 mt-4">
                <div className="flex items-center gap-4 text-[#15181E] border border-[#E0E4EA] rounded-full p-4">
                  <button
                    className="min-w-[24px] min-h-[24px] cursor-pointer"
                    disabled={count == 0}
                    onClick={() => setCount(count - 1)}
                  >
                    <img src={minus} alt="minus" width={24} height={24} />
                  </button>
                  {count}
                  <button
                    className="min-w-[24px] min-h-[24px] cursor-pointer"
                    disabled={count == 10}
                    onClick={() => setCount(count + 1)}
                  >
                    <img src={plus} alt="plus" width={24} height={24} />
                  </button>
                </div>

                <button className="w-full pl-[24px] p-[3px] flex items-center justify-between bg-[#037C6A] rounded-[48px] text-[16px] text-[#ffffff] leading-[150%] font-[ClashDisplay-Regular] text-center cursor-pointer">
                  <span className="mx-auto">Add to Cart</span>
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

              <button className="w-full pl-[24px] p-[3px] flex items-center justify-between bg-transparent border border-[#E0E4EA] rounded-[48px] text-[16px] text-[#15181E] leading-[150%] font-[ClashDisplay-Regular] text-center cursor-pointer mt-[16px]">
                <span className="mx-auto">Buy Now</span>
                <span className="bg-[#037C6A] w-[48px] h-[48px] flex justify-center items-center rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 22 22"
                    fill="none"
                  >
                    <path
                      d="M12.714 7.57141L16.1426 11M16.1426 11L12.714 14.4286M16.1426 11L5.85686 11"
                      stroke="#fff"
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
      </div>
    </section>
  );
};

export default ProductDetail;
