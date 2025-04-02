import { useState } from 'react';
import card1 from '../assets/card/card1.png';
import card2 from '../assets/card/card2.png';
import card3 from '../assets/card/card3.png';
import card4 from '../assets/card/card4.png';
import arrow from '../assets/logo/arrow-right.svg';

const cardArr = [
  {
    id: 1,
    title: 'Blue Leather Sofa Chair',
    price: '$580.00',
    old_price: '$600.00',
    img: card1,
  },
  {
    id: 2,
    title: 'Blue Leather Sofa Chair',
    price: '$580.00',
    old_price: '$600.00',
    img: card2,
  },
  {
    id: 3,
    title: 'Blue Leather Sofa Chair',
    price: '$580.00',
    old_price: '$600.00',
    img: card3,
  },
  {
    id: 4,
    title: 'Blue Leather Sofa Chair',
    price: '$580.00',
    old_price: '$600.00',
    img: card4,
  },
  {
    id: 5,
    title: 'Blue Leather Sofa Chair',
    price: '$580.00',
    old_price: '$600.00',
    img: card1,
  },
  {
    id: 6,
    title: 'Blue Leather Sofa Chair',
    price: '$580.00',
    old_price: '$600.00',
    img: card2,
  },
  {
    id: 7,
    title: 'Blue Leather Sofa Chair',
    price: '$580.00',
    old_price: '$600.00',
    img: card3,
  },
  {
    id: 8,
    title: 'Blue Leather Sofa Chair',
    price: '$580.00',
    old_price: '$600.00',
    img: card4,
  },
];

const ProductCard = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [id, setId] = useState('');

  return (
    <section className="pt-[80px]">
      <div className="container">
        <h2 className="text-[48px] leading-[126%] mb-[36px] md:mb-[48px]">
          Latest Collections
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          {cardArr?.map((item) => (
            <div
              key={item.id}
              className="relative rounded-[16px]  overflow-hidden transition-all duration-300 cursor-pointer"
              onMouseEnter={() => {
                setId(item.id);
                setIsHovered(true);
              }}
              onMouseLeave={() => {
                setId('');
                setIsHovered(false);
              }}
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full max-w-[300px] h-full max-h-[370px] rounded-[20px]"
                width={300}
              />
              <button
                className={`absolute bottom-14 left-1/2 transform -translate-x-1/2 bg-[#037C6A] text-white text-[16px] leading-[150%] py-[16px] transition-all duration-500 ease-in-out w-full rounded-[16px] cursor-pointer ${
                  isHovered && id === item.id
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-4'
                }`}
              >
                Buy Now
              </button>
              <div className="mt-[8px]">
                <h3 className="text-[16px] text-[#15181E] leading-[150%]">
                  {item.title}
                </h3>
                <p className="text-[16px] text-[#013A32] leading-[150%] inline-block">
                  {item.price}
                </p>
                <p className="text-[16px] text-[#8292AA] leading-[150%] line-through inline-block ml-1">
                  {item.old_price}
                </p>
              </div>
            </div>
          ))}
        </div>
        <button className="w-fit pl-[24px] p-[3px] flex items-center gap-6 bg-[#037C6A] rounded-[48px] text-[16px] text-[#ffffff] leading-[150%] mx-auto cursor-pointer mt-[24px] md:my-[48px]">
          View All
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
                stroke-width="0.857143"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </button>
      </div>
    </section>
  );
};

export default ProductCard;
