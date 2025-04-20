import React, { useState } from 'react';
import success from '../assets/success.svg';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ReviewSuccessModal = ({ successReview, onClose }) => {
  if (!successReview) return null;
  const { t } = useTranslation();

  return (
    <div className="fixed inset-0 z-50 w-full h-full p-[20px]">
      <div
        onClick={onClose}
        className="absolute inset-0 bg-[#0000003D] backdrop-blur-[24px]"
      />
      <div className="absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-t-[32px] rounded-[32px] max-w-[320px] sm:max-w-[495px] h-full max-h-[350px] p-6 flex flex-col items-stretch justify-between">
        <img
          src={success}
          alt="success"
          className="mx-auto"
          width={100}
          height={100}
        />
        <h2 className="text-[24px] sm:text-[30px] leading-[120%] text-[#15181E] text-center">
          {t('review_modal.success_title')}
        </h2>
        {/* Star Rating */}
        {/* Form */}
        <NavLink
          to="/"
          className="w-full pl-[24px] p-[3px] flex items-center justify-between gap-6 bg-[#037C6A] rounded-[48px] text-[16px] text-[#ffffff] leading-[150%] cursor-pointer"
        >
          <span className="mx-auto"> {t('buy_modal.text')}</span>
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
        </NavLink>
      </div>
    </div>
  );
};

export default ReviewSuccessModal;
