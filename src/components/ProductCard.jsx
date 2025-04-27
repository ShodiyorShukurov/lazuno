import { useState } from 'react';
import card1 from '../assets/card/card1.png';
import card2 from '../assets/card/card2.png';
import card3 from '../assets/card/card3.png';
import card4 from '../assets/card/card4.png';
import { useTranslation } from 'react-i18next';
import { NavLink, useNavigate } from 'react-router-dom';
import UseProduct from '../hooks/UseProduct';

const cardArr = [
  {
    id: 1,
    title: 'Blue Leather Sofa Chair',
    img: card1,
  },
  {
    id: 2,
    title: 'Blue Leather Sofa Chair',
    img: card2,
  },
  {
    id: 3,
    title: 'Blue Leather Sofa Chair',
    img: card3,
  },
  {
    id: 4,
    title: 'Blue Leather Sofa Chair',
    img: card4,
  },
  {
    id: 5,
    title: 'Blue Leather Sofa Chair',
    img: card1,
  },
  {
    id: 6,
    title: 'Blue Leather Sofa Chair',
    img: card2,
  },
  {
    id: 7,
    title: 'Blue Leather Sofa Chair',
    img: card3,
  },
  {
    id: 8,
    title: 'Blue Leather Sofa Chair',
    img: card4,
  },
];

const ProductCard = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [id, setId] = useState('');
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { productData } = UseProduct();

  return (
    <section className="pt-[80px]">
      <div className="container">
        <h2 className="text-[32px] sm:text-[48px] leading-[126%] mb-[36px] md:mb-[48px]">
          {t('latest_collection.title')}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          {productData?.data?.slice(0, 8)?.map((item) => (
            <div
              key={item.id}
              className="relative rounded-[16px] overflow-hidden hover:scale-[0.97] transition-transform duration-300 ease-in-out cursor-pointer"
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
              <div className="relative overflow-hidden">
                <img
                  src={item?.image_url[0]}
                  alt={item.title}
                  className="w-full max-w-[300px] h-[370px] rounded-[16px]"
                  width={370}
                />
                <div className="absolute inset-0 bg-[#0000000A] z-0 rounded-[20px]" />
              </div>
              <button
                className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-[#037C6A] text-white text-[16px] leading-[150%] py-[16px] transition-all duration-500 ease-in-out w-full rounded-[16px] cursor-pointer ${
                  isHovered && id === item.id
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-4'
                }`}
              >
                {t('latest_collection.button_text')}
              </button>
              <div className="mt-[8px] z-40">
                <h3 className="text-[16px] text-[#15181E] leading-[150%] pl-0.5">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
        <NavLink
          to={'/category/all'}
          className="w-fit pl-[24px] p-[3px] flex items-center gap-6 bg-[#037C6A] rounded-[48px] text-[16px] text-[#ffffff] leading-[150%] mx-auto cursor-pointer mt-[24px] md:my-[48px]"
        >
          {t('latest_collection.button_text2')}
          <span className="bg-[#FFFFFF] w-[48px] h-[48px] flex justify-center items-center rounded-full">
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
    </section>
  );
};

export default ProductCard;
