import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import 'react-phone-input-2/lib/style.css';
import telegram from '../assets/logo/Telegram.svg';
import instagram from '../assets/logo/instagram.svg';
import facebook from '../assets/logo/facebook.svg';
import youtube from '../assets/logo/youtube.svg';
import footerLogo from '../assets/logo/footer-logo.svg';
import uzb from '../assets/logo/Uzbekistan.svg';
import rus from '../assets/logo/Russia.svg';
import { useTranslation } from 'react-i18next';
import { format, useMask } from '@react-input/mask';

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

const Footer = () => {
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

  // const [phone, setPhone] = React.useState('');
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectPhone, setSelectPhone] = React.useState(phoneArr[0]);
  const [error, setError] = React.useState('');

  const { t } = useTranslation();
  const inputRef = useMask(options[selectPhone.country]);
  let defaultValue = format('', options[selectPhone.country]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const phoneNumber = inputRef.current.value;
    if (!phoneNumber) {
      setError(t('footer.error1'));
      return;
    }

    console.log('Phone number submitted:', inputRef.current.value);
  };
  return (
    <footer className="bg-[#191D24] text-white pt-[48px]">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4  md:gap-0">
          <div className="flex items-center flex-row md:flex-col gap-4 sm:gap-6 justify-center md:justify-baseline mb-[24px] md:mb-0">
            <div>
              <h4 className="text-[16px] leading-[150%] font-[ClashDisplay-Regular] mb-[8px] text-center w-full max-w-[150px]">
                {t('footer.phone_number')}
              </h4>
              <a
                href="tel:+998 97 442 23 21"
                className="text-[16px] leading-[150%]"
              >
                +998 97 442 23 21
              </a>
            </div>
            <div>
              <h4 className="text-[16px] leading-[150%] font-[ClashDisplay-Regular] mb-[8px] text-center w-full max-w-[150px]">
                {t('footer.location_text')}
              </h4>
              <p className="text-[16px] leading-[150%]">
                {t('footer.location')}
              </p>
            </div>
          </div>

          {/* Center Section */}
          <div className="text-center col-span-2 border-y-2 md:border-y-0 border-dashed md:border-solid md:border-x  border-[#414141] py-[56px] md:py-0 md:px-[10px] lg:p-0">
            <h4 className="text-[36px] leading-[130%] mb-2">
              {t('footer.footer_title')}
            </h4>
            <p className="mb-12 text-[16px] leading-[150%] text-[#A8B3C4]">
              {t('footer.footer_text')}
            </p>
            <form
              onSubmit={(e) => handleSubmit(e)}
              className="flex items-center justify-center bg-[#1A1D23] rounded-full w-fit border border-[#2C303A] mx-auto"
            >
              <div
                className="flex items-center px-3 py-[16px] cursor-pointer relative"
                onClick={() => {
                  setIsOpen(!isOpen);
                  defaultValue = format('', options[selectPhone.country]);
                }}
                typeof="button"
              >
                <img
                  src={selectPhone.img}
                  alt={selectPhone.country}
                  className="w-[26px] h-[20px] mr-2 object-cover"
                />
                <span className="text-white text-[16px] leading-[150%] border-r-2 border-white">
                  {selectPhone.code}
                </span>
                {isOpen && (
                  <div className="absolute top-15 w-[100px] border border-[#2C303A] rounded-full bg-[#1A1D23] p-4 left-0">
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
                            <span className="text-white text-[16px] leading-[150%]">
                              {item.code}
                            </span>
                          </div>
                        )
                    )}
                  </div>
                )}
              </div>
              <input
                type="tel"
                id="phone"
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
                // required
                className="bg-transparent text-white text-[16px] leading-[150%] pl-3 w-full max-w-[150px] outline-none focus:outline-none py-[16px]"
              />
              <button
                type="submit"
                className="w-fit pl-[12px] lg:pl-[24px] p-[4px] flex items-center gap-4 lg:gap-6 bg-[#FFFFFF] rounded-[48px] text-[16px] text-[#15181E] leading-[150%] cursor-pointer"
              >
                <span className="py-[12px]">
                  {t('footer.button')}{' '}
                  {localStorage.getItem('lng') == 'en' ? (
                    <span className="hidden lg:inline">{t('footer.us')}</span>
                  ) : (
                    ''
                  )}
                </span>
                <span className="bg-[#15181E] w-[48px] h-[48px] flex justify-center items-center rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 22 22"
                    fill="none"
                  >
                    <path
                      d="M12.714 7.57141L16.1426 11M16.1426 11L12.714 14.4286M16.1426 11L5.85686 11"
                      stroke="#fff"
                      strokeWidth="0.857143"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
            </form>
            {error.length > 0 && <p className="text-red-700 mt-1">{error}</p>}
          </div>

          {/* Right Section */}
          <div className="flex items-center justify-end flex-col mt-[24px] md:mt-0">
            <h4 className="text-[16px] leading-[150%] font-[ClashDisplay-Regular] mb-4">
              {t('footer.social')}
            </h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-400">
                <img src={telegram} alt="telegram" width={24} height={24} />
              </a>
              <a
                href="https://www.instagram.com/lazuno.uz/"
                className="hover:text-gray-400"
              >
                <img src={instagram} alt="instagram" width={24} height={24} />
              </a>
              <a href="#" className="hover:text-gray-400">
                <img src={facebook} alt="facebook" width={24} height={24} />
              </a>
              <a href="#" className="hover:text-gray-400">
                <img src={youtube} alt="youtube" width={24} height={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-[48px] flex justify-between items-center flex-col lg:flex-row">
          <Link to="/">
            <img
              src={footerLogo}
              alt="Lazuno Furniture"
              width={310}
              height={56}
            />
          </Link>

          <ul className="hidden lg:flex gap-6 text-[16px] leading-[150%] font-[ClashDisplay-Regular]">
            <li>
              <NavLink to="/">{t('footer.home')}</NavLink>
            </li>
            <li>
              <NavLink to="/about-us">{t('footer.about')}</NavLink>
            </li>
            <li>
              <NavLink to="/category">{t('footer.product')}</NavLink>
            </li>
            <li>
              <NavLink to="/contact">{t('footer.contact')}</NavLink>
            </li>
          </ul>

          <ul className="hidden lg:flex gap-6 text-[16px] leading-[150%] font-[ClashDisplay-Regular]">
            <li>
              <NavLink to="/">{t('footer.link1')}</NavLink>
            </li>
            <li>
              <NavLink to="/about-us">{t('footer.link2')}</NavLink>
            </li>
          </ul>

          <div className="mt-[24px] lg:hidden">
            <ul className="grid grid-cols-2 md:flex  justify-between md:justify-center text-center gap-6 text-[16px] leading-[150%] font-[ClashDisplay-Regular]">
              <li>
                <NavLink to="/">{t('footer.home')}</NavLink>
              </li>
              <li>
                <NavLink to="/about-us">{t('footer.about')}</NavLink>
              </li>
              <li>
                <NavLink to="/product">{t('footer.product')}</NavLink>
              </li>
              <li>
                <NavLink to="/contact">{t('footer.contact')}</NavLink>
              </li>
              <li>
                <NavLink to="/">{t('footer.link1')}</NavLink>
              </li>
              <li>
                <NavLink to="/about-us">{t('footer.link2')}</NavLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="py-[19px]">
          <p className="text-[16px] leading-[150%] font-[ClashDisplay-Regular]">
            {t('footer.all')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
