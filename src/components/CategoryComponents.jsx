import React from 'react';
import filter from '../assets/logo/filter.svg';
import { useTranslation } from 'react-i18next';

const CategoryComponents = ({ setOpen, data }) => {
  const { t } = useTranslation();

  return (
    <div className="flex justify-between sm:items-center sm:pt-[24px]">
      <h2 className="text-[24px] leading-[150%] text-[#15181E]">
        {t('category.all')} ({data?.total})
      </h2>
      <div className="flex justify-center gap-4 items-center">
        <button
          className="flex gap-2 py-3 px-6 bg-[#037C6A] rounded-full text-white cursor-pointer text-[16px] leading-[150%] font-[ClashDisplay-Regular]"
          onClick={() => setOpen(true)}
        >
          <img src={filter} alt="filter" width={24} height={24} />
          {t('filter.title')}
        </button>
      </div>
    </div>
  );
};

export default CategoryComponents;
