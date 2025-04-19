import React from 'react';
import ReviewModal from './ReviewModal';
import ReviewSuccessModal from './ReviewSuccessModal';
import { useTranslation } from 'react-i18next';

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

const Review = ({ productDetailData }) => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [successReview, setSuccessReview] = React.useState(false);

  const formatUzDate = (dateStr) => {
    const date = new Date(dateStr);
    const day = date.getDate();
    const year = date.getFullYear();
    const monthNames = [
      "yanvar", "fevral", "mart", "aprel", "may", "iyun",
      "iyul", "avgust", "sentabr", "oktabr", "noyabr", "dekabr"
    ];
    const month = monthNames[date.getMonth()];
    return `${day} ${month} ${year}`;
  };

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  return (
    <section className="pt-[48px]">
      <div className="container">
        <div className="flex justify-between items-center flex-wrap gap-4">
          <h2 className="text-[48px] leading-[150%]">
            {t('product_detail.review')}
          </h2>
          <button
            className="w-fit pl-[24px] p-[3px] flex items-center gap-6 bg-[#037C6A] rounded-[48px] text-[16px] text-[#ffffff] leading-[150%] cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          >
            {t('product_detail.review_button')}
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
        <ul className="flex flex-col gap-6 pt-[32px]">
          {productDetailData?.data?.reviews?.map((item) => (
            <li key={item.id} className="pb-4 border-b border-[#E6E9F2]">
              <h4 className="text-[16px] leading-[150%] text-[#15181E]">
                {item.name}
              </h4>
              <span className="flex items-center gap-[2px] mt-1">
                {[...Array(item.stars)].map((_, index) => (
                  <Star key={index} />
                ))}
              </span>

              <h3 className="text-[24px] leading-[140%] text-[#15181E] mt-4">
                {item.title}
              </h3>
              <p className="text-[16px] leading-[150%] text-[#384252] font-[ClashDisplay-Regular] mt-2">
                {item.text}
              </p>
              <p className="text-[14px] leading-[140%] text-[#8292AA] font-[ClashDisplay-Regular] mt-3">
                {localStorage.getItem('lng') === 'uz' ? (
                  <>
                    Yozilgan sana:{' '}
                    <span className="text-[#15181E]">
                    {formatUzDate(item.create_post_at)}
                    </span>
                  </>
                ) : localStorage.getItem('lng') === 'ру' ? (
                  <>
                    Опубликовано:{' '}
                    <span className="text-[#15181E]">
                      {new Date(item.create_post_at).toLocaleDateString(
                        'ru-RU',
                        {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        }
                      )}
                    </span>
                  </>
                ) : (
                  <>
                    Posted on{' '}
                    <span className="text-[#15181E]">
                      {new Date(item.create_post_at).toLocaleDateString(
                        'en-US',
                        {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        }
                      )}
                    </span>
                  </>
                )}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <ReviewModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        setSuccessReview={setSuccessReview}
        productDetailData={productDetailData}
      />
      <ReviewSuccessModal
        successReview={successReview}
        onClose={() => setSuccessReview(false)}
      />
    </section>
  );
};

export default Review;
