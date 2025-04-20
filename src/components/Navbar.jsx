import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo/desktop_logo.svg';
import mobileLogo from '../assets/logo/mobile-logo.svg';
import shop from '../assets/logo/shopping bag.svg';
import chevron from '../assets/logo/Chevron down.svg';
import usa from '../assets/logo/USA.svg';
import burgerMenuIcon from '../assets/logo/burger-menu.svg';
import close from '../assets/logo/close.svg';
import uzb from '../assets/logo/Uzbekistan.svg';
import rus from '../assets/logo/Russia.svg';
import { useTranslation } from 'react-i18next';

const Navbar = ({ setOpenSidebar }) => {
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
      <header className="fixed top-0 left-0 z-50 bg-[#0000001F] py-[20px] backdrop-blur-[24px] border-b-[3px] border-[#FFFFFF33] w-full">
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
              <ul className="flex text-[16px] leading-[24px] text-[#FFFFFF]">
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
                className="p-[12px] bg-[#FFFFFF1F] border-[3px] border-[#FFFFFF33] rounded-full cursor-pointer"
              >
                <img
                  src={shop}
                  alt="shopping bag"
                  className="w-[16px] md:w-[24px] h-[16px] md:h-[24px]"
                />
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
                  className="flex items-center gap-2 px-[12px] py-[14px] bg-[#FFFFFF1F] text-white rounded-full border-[3px] border-[#FFFFFF33] transition cursor-pointer"
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
                    className="top-120 md:top-122 lg:top-15 absolute right-[-15px]  w-fit mt-2  min-w-[150px] bg-[#00000029]  border-[#FFFFFF4D] border-x-2 border-b-2 overflow-hidden rounded-[24px] px-[12px] py-[16px] z-50 dropdown"
                  >
                    {languages.map((lang) =>
                      lang.code == selectedLangObj.code ? (
                        ''
                      ) : (
                        <button
                          key={lang.code}
                          onClick={() => changeValues(lang)}
                          className="flex items-center gap-2 w-full px-[20px] py-[12px] bg-[#0000003D] text-white transition capitalize mb-2 rounded-2xl border-2 border-[#FFFFFF33] cursor-pointer"
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
                <img
                  src={burgerMenu ? close : burgerMenuIcon}
                  alt="burgerMenuIcon"
                  className="w-[32px] md:w-[54px] h-[32px] md:h-[54px]"
                />
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
          </div>
        </nav>
      )}
    </div>
  );
};

export default Navbar;
