import { useEffect, useState } from 'react';
import trash from '../assets/logo/trash.svg';
import BuyModal from './BuyModal';
import BuySuccessModal from './BuySuccessModal';
import card1 from '../assets/card/card1.png';
import card2 from '../assets/card/card2.png';
import card3 from '../assets/card/card3.png';

const cartItems = [
  {
    id: 1,
    name: 'Yellow Leather Sofa Chair',
    price: 580,
    oldPrice: 680,
    color: 'Brown',
    quantity: 2,
    image: card1,
  },
  {
    id: 2,
    name: 'Green Leather 3 Seater Sofa',
    price: 850,
    oldPrice: 900,
    color: 'Green',
    quantity: 1,
    image: card2,
  },
  {
    id: 3,
    name: 'Round Crystal Lotus Sofa Chair',
    price: 300,
    oldPrice: 340,
    color: 'White',
    quantity: 2,
    image: card3,
  },
];

export default function MyCard() {
  const [items, setItems] = useState(cartItems);
  const [id, setId] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [successBuy, setSuccessBuy] = useState(false);

  useEffect(() => {
    if (id !== null) {
      const filtered = items.filter((item) => item.id !== id);
      setItems(filtered);
    }
  }, [id]);

  const clearCart = () => {
    setItems([]); // cartni bo'shatamiz
  };

  return (
    <section className="pt-[120px] pb-[70px]">
      <div className="container">
        <h2 className="text-[30px] leading-[120%] text-[#15181E]">My Cart</h2>

        <div className="flex justify-between items-center  mt-8 mb-6">
          <button
            className="w-[56px] h-[56px] bg-[#FEF2F2] rounded-full p-4 cursor-pointer"
            onClick={clearCart}
          >
            <img src={trash} alt="" />
          </button>
          <button
            onClick={() => setIsModalOpen(true)}
            className="w-fit pl-[24px] p-[3px] flex items-center gap-6 bg-[#037C6A] rounded-[48px] text-[16px] text-[#ffffff] leading-[150%] cursor-pointer"
          >
            Checkout
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

        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-start gap-4 border border-[#E0E4EA] rounded-[24px] p-4 mb-4"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-32 h-32 object-cover rounded-[16px]"
            />

            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-[18px] leading-[150%] text-[#15181E]">
                    {item.name}
                  </h2>
                  <p className="text-[14px] leading-[140%] text-[#8292AA] mt-1">
                    Color: {item.color}
                  </p>
                </div>
                <button
                  onClick={() => setId(item.id)}
                  className="text-gray-500 hover:text-red-600 cursor-pointer"
                >
                  ✕
                </button>
              </div>
              <p className="text-[14px] leading-[140%] text-[#8292AA] mt-3">
                Quantity: <span>2</span>
              </p>
            </div>
          </div>
        ))}
      </div>

      <BuyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        setSuccessBuy={setSuccessBuy}
      />
      <BuySuccessModal
        successBuy={successBuy}
        onClose={() => setSuccessBuy(false)}
      />
    </section>
  );
}
