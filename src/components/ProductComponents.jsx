import React from 'react';
import filter from '../assets/logo/filter.svg';

const ProductComponents = ({setOpen, productData}) => {
  return (
    <div className="flex justify-between sm:items-center sm:pt-[24px]">
      <h2 className="text-[24px] leading-[150%] text-[#15181E]">
        All Product ({productData?.total})
      </h2>
      <div className="flex justify-center gap-4 items-center">
        <button className="flex gap-2 py-3 px-6 bg-[#037C6A] rounded-full text-white cursor-pointer text-[16px] leading-[150%] font-[ClashDisplay-Regular]" onClick={()=>setOpen(true)}>
          <img src={filter} alt="filter" width={24} height={24} />
          Filter
        </button>
      </div>
    </div>
  );
};

export default ProductComponents;
