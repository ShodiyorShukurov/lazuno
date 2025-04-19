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

const Review = ({productDetailData}) => {
  const {t} = useTranslation()
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [successReview, setSuccessReview]= React.useState(false)

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  return (
    <section className="pt-[48px]">
      <div className="container">
        <div className="flex justify-between items-center flex-wrap gap-4">
          <h2 className="text-[48px] leading-[150%]">{t('product_detail.review')}</h2>
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
          <li className="pb-4 border-b border-[#E6E9F2]">
            <h4 className="text-[16px] leading-[150%] text-[#15181E]">
              Jacob Jones
            </h4>
            <span className="flex items-center gap-[2px] mt-1">
              {[...Array(0)].map((_, index) => (
                <Star key={index} />
              ))}
            </span>

            <h3 className="text-[24px] leading-[140%] text-[#15181E] mt-4">
              “Quality of The Sofa is Truly Amazing”
            </h3>
            <p className="text-[16px] leading-[150%] text-[#384252] font-[ClashDisplay-Regular] mt-2">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </p>
            <p className="text-[14px] leading-[140%] text-[#8292AA] font-[ClashDisplay-Regular] mt-3">
              Review by <span className="text-[#15181E]">Melta</span> Posted on{' '}
              <span className="text-[#15181E]">Nov 20, 2024</span>{' '}
            </p>
          </li>
          <li className="pb-4 border-b border-[#E6E9F2]">
            <h4 className="text-[16px] leading-[150%] text-[#15181E]">
              Jacob Jones
            </h4>
            <span className="flex items-center gap-[2px] mt-1">
              {[...Array(4)].map((_, index) => (
                <Star key={index} />
              ))}
            </span>

            <h3 className="text-[24px] leading-[140%] text-[#15181E] mt-4">
              “Quality of The Sofa is Truly Amazing”
            </h3>
            <p className="text-[16px] leading-[150%] text-[#384252] font-[ClashDisplay-Regular] mt-2">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </p>
            <p className="text-[14px] leading-[140%] text-[#8292AA] font-[ClashDisplay-Regular] mt-3">
              Review by <span className="text-[#15181E]">Melta</span> Posted on{' '}
              <span className="text-[#15181E]">Nov 20, 2024</span>{' '}
            </p>
          </li>
        </ul>
      </div>

      <ReviewModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} setSuccessReview={setSuccessReview}/>
       <ReviewSuccessModal successReview={successReview} onClose={()=>setSuccessReview(false)}/>
    </section>
  );
};

export default Review;
