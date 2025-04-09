import React, { useState, useRef } from 'react';
import plus from '../assets/logo/plus.svg';
import minus from '../assets/logo/minus.svg';

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

  const accardion = [
    {
      id: 1,
      title: 'Descriptions',
      text: `The Diamond Scattered Stud Earrings are crafted from high-quality gold, featuring a unique pattern of brilliant round diamonds totaling approximately 1.06 carats. Long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.`,
    },
    {
      id: 2,
      title: 'Shipping',
      text: `Shipping info with detailed explanation...`,
    },
    {
      id: 3,
      title: 'Packaging',
      text: `How it's packed info goes here...`,
    },
    {
      id: 4,
      title: 'Return & Cancellation',
      text: `Policy on returns and cancellation info...`,
    },
  ];

  return (
    <section className="pt-[48px]">
      <div className="container">
        {accardion.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={item.id}
              className="mb-2"
            >
              <button
                className="w-full flex items-center justify-between text-left text-[#15181E] text-[16px] leading-[150%] transition cursor-pointer"
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                {item.title}
                <img src={isOpen ? minus : plus} alt="toggle-icon" />
              </button>

              <div
                ref={(el) => (contentRefs.current[index] = el)}
                style={{
                  maxHeight: isOpen
                    ? `${contentRefs.current[index]?.scrollHeight}px`
                    : '0px',
                  transition: 'max-height 0.4s ease',
                }}
                className={`overflow-hidden text-[14px] leading-[140%] text-[#384252] font-[ClashDisplay-Regular] ${isOpen ? 'border-b border-[#E0E4EA] pb-4' : ''}`}
              >
                <div className="py-3">{item.text}</div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Accordion;
