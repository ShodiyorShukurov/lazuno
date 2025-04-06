import React from 'react';
import right from '../assets/logo/direction-right 2.svg';
import ProductComponents from './ProductComponents';
import item1 from '../assets/carousel/item1.png';
import item2 from '../assets/carousel/item2.png';
import item3 from '../assets/carousel/item3.png';
import item4 from '../assets/carousel/item3.png';
import { useTranslation } from 'react-i18next';

const items = [
  { id: 1, name: 'Isabella Chair', img: item1 },
  { id: 2, name: 'Palma', img: item2 },
  { id: 3, name: 'Berry', img: item3 },
  { id: 4, name: 'Luxury Sofa', img: item4 },
  { id: 5, name: 'Luxury Sofa', img: item1 },
  { id: 6, name: 'Luxury Sofa', img: item3 },
];
const ProductAllCards = ({setOpen}) => {
  const { t } = useTranslation();

  return (
    <section className="pt-[24px]">
      <div className="container">
        <h5 className="hidden sm:flex  text-[14px] leading-[140%] text-[#15181E] font-[ClashDisplay-Regular]">
          Home <img src={right} alt="right" /> Shop
        </h5>
        <ProductComponents setOpen={setOpen}/>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[17px] mt-[48px]">
          {items.map((item) => (
            <div
              key={item.id}
              className="relative bg-cover bg-center bg-no-repeat max-h-[450px] rounded-[32px] overflow-hidden sm:h-auto project-card cursor-pointer"
              style={{
                backgroundImage: `url(${item.img})`,
                height: '450px',
              }}
            >
              <div
                style={{
                  background:
                    'linear-gradient(180deg, rgba(0, 0, 0, 0) 58.7%, rgba(0, 0, 0, 0.68) 104.82%)',
                }}
                className="absolute inset-0 z-0"
              ></div>
              <div className="absolute flex bottom-0 left-0 right-0 h-auto pl-[24px] pb-[24px] text-white text-[24px] leading-[140%]">
                Modern Sofa Set
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductAllCards;
