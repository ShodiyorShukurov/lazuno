import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo/product-logo.svg';
import mobileLogo from '../assets/logo/product-mobile.svg';
import chevron from '../assets/logo/Chevron down.svg';
import usa from '../assets/logo/USA.svg';
import uzb from '../assets/logo/Uzbekistan.svg';
import rus from '../assets/logo/Russia.svg';
import { useTranslation } from 'react-i18next';

const ProductNavbar = ({ setOpenSidebar }) => {
  const languages = [
    { code: 'en', name: 'English', flag: usa },
    { code: 'ру', name: 'Russian', flag: rus },
    { code: 'uz', name: 'Uzbek', flag: uzb },
  ];

  const { t, i18n } = useTranslation();

  const [selectedLanguage, setSelectedLanguage] = React.useState(
    localStorage.getItem('lng')
      ? localStorage.getItem('lng')
      : languages[2].code
  );
  const [selectedLangObj, setSelectedLangObj] = React.useState(
    localStorage.getItem('lng') == 'en'
      ? languages[0]
      : localStorage.getItem('lng') == 'ру'
      ? languages[1]
      : languages[2]
  );
  const [isOpen, setIsOpen] = React.useState(false);
  const [burgerMenu, setBurgerMenu] = React.useState(false);

  React.useEffect(() => {
    i18n.changeLanguage(selectedLanguage ?? 'uz');
  }, [selectedLanguage, i18n]);

  const changeValues = (lng) => {
    i18n.changeLanguage(lng.code);
    localStorage.setItem('lng', lng.code);
    setSelectedLanguage(lng.code);
    setSelectedLangObj(lng);
    setIsOpen(false);
    setBurgerMenu(false);
  };

  return (
    <div className="relative container">
      <header className="fixed top-0 left-0 z-50 py-[20px] w-full  border-b-2 bg-white border-[#F1F3F6] ">
        <div className="container">
          <div className="flex items-center justify-between w-full">
            <a href="/">
              <img
                className="hidden md:block"
                src={logo}
                alt="Lazuno Furniture"
                width={198}
                height={32}
              />
              <img
                className="block md:hidden"
                src={mobileLogo}
                alt="Lazuno Furniture"
                width={120}
                height={32}
              />
            </a>

            <nav className="hidden lg:block">
              <ul className="flex text-[16px] leading-[24px] text-[#15181E]">
                <li className=" px-[16px] py-[12px]">
                  <NavLink
                    className={({ isActive }) =>
                      `${isActive ? 'border-b-[2px]' : ''} py-[12px]`
                    }
                    to="/"
                  >
                    {t('navbar.home')}
                  </NavLink>
                </li>
                <li className=" px-[16px] py-[12px]">
                  <NavLink
                    className={({ isActive }) =>
                      `${isActive ? 'border-b-[2px]' : ''} py-[12px]`
                    }
                    to="/about-us"
                  >
                    {t('navbar.about')}
                  </NavLink>
                </li>
                <li className=" px-[16px] py-[12px]">
                  <NavLink
                    className={({ isActive }) =>
                      `${isActive ? 'border-b-[2px]' : ''} py-[12px]`
                    }
                    to="/category"
                  >
                    {t('navbar.product')}
                  </NavLink>
                </li>
                <li className=" px-[16px] py-[12px]">
                  <NavLink
                    className={({ isActive }) =>
                      `${isActive ? 'border-b-[2px]' : ''} py-[12px]`
                    }
                    to="/contact"
                  >
                    {t('navbar.contact')}
                  </NavLink>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-[8px]">
              <button
                onClick={() => setOpenSidebar(true)}
                className="p-[12px] bg-[#FFFFFF1F] border-[3px] border-[#F1F3F6] rounded-full cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[16px] md:w-[24px] h-[16px] md:h-[24px]"
                  viewBox="0 0 25 24"
                  fill="none"
                >
                  <path
                    d="M9.76172 6L9.76172 7C9.76172 8.65685 11.1049 10 12.7617 10C14.4186 10 15.7617 8.65685 15.7617 7V6"
                    stroke="#15181E"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16.3731 3H9.15008C7.19472 3 5.52596 4.41365 5.2045 6.3424L3.53784 16.3424C3.13148 18.7805 5.01165 21 7.48341 21H18.0397C20.5115 21 22.3917 18.7805 21.9853 16.3424L20.3186 6.3424C19.9972 4.41365 18.3284 3 16.3731 3Z"
                    stroke="#15181E"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <div className="hidden lg:block relative">
                <button
                  onClick={() => {
                    setIsOpen(!isOpen);
                  }}
                  style={{
                    backdropFilter: 'blur(56px)',
                    WebkitBackdropFilter: 'blur(56px)',
                  }}
                  className="flex items-center gap-2 px-[12px] py-[14px] bg-[#FFFFFF1F] text-[#15181E] rounded-full border-[3px] border-[#F1F3F6] transition cursor-pointer"
                >
                  <span className="text-[14px] leading-[150%] capitalize font-semibold">
                    {selectedLangObj.code}
                  </span>
                  <img
                    src={selectedLangObj.flag}
                    alt="Flag"
                    className="w-[25px] h-[20px] object-cover"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`transition-all w-[24px] h-[24px] duration-300 ${
                      isOpen ? 'rotate-180' : 'rotate-0'
                    }`}
                    viewBox="0 0 25 24"
                    fill="none"
                  >
                    <path
                      d="M6.42822 9L12.4282 15L18.4282 9"
                      stroke="#15181E"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                {isOpen && (
                  <div
                    style={{ backdropFilter: 'blur(56px)' }}
                    className="top-13 absolute right-[-15px]  w-fit mt-2  min-w-[150px] bg-[#00000066]  border-[#FFFFFF4D] border-x-2 border-b-2 overflow-hidden rounded-[24px] px-[12px] py-[16px] z-50 dropdown"
                  >
                    {languages.map((lang) =>
                      lang.code == selectedLangObj.code ? (
                        ''
                      ) : (
                        <button
                          key={lang.code}
                          onClick={() => changeValues(lang)}
                          className="flex items-center gap-2 w-full px-[20px] py-[12px] bg-[#00000073] text-white transition capitalize mb-2 rounded-2xl border-2 border-[#FFFFFF33] cursor-pointer"
                        >
                          <img
                            src={lang.flag}
                            alt={lang.name}
                            className="w-[25px] h-[20px] object-cover"
                          />
                          {lang.name}
                        </button>
                      )
                    )}
                  </div>
                )}
              </div>

              <button
                className="block lg:hidden cursor-pointer"
                onClick={() => {
                  setBurgerMenu(!burgerMenu);
                  setIsOpen(false);
                }}
              >
                {burgerMenu ? (
                  <svg
                    className="w-[32px] md:w-[54px] h-[32px] md:h-[54px]"
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
                ) : (
                  <svg
                    className="w-[32px] md:w-[54px] h-[32px] md:h-[54px]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <path
                      d="M5.33333 8C4.59695 8 4 8.59695 4 9.33333C4 10.0697 4.59695 10.6667 5.33333 10.6667H26.6667C27.403 10.6667 28 10.0697 28 9.33333C28 8.59695 27.403 8 26.6667 8H5.33333Z"
                      fill="#15181E"
                    />
                    <path
                      d="M5.33333 14.6667C4.59695 14.6667 4 15.2636 4 16C4 16.7364 4.59695 17.3333 5.33333 17.3333H26.6667C27.403 17.3333 28 16.7364 28 16C28 15.2636 27.403 14.6667 26.6667 14.6667H5.33333Z"
                      fill="#15181E"
                    />
                    <path
                      d="M5.33333 21.3333C4.59695 21.3333 4 21.9303 4 22.6667C4 23.403 4.59695 24 5.33333 24H26.6667C27.403 24 28 23.403 28 22.6667C28 21.9303 27.403 21.3333 26.6667 21.3333H5.33333Z"
                      fill="#15181E"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {burgerMenu && (
        <nav className="block lg:hidden fixed top-22 md:top-24 right-0 bg-[#0000003D] border-l-[3px] border-b-[3px] border-[#FFFFFF4D] rounded-bl-[24px] p-[20px] z-50 backdrop-blur-[56px]">
          <ul className="flex flex-col text-center text-[20px] leading-[100%] text-[#FFFFFF]">
            {[
              { to: '/', label: t('navbar.home') },
              { to: '/about-us', label: t('navbar.about') },
              { to: '/category', label: t('navbar.product') },
              { to: '/contact', label: t('navbar.contact') },
            ].map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `w-full mb-[36px] py-[12px] px-[15px] text-white block rounded-[16px] ${
                    isActive ? 'bg-[#037C6A]' : ''
                  }`
                }
              >
                <li>{label}</li>
              </NavLink>
            ))}
          </ul>

          <div className="relative mb-[8px]">
            <button
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              className="flex items-center w-full justify-center gap-2 px-[12px] py-[14px] bg-[#FFFFFF1F] text-white rounded-full border-[3px] border-[#FFFFFF33] transition cursor-pointer"
            >
              <span className="text-[14px] leading-[150%] capitalize font-semibold">
                {selectedLangObj.code}
              </span>
              <img
                src={selectedLangObj.flag}
                alt="Flag"
                className="w-[25px] h-[20px] object-cover"
              />
              <img
                className={`transition-all duration-300 ${
                  isOpen ? 'rotate-180' : 'rotate-0'
                }`}
                src={chevron}
                alt="chevron"
              />
            </button>
            {isOpen && (
              <div
                style={{ backdropFilter: 'blur(56px)' }}
                className="top-13 absolute right-[0px]  w-full mt-2  min-w-[150px] bg-[#00000066]  border-[#FFFFFF4D] border-x-2 border-b-2 overflow-hidden rounded-[24px] px-[12px] py-[16px] z-50 dropdown"
              >
                {languages.map((lang) =>
                  lang.code == selectedLangObj.code ? (
                    ''
                  ) : (
                    <button
                      key={lang.code}
                      onClick={() => changeValues(lang)}
                      className="flex items-center gap-2 w-full px-[20px] py-[12px] bg-[#000000c0] text-white transition capitalize mb-2 rounded-2xl border-2 border-[#FFFFFF33] cursor-pointer"
                    >
                      <img
                        src={lang.flag}
                        alt={lang.name}
                        className="w-[25px] h-[20px] object-cover"
                      />
                      {lang.name}
                    </button>
                  )
                )}
              </div>
            )}
          </div>
        </nav>
      )}
    </div>
  );
};

export default ProductNavbar;
