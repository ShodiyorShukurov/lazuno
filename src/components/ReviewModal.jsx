import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { API_PATH } from '../utils/constants';
import { useQueryClient  } from '@tanstack/react-query';

const ReviewModal = ({
  isOpen,
  onClose,
  setSuccessReview,
  productDetailData,
}) => {
  if (!isOpen) return null;
  const queryClient = useQueryClient ();

  const { t } = useTranslation();

  const [rating, setRating] = useState(1);
  const [hover, setHover] = useState(1);

  const handleClick = (value) => {
    setRating(value);
  };
  const [nameError, setErrorName] = useState('');
  const [email, setEmail] = useState('');
  const [title, setTitle] = useState('');
  const [review, setReview] = useState('');
  const [reviewCount, setReviewCount] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nameText = e.target.name.value;
    const email = e.target.email.value;
    const review = e.target.review.value;
    const titleText = e.target.titleText.value;

    if (!nameText && !title && !email && !review) {
      setErrorName(t('review_modal.name_error4'));
      setTitle(t('review_modal.form_title_error3'));
      setEmail(t('review_modal.email_error2'));
      setReview(t('review_modal.message_error2'));
      return;
    }
    try {
      const res = await fetch(API_PATH + '/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: nameText,
          email: email,
          title: titleText,
          text: review,
          stars: rating,
          product_id: productDetailData?.data?.id,
        }),
      });
      const data = res.json();

      if (data) {
        queryClient.invalidateQueries({ queryClient: ['productDetailData  '] });
        setSuccessReview(true);
        onClose();
      }
    } catch (error) {
      console.log(error);
    } finally {
      setRating('');
      setErrorName('');
      setEmail('');
      setReview('');
    }
  };

  return (
    <div className="fixed inset-0 z-50 w-full h-full">
      <div
        onClick={onClose}
        className="absolute inset-0 bg-[#0000003D] backdrop-blur-[24px]"
      />
      <div className="absolute modal w-full sm:top-1/2 sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:-translate-y-1/2 bg-white rounded-t-[32px] sm:rounded-[32px] sm:w-[495px] p-6">
        <button
          className="absolute top-4 right-4 cursor-pointer"
          onClick={onClose}
        >
          <svg
            className="w-[24px] h-[24px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.05703 9.05718C9.57773 8.53648 10.4219 8.53648 10.9426 9.05718L15.9998 14.1144L21.057 9.05718C21.5777 8.53648 22.4219 8.53648 22.9426 9.05718C23.4633 9.57788 23.4633 10.4221 22.9426 10.9428L17.8855 16L22.9426 21.0572C23.4633 21.5779 23.4633 22.4221 22.9426 22.9428C22.4219 23.4635 21.5777 23.4635 21.057 22.9428L15.9998 17.8856L10.9426 22.9428C10.4219 23.4635 9.57773 23.4635 9.05703 22.9428C8.53633 22.4221 8.53633 21.5779 9.05703 21.0572L14.1142 16L9.05703 10.9428C8.53633 10.4221 8.53633 9.57788 9.05703 9.05718Z"
              fill="#15181E"
            />
          </svg>
        </button>
        <h2 className="text-[24px] sm:text-[30px] leading-[120%] text-[#15181E] mb-4">
          {t('review_modal.title')}
        </h2>
        {/* Star Rating */}
        <div className="flex gap-1 mb-4 pt-6 border-t border-[#E0E4EA]">
          {[...Array(5)].map((_, index) => {
            const starValue = index + 1;
            const isFilled = starValue <= (hover || rating);

            return (
              <svg
                key={index}
                onClick={() => handleClick(starValue)}
                onMouseEnter={() => setHover(starValue)}
                onMouseLeave={() => setHover(0)}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="cursor-pointer transition-transform hover:scale-110"
              >
                <path
                  d="M12 2L14.2451 8.90983H21.5106L15.6327 13.1803L17.8779 20.0902L12 15.8197L6.12215 20.0902L8.36729 13.1803L2.48944 8.90983H9.75486L12 2Z"
                  fill={isFilled ? '#037C6A' : '#e5e7eb'}
                />
              </svg>
            );
          })}
        </div>
        {/* Form */}
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="flex flex-col gap-4 text-[14px] leading-[140%] text-[#8292AA] font-[ClashDisplay-Regular]"
        >
          <label htmlFor="name">
            {t('review_modal.name')}
            <input
              type="text"
              id="name"
              className="w-full border border-[#E0E4EA] rounded-[16px] text-[16px] mt-1 text-[#15181E] px-4 py-3 focus:outline-none focus:ring"
              onChange={(e) => {
                const value = e.target.value;

                const isOnlyLetters = /^[a-zA-Z]+$/.test(value);
                const isLongEnough = value.length >= 5;

                const hasUpper = /[A-Z]/.test(value);
                const hasLower = /[a-z]/.test(value);

                if (!isOnlyLetters) {
                  setErrorName(t('review_modal.name_error1'));
                } else if (!isLongEnough) {
                  setErrorName(t('review_modal.name_error2'));
                } else if (!hasUpper && !hasLower) {
                  setErrorName(t('review_modal.name_error3'));
                } else {
                  setErrorName('');
                }
              }}
            />
            {nameError.length > 0 && (
              <p className="text-red-700 mt-1 text-[14px]">{nameError}</p>
            )}
          </label>

          <label htmlFor="email">
            {t('review_modal.email')}
            <input
              type="email"
              id="email"
              className="w-full border border-[#E0E4EA] rounded-[16px] text-[16px] mt-1 text-[#15181E] px-4 py-3 focus:outline-none focus:ring"
              onChange={(e) => {
                const value = e.target.value;
                const emailRegex =
                  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                if (!emailRegex.test(value)) {
                  setEmail(t('review_modal.email_error1'));
                } else {
                  setEmail('');
                }
              }}
            />
            {email.length > 0 && (
              <p className="text-red-700 mt-1 text-[14px]">{email}</p>
            )}
          </label>

          <label htmlFor="titleText" className=" flex flex-col w-full">
            {t('review_modal.form_title')}
            <input
              type="titleText"
              id="titleText"
              className="w-full border border-[#E0E4EA] rounded-[16px] text-[16px] mt-1 text-[#15181E] px-4 py-3 focus:outline-none focus:ring"
              onChange={(e) => {
                const value = e.target.value;

                const isLongEnough = value.length >= 5;
                const hasUpper = /[A-Z]/.test(value);
                const hasLower = /[a-z]/.test(value);

                if (!isLongEnough) {
                  setTitle(t('review_modal.form_title_error1'));
                } else if (!hasUpper && !hasLower) {
                  setTitle(t('review_modal.form_title_error2'));
                } else {
                  setTitle('');
                }
              }}
            />
            {title.length > 0 && (
              <p className="text-red-700 mt-1 text-[14px]">{title}</p>
            )}
          </label>

          <textarea
            placeholder={t('review_modal.message')}
            maxLength={100}
            rows={3}
            className="w-full border border-[#E0E4EA] rounded-[16px] text-[16px] mt-1 text-[#15181E] px-4 py-3 focus:outline-none focus:ring resize-none"
            id="review"
            disabled={review == 100}
            onChange={(e) => {
              setReviewCount(e.target.value.length);
              const value = e.target.value;
              if (value.length < 10) {
                setReview(t('review_modal.message_error1'));
              } else {
                setReview('');
              }
            }}
          />
          {review.length > 0 && (
            <p className="text-red-700 mt-1 text-[14px]">{review}</p>
          )}
          <div className="text-right text-sm text-gray-400">
            {reviewCount}/100
          </div>

          <button className="w-full pl-[24px] p-[3px] flex items-center justify-between gap-6 bg-[#15181E] rounded-[48px] text-[16px] text-[#ffffff] leading-[150%] cursor-pointer">
            <span className="mx-auto">{t('review_modal.submit')}</span>
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
        </form>
      </div>
    </div>
  );
};

export default ReviewModal;
