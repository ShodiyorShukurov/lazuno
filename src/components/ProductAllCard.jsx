import React from 'react';
import right from '../assets/logo/direction-right 2.svg';
import card1 from '../assets/card/card1.png';
import card2 from '../assets/card/card2.png';
import card3 from '../assets/card/card3.png';
import card4 from '../assets/card/card4.png';
import { useTranslation } from 'react-i18next';
import Pagination from './Pagniation';
import ProductComponents from './ProductComponents';
import { useNavigate } from 'react-router-dom';

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
const ProductAllCards = ({setOpen}) => {
  const { t } = useTranslation();
    const [isHovered, setIsHovered] = React.useState(false);
    const [id, setId] = React.useState('');
    const navigate = useNavigate()

  return (
    <section className="pt-[120px]">
      <div className="container">
        <h5 className="hidden sm:flex  text-[14px] leading-[140%] text-[#15181E] font-[ClashDisplay-Regular]">
          Home <img src={right} alt="right" /> Product
        </h5>
        <ProductComponents setOpen={setOpen}/>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-[48px]">
          {cardArr?.map((item) => (
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
              onClick={()=>navigate('/product/1')}
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full max-w-[300px] h-full max-h-[370px] rounded-[20px]"
                width={300}
              />
              <button
                className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-[#037C6A] text-white text-[16px] leading-[150%] py-[16px] transition-all duration-500 ease-in-out w-full rounded-[16px] cursor-pointer ${
                  isHovered && id === item.id
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-4'
                }`}
              >
                Buy Now
              </button>
              <div className="mt-[8px]">
                <h3 className="text-[16px] text-[#15181E] leading-[150%] pl-0.5">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <Pagination/>
      </div>
    </section>
  );
};

export default ProductAllCards;
