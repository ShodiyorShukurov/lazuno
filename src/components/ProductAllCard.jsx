import React from 'react';
import right from '../assets/logo/direction-right 2.svg';
import { useTranslation } from 'react-i18next';
import PagniationProduct from './PagniationProduct';
import ProductComponents from './ProductComponents';
import { useNavigate } from 'react-router-dom';

const ProductAllCards = ({
  setOpen,
  productData,
  currentPage,
  setCurrentPage,
}) => {
  const { t } = useTranslation();
  const [isHovered, setIsHovered] = React.useState(false);
  const [id, setId] = React.useState('');
  const navigate = useNavigate();

  return (
    <section className="pt-[120px]">
      <div className="container">
        <h5 className="hidden sm:flex  text-[14px] leading-[140%] text-[#15181E] font-[ClashDisplay-Regular]">
          {t('category.page_title')} <img src={right} alt="right" />{' '}
          {t('latest_collection.title2')}
        </h5>
        <ProductComponents setOpen={setOpen} productData={productData} />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-[48px]">
          {productData?.data?.map((item) => (
            <div
              key={item.id}
              className="relative rounded-[16px]  overflow-hidden hover:scale-[0.97] transition-transform duration-300 ease-in-out cursor-pointer"
              onMouseEnter={() => {
                setId(item.id);
                setIsHovered(true);
              }}
              onMouseLeave={() => {
                setId('');
                setIsHovered(false);
              }}
              onClick={() => navigate('/product/' + item.id)}
            >
              <img
                src={item?.image_url[0]}
                alt={item.title}
                className="w-full max-w-[300px] h-[370px] rounded-[20px]"
                width={300}
              />
              <button
                className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-[#037C6A] text-white text-[16px] leading-[150%] py-[16px] transition-all duration-500 ease-in-out w-full rounded-[16px] cursor-pointer ${
                  isHovered && id === item.id
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-4'
                }`}
              >
                {t('latest_collection.button_text')}
              </button>
              <div className="mt-[8px]">
                <h3 className="text-[16px] text-[#15181E] leading-[150%] pl-0.5">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <PagniationProduct
          productData={productData}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </section>
  );
};

export default ProductAllCards;
