import React, { useEffect } from 'react';
import contactimg from '../assets/contact-us.png';
import uzb from '../assets/logo/Uzbekistan.svg';
import rus from '../assets/logo/Russia.svg';
import { useTranslation } from 'react-i18next';
import { format, useMask } from '@react-input/mask';
import { useLocation } from 'react-router-dom';
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

const ContactUs = () => {
  const location = useLocation();

  useEffect(() => {
    scrollTo(0, 0);
  }, [location]);

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

  const [isOpen, setIsOpen] = React.useState(false);
  const [selectPhone, setSelectPhone] = React.useState(phoneArr[0]);
  const [error, setError] = React.useState('');
  const [errorName, setErrorName] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState('');
  const nameRef = React.useRef();
  const messageRef = React.useRef();

  const inputRef = useMask(options[selectPhone.country]);
  let defaultValue = format('', options[selectPhone.country]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let phoneNumber = inputRef.current.value;
    let name = e.target.name.value;
    let message = e.target.message.value;

    if (errorName || errorMessage || error) {
      return;
    }
    if (!phoneNumber && !name && !message) {
      setErrorName(t('contact-us.name_error'));
      setErrorMessage(t('contact-us.message_error'));
      setError(t('footer.error1'));
      return;
    }

    try {
      const phone =
        selectPhone.country === 'UZB'
          ? `+998${phoneNumber}`
          : `+7${phoneNumber}`;
      const my_text = `☎️ Aloqaga chiqish xabari:\n- Ism: ${name}\n- Telefon raqam: <a href="tel:${phone}">${phone}</a>\n- Xabar: ${message}`;

      const res = await fetch(
        `${TELEGRAM_LINK}${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${encodeURIComponent(
          my_text
        )}&parse_mode=HTML`
      );

      const data = await res.json();
      if (data) {
        nameRef.current.value = '';
        messageRef.current.value = '';
        inputRef.current.value = '';
        setErrorName('');
        setError('');
        setErrorMessage('');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="pt-[64px]">
      <div className="container">
        <h2 className="text-[36px] sm:text-[48px] leading-[126%] text-[#15181E] text-center">
          {t('contact-us.title')}
        </h2>
        <p className="text-[20px] leading-[150%] text-[#15181E] font-[ClashDisplay-Regular] mt-[12px] text-center">
          {t('contact-us.subtitle')}
        </p>
        <div className="flex flex-col lg:flex-row items-center gap-[32px] mt-[36px]">
          <div className="w-full flex justify-center lg:max-w-[400px] xl:max-w-[500px]">
            <img
              src={contactimg}
              alt="contactimg"
              className="h-full max-h-[440px] rounded-[24px]"
            />
          </div>
          <form
            onSubmit={(e) => handleSubmit(e)}
            className="flex flex-col gap-[24px] w-full"
          >
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <label
                className="flex flex-col text-[20px] leading-[150%] text-[#15181E] lg:max-w-[250px] w-full xl:max-w-full"
                htmlFor="name"
              >
                {t('contact-us.label1')}
                <input
                  type="text"
                  placeholder={t('contact-us.placeholder1')}
                  id="name"
                  ref={nameRef}
                  onChange={(e) => {
                    const value = e.target.value;

                    const isOnlyLetters = /^[a-zA-Z]+$/.test(value);
                    const isLongEnough = value.length >= 5;

                    const hasUpper = /[A-Z]/.test(value);
                    const hasLower = /[a-z]/.test(value);

                    if (!isOnlyLetters) {
                      setErrorName(t('contact-us.name_error2'));
                    } else if (!isLongEnough) {
                      setErrorName(t('contact-us.name_error3'));
                    } else if (!hasUpper && !hasLower) {
                      setErrorName(t('contact-us.name_error4'));
                    } else {
                      setErrorName('');
                    }
                  }}
                  className="text-[20px] leading-[150%] text-[#15181E] p-4 border-transparent rounded-[24px] mt-3 bg-[#F1F3F6] placeholder:text-[#A8B3C4] focus:outline-none"
                />
                {errorName.length > 0 && (
                  <p className="text-red-700 mt-1 text-[16px]">{errorName}</p>
                )}
              </label>

              <label
                htmlFor="phone"
                className=" flex flex-col text-[20px] leading-[150%] text-[#15181E] w-full"
              >
                {t('contact-us.label2')}
                <div className="mt-3 flex items-center justify-center bg-[#F1F3F6] rounded-[24px] w-full border border-transparent gap-4 relative">
                  <div
                    className="flex items-center pl-3 py-[16px]"
                    onClick={() => {
                      setIsOpen(!isOpen);
                      defaultValue = format('', options[selectPhone.country]);
                    }}
                  >
                    <img
                      src={selectPhone.img}
                      alt={selectPhone.country}
                      className="w-[32px] h-[32px] mr-2 object-cover"
                    />
                    <span className="text-[#15181E] text-[20px] pr-2 leading-[150%] border-r-2 border-[#15181E] ">
                      {selectPhone.code}
                    </span>
                    {isOpen && (
                      <div className="absolute top-15 w-[100px] border border-[#E0E4EA] rounded-full bg-[#fff] p-4 left-0">
                        {phoneArr.map(
                          (item) =>
                            selectPhone.id !== item.id && (
                              <div
                                className="flex"
                                key={item.id}
                                onClick={() => {
                                  setSelectPhone(item);
                                  setIsOpen(false);
                                }}
                              >
                                <img
                                  src={item.img}
                                  alt={item.country}
                                  className="w-[26px] h-[20px] mr-2"
                                />{' '}
                                <span className="text-[#15181E]  text-[16px] leading-[150%]">
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
                    className="bg-transparent text-[#15181E] text-[20px] leading-[150%] pl-6 w-full focus:outline-none py-[16px] placeholder:text-[#A8B3C4]"
                  />
                </div>
                {error.length > 0 && (
                  <p className="text-red-700 mt-1 text-[16px]">{error}</p>
                )}
              </label>
            </div>

            <label
              htmlFor="message"
              className="text-[20px] leading-[150%] text-[#15181E] "
            >
              {t('contact-us.label3')}
              <textarea
                placeholder={t('contact-us.placeholder3')}
                className="w-full max-h-[185px] text-[20px] leading-[150%] text-[#15181E] p-4 border-transparent rounded-[24px] mt-3 bg-[#F1F3F6] placeholder:text-[#A8B3C4] focus:outline-none"
                rows="5"
                id="message"
                ref={messageRef}
                onChange={(e) => {
                  const value = e.target.value;
                  const isLongEnough = value.length >= 10;
                  const hasUpper = /[A-Z]/.test(value);
                  const hasLower = /[a-z]/.test(value);
                  if (!isLongEnough) {
                    setErrorMessage(t('contact-us.message_error2'));
                  } else if (!hasUpper && !hasLower) {
                    setErrorMessage(t('contact-us.message_error3'));
                  } else {
                    setErrorMessage('');
                  }
                }}
              ></textarea>
              {errorMessage.length > 0 && (
                <p className="text-red-700 mt-1 text-[16px]">{errorMessage}</p>
              )}
            </label>

            <div className="flex flex-col sm:flex-row justify-between items-center">
              <button className="w-full sm:w-fit pl-[24px] p-[3px] flex items-center justify-between sm:gap-6 bg-[#037C6A] rounded-[48px] text-[16px] text-[#ffffff] leading-[150%] cursor-pointer">
                {t('contact-us.button_text')}
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

              <div className="flex gap-3 mt-7 sm:mt-0">
                <a className="bg-[#F1F3F6] p-4 rounded-full" href="t.me/+998774122221" target='_blank'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 25"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_34_1131)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M24 12.4424C24 19.0698 18.6274 24.4424 12 24.4424C5.37258 24.4424 0 19.0698 0 12.4424C0 5.81497 5.37258 0.442383 12 0.442383C18.6274 0.442383 24 5.81497 24 12.4424ZM12.43 9.30131C11.2628 9.78678 8.93014 10.7916 5.43189 12.3157C4.86383 12.5416 4.56626 12.7626 4.53917 12.9787C4.49339 13.3439 4.95071 13.4877 5.57347 13.6835C5.65818 13.7101 5.74595 13.7377 5.83594 13.767C6.44864 13.9662 7.27283 14.1992 7.70129 14.2084C8.08994 14.2168 8.52373 14.0566 9.00264 13.7277C12.2712 11.5214 13.9584 10.4062 14.0643 10.3822C14.139 10.3652 14.2426 10.3439 14.3128 10.4062C14.3829 10.4686 14.376 10.5867 14.3686 10.6184C14.3233 10.8115 12.5281 12.4805 11.5991 13.3442C11.3095 13.6134 11.1041 13.8044 11.0621 13.848C10.968 13.9457 10.8721 14.0382 10.78 14.127C10.2108 14.6757 9.78391 15.0872 10.8036 15.7592C11.2936 16.0821 11.6858 16.3491 12.077 16.6155C12.5042 16.9065 12.9303 17.1966 13.4816 17.558C13.6221 17.6501 13.7562 17.7458 13.8869 17.8389C14.3841 18.1934 14.8307 18.5118 15.3826 18.461C15.7032 18.4315 16.0345 18.13 16.2027 17.2307C16.6002 15.1055 17.3816 10.5008 17.5622 8.60336C17.578 8.43711 17.5581 8.22435 17.5422 8.13096C17.5262 8.03756 17.4928 7.90449 17.3714 7.80598C17.2276 7.68932 17.0056 7.66472 16.9064 7.66647C16.455 7.67442 15.7626 7.9152 12.43 9.30131Z"
                        fill="#15181E"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_34_1131">
                        <rect
                          width="24"
                          height="24"
                          fill="#15181E"
                          transform="translate(0 0.442383)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
                <a className="bg-[#F1F3F6] p-4 rounded-full" href="https://www.instagram.com/lazuno.uz/" target='_blank'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_34_1135)">
                      <path
                        d="M12 2.60332C15.2063 2.60332 15.5859 2.61738 16.8469 2.67363C18.0188 2.7252 18.6516 2.92207 19.0734 3.08613C19.6313 3.30176 20.0344 3.56426 20.4516 3.98145C20.8734 4.40332 21.1313 4.80176 21.3469 5.35957C21.5109 5.78145 21.7078 6.41895 21.7594 7.58613C21.8156 8.85176 21.8297 9.23145 21.8297 12.433C21.8297 15.6393 21.8156 16.0189 21.7594 17.2799C21.7078 18.4518 21.5109 19.0846 21.3469 19.5064C21.1313 20.0643 20.8687 20.4674 20.4516 20.8846C20.0297 21.3064 19.6313 21.5643 19.0734 21.7799C18.6516 21.9439 18.0141 22.1408 16.8469 22.1924C15.5813 22.2486 15.2016 22.2627 12 22.2627C8.79375 22.2627 8.41406 22.2486 7.15313 22.1924C5.98125 22.1408 5.34844 21.9439 4.92656 21.7799C4.36875 21.5643 3.96563 21.3018 3.54844 20.8846C3.12656 20.4627 2.86875 20.0643 2.65313 19.5064C2.48906 19.0846 2.29219 18.4471 2.24063 17.2799C2.18438 16.0143 2.17031 15.6346 2.17031 12.433C2.17031 9.22676 2.18438 8.84707 2.24063 7.58613C2.29219 6.41426 2.48906 5.78145 2.65313 5.35957C2.86875 4.80176 3.13125 4.39863 3.54844 3.98145C3.97031 3.55957 4.36875 3.30176 4.92656 3.08613C5.34844 2.92207 5.98594 2.7252 7.15313 2.67363C8.41406 2.61738 8.79375 2.60332 12 2.60332ZM12 0.442383C8.74219 0.442383 8.33438 0.456445 7.05469 0.512695C5.77969 0.568945 4.90313 0.775195 4.14375 1.07051C3.35156 1.37988 2.68125 1.7877 2.01563 2.45801C1.34531 3.12363 0.9375 3.79395 0.628125 4.58145C0.332812 5.34551 0.126563 6.21738 0.0703125 7.49238C0.0140625 8.77676 0 9.18457 0 12.4424C0 15.7002 0.0140625 16.108 0.0703125 17.3877C0.126563 18.6627 0.332812 19.5393 0.628125 20.2986C0.9375 21.0908 1.34531 21.7611 2.01563 22.4268C2.68125 23.0924 3.35156 23.5049 4.13906 23.8096C4.90313 24.1049 5.775 24.3111 7.05 24.3674C8.32969 24.4236 8.7375 24.4377 11.9953 24.4377C15.2531 24.4377 15.6609 24.4236 16.9406 24.3674C18.2156 24.3111 19.0922 24.1049 19.8516 23.8096C20.6391 23.5049 21.3094 23.0924 21.975 22.4268C22.6406 21.7611 23.0531 21.0908 23.3578 20.3033C23.6531 19.5393 23.8594 18.6674 23.9156 17.3924C23.9719 16.1127 23.9859 15.7049 23.9859 12.4471C23.9859 9.18926 23.9719 8.78145 23.9156 7.50176C23.8594 6.22676 23.6531 5.3502 23.3578 4.59082C23.0625 3.79395 22.6547 3.12363 21.9844 2.45801C21.3188 1.79238 20.6484 1.37988 19.8609 1.0752C19.0969 0.779883 18.225 0.573633 16.95 0.517383C15.6656 0.456445 15.2578 0.442383 12 0.442383Z"
                        fill="#15181E"
                      />
                      <path
                        d="M12 6.27832C8.59688 6.27832 5.83594 9.03926 5.83594 12.4424C5.83594 15.8455 8.59688 18.6064 12 18.6064C15.4031 18.6064 18.1641 15.8455 18.1641 12.4424C18.1641 9.03926 15.4031 6.27832 12 6.27832ZM12 16.4408C9.79219 16.4408 8.00156 14.6502 8.00156 12.4424C8.00156 10.2346 9.79219 8.44395 12 8.44395C14.2078 8.44395 15.9984 10.2346 15.9984 12.4424C15.9984 14.6502 14.2078 16.4408 12 16.4408Z"
                        fill="#15181E"
                      />
                      <path
                        d="M19.8469 6.03477C19.8469 6.83164 19.2 7.47383 18.4078 7.47383C17.6109 7.47383 16.9688 6.82696 16.9688 6.03477C16.9688 5.23789 17.6156 4.5957 18.4078 4.5957C19.2 4.5957 19.8469 5.24258 19.8469 6.03477Z"
                        fill="#15181E"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_34_1135">
                        <rect
                          width="24"
                          height="24"
                          fill="white"
                          transform="translate(0 0.442383)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
                <a className="bg-[#F1F3F6] p-4 rounded-full" href="https://wa.me/+998774122221" target='_blank'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                  >
                    <path
                      d="M0 24.4424L1.687 18.2794C0.646 16.4754 0.099 14.4304 0.1 12.3334C0.103 5.77738 5.438 0.442383 11.993 0.442383C15.174 0.443383 18.16 1.68238 20.406 3.93038C22.651 6.17838 23.887 9.16638 23.886 12.3444C23.883 18.9014 18.548 24.2364 11.993 24.2364C10.003 24.2354 8.042 23.7364 6.305 22.7884L0 24.4424ZM6.597 20.6354C8.273 21.6304 9.873 22.2264 11.989 22.2274C17.437 22.2274 21.875 17.7934 21.878 12.3424C21.88 6.88038 17.463 2.45238 11.997 2.45038C6.545 2.45038 2.11 6.88438 2.108 12.3344C2.107 14.5594 2.759 16.2254 3.854 17.9684L2.855 21.6164L6.597 20.6354ZM17.984 15.1714C17.91 15.0474 17.712 14.9734 17.414 14.8244C17.117 14.6754 15.656 13.9564 15.383 13.8574C15.111 13.7584 14.913 13.7084 14.714 14.0064C14.516 14.3034 13.946 14.9734 13.773 15.1714C13.6 15.3694 13.426 15.3944 13.129 15.2454C12.832 15.0964 11.874 14.7834 10.739 13.7704C9.856 12.9824 9.259 12.0094 9.086 11.7114C8.913 11.4144 9.068 11.2534 9.216 11.1054C9.35 10.9724 9.513 10.7584 9.662 10.5844C9.813 10.4124 9.862 10.2884 9.962 10.0894C10.061 9.89138 10.012 9.71738 9.937 9.56838C9.862 9.42038 9.268 7.95738 9.021 7.36238C8.779 6.78338 8.534 6.86138 8.352 6.85238L7.782 6.84238C7.584 6.84238 7.262 6.91638 6.99 7.21438C6.718 7.51238 5.95 8.23038 5.95 9.69338C5.95 11.1564 7.015 12.5694 7.163 12.7674C7.312 12.9654 9.258 15.9674 12.239 17.2544C12.948 17.5604 13.502 17.7434 13.933 17.8804C14.645 18.1064 15.293 18.0744 15.805 17.9984C16.376 17.9134 17.563 17.2794 17.811 16.5854C18.059 15.8904 18.059 15.2954 17.984 15.1714Z"
                      fill="#15181E"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
