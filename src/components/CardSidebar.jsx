import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const CartSidebar = ({ openSidebar, setOpenSidebar, addProduct }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [cartItems, setCartItems] = React.useState([]);

  React.useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(storedItems);
  }, [addProduct]);

  return (
    // Overlay
    <div
      className={`fixed inset-0 z-50 transition-all duration-1000 ${
        !openSidebar ? 'hidden' : ''
      }`}
    >
      <div
        onClick={() => setOpenSidebar(false)}
        className="absolute inset-0 bg-[#0000003D] backdrop-blur-[24px]"
      />

      <div className="absolute right-0 bottom-0 sm:top-0 h-full max-h-[630px] sm:max-h-full w-full sm:max-w-md bg-white rounded-tr-[32px] sm:rounded-tr-none sm:rounded-bl-[32px] rounded-tl-[32px] p-6 overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          {localStorage.getItem('lng') == 'en' ? (
            <h2 className="text-[18px] leading-[150%]">
              You have{' '}
              <span className="text-[#037C6A]">{cartItems.length} items</span>{' '}
              in your cart
            </h2>
          ) : localStorage.getItem('lng') == 'ру' ? (
            <h2 className="text-[18px] leading-[150%]">
            У вас в корзине{' '}
            <span className="text-[#037C6A]">{cartItems.length} товара</span>{' '}
          </h2>
          ) : (
             <h2 className="text-[18px] leading-[150%]">
             Savatingizda{' '}
             <span className="text-[#037C6A]">{cartItems.length} dona</span>{' '}
             mahsulot bor
           </h2>
          )}
          <button
            onClick={() => setOpenSidebar(false)}
            className="cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.05703 9.05718C9.57773 8.53648 10.4219 8.53648 10.9426 9.05718L15.9998 14.1144L21.057 9.05718C21.5777 8.53648 22.4219 8.53648 22.9426 9.05718C23.4633 9.57788 23.4633 10.4221 22.9426 10.9428L17.8855 16L22.9426 21.0572C23.4633 21.5779 23.4633 22.4221 22.9426 22.9428C22.4219 23.4635 21.5777 23.4635 21.057 22.9428L15.9998 17.8856L10.9426 22.9428C10.4219 23.4635 9.57773 23.4635 9.05703 22.9428C8.53633 22.4221 8.53633 21.5779 9.05703 21.0572L14.1142 16L9.05703 10.9428C8.53633 10.4221 8.53633 9.57788 9.05703 9.05718Z"
                fill="#15181E"
              />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex gap-2 border-b border-[#E0E4EA] first:border-t first:pt-6 pb-4"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-[80px] h-[80px] object-cover rounded-[12px]"
              />
              <div className="flex-1">
                <h3 className="text-[16px] leading-[150%] text-[#15181E]">
                  {item.name}
                </h3>
                <p className="text-[16px] leading-[150%] text-[#384252] mt-1">
                  QTY: {item.quantity}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="fixed bottom-0 right-0 w-full sm:max-w-md bg-white p-4 z-50 border-t border-[#E0E4EA]">
          <div className="flex flex-col sm:flex-row gap-2 justify-center">
            <button
              className={`w-full ${
                localStorage.getItem('lng') == 'ру' ? 'pl-0' : 'pl-[24px]'
              }  p-[3px] flex items-center justify-between gap-6 bg-white rounded-[48px] text-[16px] text-[#15181E] leading-[150%] cursor-pointer border border-[#E0E4EA]`}
              onClick={() => {
                setOpenSidebar(false);
                navigate('/my-card');
              }}
            >
              {t('sidebar.button_text')}
              <span className="bg-[#037C6A] w-[48px] h-[48px] flex justify-center items-center rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 22 22"
                  fill="none"
                >
                  <path
                    d="M12.714 7.57141L16.1426 11M16.1426 11L12.714 14.4286M16.1426 11L5.85686 11"
                    stroke="#ffffff"
                    strokeWidth="0.857143"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
            <button className="w-full pl-[24px] p-[3px] flex items-center justify-between gap-6 bg-[#037C6A] rounded-[48px] text-[16px] text-[#ffffff] leading-[150%] cursor-pointer border">
              {t('sidebar.button_text2')}
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
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSidebar;
