import React, { useState } from 'react';
import uzb from '../assets/logo/Uzbekistan.svg';
import rus from '../assets/logo/Russia.svg';
import { format, useMask } from '@react-input/mask';
import { useTranslation } from 'react-i18next';
import { BOT_TOKEN, CHAT_ID, TELEGRAM_LINK } from '../utils/constants';

const options = {
  UZB: {
    mask: '(__) ___-__-__',
    replacement: { _: /\d/ },
  },
  RUS: {
    mask: '(___) ___-__-__',
    replacement: { _: /\d/ },
  },
};

const BuyModal = ({ isOpen, onClose, setSuccessBuy }) => {
  if (!isOpen) return null;

  const { t } = useTranslation();

  const phoneArr = [
    {
      id: 1,
      code: '+998',
      country: 'UZB',
      img: uzb,
      exaple: '77 777 77 77',
      mask: '+998 __ ___ __ __',
    },
    {
      id: 2,
      code: '+7',
      country: 'RUS',
      img: rus,
      exaple: '777 777 77 77',
      mask: '+7 ___ ___ __ __',
    },
  ];

  const [isOpenPhone, setIsOpenPhone] = React.useState(false);
  const [selectPhone, setSelectPhone] = React.useState(phoneArr[0]);
  const [error, setError] = React.useState('');

  const inputRef = useMask(options[selectPhone.country]);
  let defaultValue = format('', options[selectPhone.country]);

  const [nameError, setErrorName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const phoneNumber = e.target.phone.value;
    if (nameError || error) {
      return;
    }
    if (!name && !phoneNumber) {
      setErrorName(t('review_modal.name_error4'));
      setError(t('footer.error1'));
      return;
    }

    const localStorageData = localStorage.getItem('cartItems');
    const cartItems = localStorageData ? JSON.parse(localStorageData) : [];

    let productList = cartItems
      .map((item, index) => {
        return `\n${index + 1}) Product Title: ${item.name}\n- Soni: ${
          item.quantity
        }\n- Link: <a href="${item.url}">${item.url}</a>`;
      })
      .join('\n\n');

    try {
      const phone =
        selectPhone.country === 'UZB'
          ? `+998${phoneNumber}`
          : `+7${phoneNumber}`;
      const my_text = `🚚 Buyurtma xabari:\n- Ism: ${name}\n- Telefon raqam: <a href="tel:${phone}">${phone}</a>\n- Mahsulotlar:\n${productList}`;
      const res = await fetch(
        `${TELEGRAM_LINK}${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${encodeURIComponent(
          my_text
        )}&parse_mode=HTML`
      );

      const data = await res.json();
      if (data) {
        localStorage.clear('cartItems');
        setSuccessBuy(true);
        onClose();
        setErrorName('');
        setError('');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="fixed inset-0 z-50 w-full h-full">
      <div
        onClick={onClose}
        className="absolute inset-0 bg-[#0000003D] backdrop-blur-[24px]"
      />
      <div className="absolute modal w-full sm:top-1/2 sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:-translate-y-1/2 bg-white rounded-t-[32px] sm:rounded-[32px] sm:w-[495px] p-6">
        <button
          className="absolute top-4 right-4 cursor-pointer"
          onClick={onClose}
        >
          <svg
            className="w-[24px] h-[24px]"
            xmlns="http://www.w3.org/2000/svg"
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
        <h2 className="text-[24px] sm:text-[30px] leading-[120%] text-[#15181E] mb-4">
          {t('buy_modal.title')}
        </h2>

        {/* Form */}
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="flex flex-col gap-4 text-[14px] leading-[140%] text-[#8292AA] font-[ClashDisplay-Regular]"
        >
          <label htmlFor="name">
            {t('review_modal.name')}
            <input
              type="text"
              id="name"
              className="w-full border border-[#E0E4EA] rounded-[16px] text-[16px] mt-1 text-[#15181E] px-4 py-3 focus:outline-none focus:ring"
              onChange={(e) => {
                const value = e.target.value;

                const isOnlyLetters = /^[a-zA-Z]+$/.test(value);
                const isLongEnough = value.length >= 5;

                const hasUpper = /[A-Z]/.test(value);
                const hasLower = /[a-z]/.test(value);

                if (!isOnlyLetters) {
                  setErrorName(t('review_modal.name_error1'));
                } else if (!isLongEnough) {
                  setErrorName(t('review_modal.name_error2'));
                } else if (!hasUpper && !hasLower) {
                  setErrorName(t('review_modal.name_error3'));
                } else {
                  setErrorName('');
                }
              }}
            />
            {nameError.length > 0 && (
              <p className="text-red-700 mt-1 text-[14px]">{nameError}</p>
            )}
          </label>

          <label htmlFor="phone" className=" flex flex-col w-full">
            {t('contact-us.label2')}
            <div className="mt-3 flex items-center justify-center rounded-[24px] w-full border border-[#E0E4EA]  gap-4 relative">
              <div
                className="flex items-center pl-3 py-[12px]"
                onClick={() => {
                  setIsOpenPhone(!isOpenPhone);
                  defaultValue = format('', options[selectPhone.country]);
                }}
              >
                <img
                  src={selectPhone.img}
                  alt={selectPhone.country}
                  className="w-[26px] h-[20px] mr-2 object-cover rounded-[4px]"
                />
                <span className="text-[#15181E] text-[16px] pr-2 leading-[150%] border-r-2 border-[#15181E] ">
                  {selectPhone.code}
                </span>
                {isOpenPhone && (
                  <div className="absolute top-15 w-[100px] border border-[#E0E4EA] rounded-[16px] bg-[#fff] p-3 left-0">
                    {phoneArr.map(
                      (item) =>
                        selectPhone.id !== item.id && (
                          <div
                            className="flex"
                            key={item.id}
                            onClick={() => {
                              setSelectPhone(item);
                              setIsOpenPhone(false);
                            }}
                          >
                            <img
                              src={item.img}
                              alt={item.country}
                              className="w-[26px] h-[20px] mr-2"
                            />{' '}
                            <span className="text-[#15181E] text-[16px] leading-[150%]">
                              {item.code}
                            </span>
                          </div>
                        )
                    )}
                  </div>
                )}
              </div>
              <input
                id="phone"
                type="tel"
                placeholder={selectPhone.exaple}
                ref={inputRef}
                defaultValue={defaultValue}
                onChange={(evt) => {
                  const value = evt.target.value;
                  const regexUZB = /^\+998\s\(\d{2}\)\s\d{3}-\d{2}-\d{2}$/;
                  const regexRUS = /^\+7\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/;
                  if (!value) {
                    if (!phoneNumber) {
                      setError(t('footer.error1'));
                      return;
                    }
                  } else if (
                    selectPhone.country === 'UZB' &&
                    !regexUZB.test('+998 ' + value)
                  ) {
                    setError(t('footer.error2'));
                  } else if (
                    selectPhone.country === 'RUS' &&
                    !regexRUS.test('+7 ' + value)
                  ) {
                    setError(t('footer.error3'));
                  } else {
                    setError('');
                  }
                }}
                className="bg-transparent text-[#15181E] text-[16px] leading-[150%] pl-6 w-full focus:outline-none py-[12px] placeholder:text-[#A8B3C4]"
              />
            </div>
            {error.length > 0 && (
              <p className="text-red-700 mt-1 text-[14px]">{error}</p>
            )}
          </label>

          <button className="w-full pl-[24px] p-[3px] flex items-center justify-between gap-6 bg-[#037C6A] rounded-[48px] text-[16px] text-[#ffffff] leading-[150%] cursor-pointer">
            <span className="mx-auto">{t('review_modal.submit')}</span>
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
        </form>
      </div>
    </div>
  );
};

export default BuyModal;
