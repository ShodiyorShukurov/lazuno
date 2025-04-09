import React, { useState } from 'react';

// import { FaStar } from 'react-icons/fa';

const ReviewModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (value) => {
    setRating(value);
  };
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [review, setReview] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { rating, name, email, review };
    console.log('Submitted review:', data);
   
    setRating(0);
    setName('');
    setEmail('');
    setReview('');
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
          Write A Review
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
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 text-[14px] leading-[140%] text-[#8292AA] font-[ClashDisplay-Regular]"
        >
          <label htmlFor="name">
            Name
            <input
              type="text"
              id="name"
              className="w-full border border-[#E0E4EA] rounded-[16px] text-[16px] mt-1 text-[#15181E] px-4 py-3 focus:outline-none focus:ring"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label htmlFor="email">
            Email Address
            <input
              type="email"
              id="email"
              className="w-full border border-[#E0E4EA] rounded-[16px] text-[16px] mt-1 text-[#15181E] px-4 py-3 focus:outline-none focus:ring"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <textarea
            placeholder="Enter Your Review"
            maxLength={100}
            rows={3}
            className="w-full border border-[#E0E4EA] rounded-[16px] text-[16px] mt-1 text-[#15181E] px-4 py-3 focus:outline-none focus:ring resize-none"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            disabled={review == 100}
            required
          />
          <div className="text-right text-sm text-gray-400">
            {review.length}/100
          </div>

          <button className="w-full pl-[24px] p-[3px] flex items-center justify-between gap-6 bg-[#15181E] rounded-[48px] text-[16px] text-[#ffffff] leading-[150%] cursor-pointer">
            <span className="mx-auto">Submit</span>
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
