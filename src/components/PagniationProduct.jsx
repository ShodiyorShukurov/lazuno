import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const PagniationProduct = ({ productData, setCurrentPage, currentPage }) => {
  const { t } = useTranslation();

  const totalPages =
    Math.round(productData?.total / 12) == 0
      ? 1
      : Math.round(productData?.total / 12) || 1;

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex items-center justify-center flex-wrap space-x-4 pt-[48px] pb-[80px]">
      {/* Previous Button */}
      {/* cursor-not-allowed */}

      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className={`w-fit pr-[24px] p-[3px] flex items-center gap-6 ${
          currentPage === 1
            ? 'border border-[#E0E4EA] text-[#15181E] cursor-not-allowed'
            : 'bg-[#037C6A] text-[#ffffff] cursor-pointer'
        }  rounded-[48px] text-[16px]  leading-[150%] `}
      >
        <span
          className={`${
            currentPage === 1 ? 'bg-[#037C6A]' : 'bg-[#FFFFFF] '
          } w-[48px] h-[48px] flex justify-center items-center rounded-full rotate-180`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 22 22"
            fill="none"
          >
            <path
              d="M12.714 7.57141L16.1426 11M16.1426 11L12.714 14.4286M16.1426 11L5.85686 11"
              stroke={currentPage === 1 ? '#fff' : '#15181E'}
              strokeWidth="0.857143"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        {t('pagniation.previous')}
      </button>

      {[...Array(totalPages)].map((_, index) => {
        const page = index + 1;

        const shouldShowPage =
          page === 1 ||
          page === totalPages ||
          Math.abs(page - currentPage) <= 1;

        const isStartDots = page === 2 && currentPage > 3;
        const isEndDots =
          page === totalPages - 1 && currentPage < totalPages - 2;

        if (isStartDots || isEndDots) {
          return (
            <span
              key={page}
              className="w-[56px] h-[56px] flex justify-center items-center"
            >
              ...
            </span>
          );
        }

        if (!shouldShowPage) return null;

        return (
          <button
            key={page}
            onClick={() => handlePageClick(page)}
            className={`w-[56px] h-[56px] flex justify-center items-center px-[20px] rounded-full text-[16px] cursor-pointer ${
              currentPage === page
                ? 'bg-[#037C6A] text-white'
                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100'
            }`}
          >
            {page >= 10 ? page : `0${page}`}
          </button>
        );
      })}

      {/* Next Button */}

      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className={`w-fit pl-[24px] p-[3px] flex items-center gap-6 ${
          currentPage === totalPages
            ? 'border border-[#E0E4EA] text-[#15181E] cursor-not-allowed'
            : 'bg-[#037C6A] text-[#ffffff] cursor-pointer'
        }  rounded-[48px] text-[16px]  leading-[150%]`}
      >
        {t('pagniation.next')}
        <span
          className={`${
            currentPage === totalPages ? 'bg-[#037C6A]' : 'bg-[#FFFFFF] '
          } w-[48px] h-[48px] flex justify-center items-center rounded-full`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 22 22"
            fill="none"
          >
            <path
              d="M12.714 7.57141L16.1426 11M16.1426 11L12.714 14.4286M16.1426 11L5.85686 11"
              stroke={currentPage === totalPages ? '#fff' : '#15181E'}
              strokeWidth="0.857143"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>
    </div>
  );
};

export default PagniationProduct;
