import { useEffect, useState } from 'react';
import trash from '../assets/logo/trash.svg';
import BuyModal from './BuyModal';
import BuySuccessModal from './BuySuccessModal';
import { useTranslation } from 'react-i18next';


export default function MyCard({ setAddProduct }) {
  const { t } = useTranslation();
  const [items, setItems] = useState([]);
  const [id, setId] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [successBuy, setSuccessBuy] = useState(false);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setItems(storedItems);
    setAddProduct(storedItems);
  }, [successBuy]);

  useEffect(() => {
    if (id !== null && id !== undefined) {
      const filtered = items.filter((item) => item.id !== id);
      setItems(filtered);
      localStorage.setItem('cartItems', JSON.stringify(filtered));
      setAddProduct(filtered);
    }
  }, [id]);

  const clearCart = () => {
    setItems([]);
    localStorage.removeItem('cartItems');
    setAddProduct([]);
  };

  return (
    <section className="pt-[120px] pb-[70px]">
      <div className="container">
        <h2 className="text-[30px] leading-[120%] text-[#15181E]">
          {t('mycard.title')}
        </h2>

        <div className="flex justify-between items-center  mt-8 mb-6">
          <button
            className="w-[56px] h-[56px] bg-[#FEF2F2] rounded-full p-4 cursor-pointer"
            onClick={clearCart}
          >
            <img src={trash} alt="" />
          </button>
          <button
            disabled={items?.length > 0 ? false : true}
            onClick={() => setIsModalOpen(true)}
            className="w-fit pl-[24px] p-[3px] flex items-center gap-6 bg-[#037C6A] rounded-[48px] text-[16px] text-[#ffffff] leading-[150%] cursor-pointer"
          >
            {t('mycard.button_text')}
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
              src={item?.img}
              alt={item?.name}
              className="w-32 h-32 object-cover rounded-[16px]"
            />

            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-[18px] leading-[150%] text-[#15181E]">
                    {item?.name}
                  </h2>
                  <p className="text-[14px] leading-[140%] text-[#8292AA] mt-1">
                  {t('mycard.card_text1')}: {item?.color}
                  </p>
                </div>
                <button
                  onClick={() => setId(item?.id)}
                  className="text-gray-500 hover:text-red-600 cursor-pointer"
                >
                  ✕
                </button>
              </div>
              <p className="text-[14px] leading-[140%] text-[#8292AA] mt-3">
              {t('mycard.card_text2')}: <span>{item.quantity}</span>
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
