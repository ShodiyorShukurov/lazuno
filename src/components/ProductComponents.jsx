import React from 'react';
import filter from '../assets/logo/filter.svg';

const ProductComponents = ({setOpen}) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between sm:items-center sm:pt-[24px]">
      <h2 className="text-[24px] leading-[150%] text-[#15181E]">
        All Products (342)
      </h2>
      <div className="flex justify-center gap-4 items-center mt-4 sm:mt-0">
        <button className="flex gap-2 py-3 px-6 bg-[#037C6A] rounded-full text-white cursor-pointer text-[16px] leading-[150%] font-[ClashDisplay-Regular]" onClick={()=>setOpen(true)}>
          <img src={filter} alt="filter" width={24} height={24} />
          Filter
        </button>
        <button className="flex gap-2 py-3 px-6 rounded-full border border-[#E0E4EA] text-[#15181E] cursor-pointer text-[16px] leading-[150%] font-[ClashDisplay-Regular]">
          Sort By Popularity
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`transition-all w-[24px] h-[24px] duration-300`}
            viewBox="0 0 25 24"
            fill="none"
          >
            <path
              d="M6.42822 9L12.4282 15L18.4282 9"
              stroke="#15181E"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProductComponents;
