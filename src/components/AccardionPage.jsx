import React, { useState, useRef } from 'react';
import plus from '../assets/logo/plus.svg';
import minus from '../assets/logo/minus.svg';
import { useTranslation } from 'react-i18next';

const Accordion = ({productDetailData}) => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

  const accardion = [
    {
      id: 1,
      title: t('accardion.descriptions'),
      text: productDetailData?.data?.description
    },
    {
      id: 2,
      title: t('accardion.shipping_title'),
      text: t('accardion.shipping'),
    },
    {
      id: 3,
      title: t('accardion.packaging_title'),
      text: t('accardion.packaging'),
    },
    {
      id: 4,
      title: t('accardion.return_title'),
      text: t('accardion.return'),
    },
  ];

  return (
    <section className="pt-[48px]">
      <div className="container">
        {accardion.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={item.id} className="mb-2">
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
                className={`overflow-hidden text-[14px] leading-[140%] text-[#384252] font-[ClashDisplay-Regular] ${
                  isOpen ? 'border-b border-[#E0E4EA] pb-4' : ''
                }`}
              >
                <div
                  className="py-3"
                  dangerouslySetInnerHTML={{ __html: item.text }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Accordion;
