import React from 'react';
import right from '../assets/logo/direction-right 2.svg';
import CategoryComponents from './CategoryComponents';
import { useTranslation } from 'react-i18next';
import PagniationCategory from './PagniationCategory';
import { useNavigate } from 'react-router-dom';

const CategoryAllCards = ({ setOpen, categoryData }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <section className="pt-[120px]">
      <div className="container">
        <h5 className="hidden sm:flex  text-[14px] leading-[140%] text-[#15181E] font-[ClashDisplay-Regular]">
          {t('category.page_title')} <img src={right} alt="right" /> {t('category.page_title2')}
        </h5>
        <CategoryComponents setOpen={setOpen} data={categoryData} />

        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-[17px] mt-[48px]">
          {categoryData?.data?.map((item) => (
            <div
              key={item.id}
              className="relative bg-cover bg-center bg-no-repeat max-h-[450px] rounded-[32px] overflow-hidden sm:h-auto project-card cursor-pointer hover:scale-[0.97] transition-transform duration-300 ease-in-out"
              style={{
                backgroundImage: `url(${item.image_url})`,
                height: '450px',
              }}
              onClick={() => navigate('/category/' + item.id)}
            >
              <div
                style={{
                  background:
                    'linear-gradient(180deg, rgba(0, 0, 0, 0) 58.7%, rgba(0, 0, 0, 0.68) 104.82%)',
                }}
                className="absolute inset-0 z-0"
              ></div>
              <div className="absolute flex bottom-0 left-0 right-0 h-auto pl-[24px] pb-[24px] text-white text-[24px] leading-[140%]">
                {item.title}
              </div>
            </div>
          ))}
        </div>

        <PagniationCategory categoryData={categoryData} />
      </div>
    </section>
  );
};

export default CategoryAllCards;
