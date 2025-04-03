import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo/desktop_logo.svg';
import mobileLogo from '../assets/logo/mobile-logo.svg';
import shop from '../assets/logo/shopping bag.svg';
import usd from '../assets/logo/usd.svg';
import chevron from '../assets/logo/Chevron down.svg';
import usa from '../assets/logo/USA.svg';
import burgerMenuIcon from '../assets/logo/burger-menu.svg';
import close from '../assets/logo/close.svg';
import uzb from '../assets/logo/Uzbekistan.svg';
import rus from '../assets/logo/Russia.svg';
import rubl from '../assets/logo/rubl.svg';
import euro from '../assets/logo/euro.svg';
import uzs from '../assets/logo/uzs.svg';

const Navbar = () => {
  const languages = [
    { code: 'eng', name: 'English', flag: usa },
    { code: 'ru', name: 'Russian', flag: rus },
    { code: 'uz', name: 'Uzbek', flag: uzb },
  ];

  const money = [
    { code: 'USD', name: 'English', flag: usd },
    { code: 'EURO', name: 'O‘zbek', flag: euro },
    { code: 'RUBLE', name: 'Русский', flag: rubl },
    { code: 'UZS', name: 'Русский', flag: uzs },
  ];

  const [selectedLanguage, setSelectedLanguage] = React.useState(languages[0]);
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedMoney, setSelectedMoney] = React.useState(money[0]);
  const [isOpenMoney, setIsOpenMoney] = React.useState(false);
  const [burgerMenu, setBurgerMenu] = React.useState(false);

  const handleSelectLanguage = (language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
  };

  const handleSelectMoney = (money) => {
    setSelectedMoney(money);
    setIsOpenMoney(false);
  };

  return (
    <div className="relative">
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
                    Home
                  </NavLink>
                </li>
                <li className=" px-[16px] py-[12px]">
                  <NavLink
                    className={({ isActive }) =>
                      `${isActive ? 'border-b-[2px]' : ''} py-[12px]`
                    }
                    to="/about-us"
                  >
                    About Us
                  </NavLink>
                </li>
                <li className=" px-[16px] py-[12px]">
                  <NavLink
                    className={({ isActive }) =>
                      `${isActive ? 'border-b-[2px]' : ''} py-[12px]`
                    }
                    to="/product"
                  >
                    Product Catalog
                  </NavLink>
                </li>
                <li className=" px-[16px] py-[12px]">
                  <NavLink
                    className={({ isActive }) =>
                      `${isActive ? 'border-b-[2px]' : ''} py-[12px]`
                    }
                    to="/contact"
                  >
                    Contact Us
                  </NavLink>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-[8px]">
              <button className="p-[12px] bg-[#FFFFFF1F] border-[3px] border-[#FFFFFF33] rounded-full cursor-pointer">
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
                    setIsOpenMoney(false);
                  }}
                  style={{
                    backdropFilter: 'blur(56px)',
                    WebkitBackdropFilter: 'blur(56px)',
                  }}
                  className="flex items-center gap-2 px-[12px] py-[14px] bg-[#FFFFFF1F] text-white rounded-full border-[3px] border-[#FFFFFF33] transition cursor-pointer"
                >
                  <span className="text-[14px] leading-[150%] capitalize font-semibold">
                    {selectedLanguage.code}
                  </span>
                  <img
                    src={selectedLanguage.flag}
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
                    className="absolute mt-2 -left-4 w-full min-w-[150px] bg-[#FFFFFF1F]  border-[#FFFFFF4D] border-x-2 border-b-2 overflow-hidden rounded-[24px] px-[12px] py-[16px]"
                  >
                    {languages.map((lang) =>
                      lang.code == selectedLanguage.code ? (
                        ''
                      ) : (
                        <button
                          key={lang.code}
                          onClick={() => handleSelectLanguage(lang)}
                          className="flex items-center gap-2 w-full px-[20px] py-[12px] bg-[#FFFFFF1F] text-white transition capitalize mb-2 rounded-2xl border-2 border-[#FFFFFF33] cursor-pointer"
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

              <div className="hidden lg:block relative">
                <button
                  onClick={() => {
                    setIsOpenMoney(!isOpenMoney);
                    setIsOpen(false);
                  }}
                  className="flex items-center gap-2 px-[12px] py-[14px] bg-[#FFFFFF1F] text-white rounded-full border-[3px] border-[#FFFFFF33] transition cursor-pointer"
                >
                  <img
                    src={selectedMoney.flag}
                    alt="Flag"
                    className="w-[25px] h-[20px] object-cover"
                  />
                  <span className="text-[14px] leading-[150%] capitalize font-semibold">
                    {selectedMoney.code}
                  </span>
                  <img
                    className={`transition-all duration-300 ${
                      isOpenMoney ? 'rotate-180' : 'rotate-0'
                    }`}
                    src={chevron}
                    alt="chevron"
                  />
                </button>

                {isOpenMoney && (
                  <div className="absolute mt-2 -left-4 w-full min-w-[150px] bg-[#FFFFFF1F]  border-[#FFFFFF4D] border-x-2 border-b-2 overflow-hidden rounded-[24px] px-[12px] py-[16px] backdrop-blur-[56px]">
                    {money.map((lang) =>
                      lang.code == selectedMoney.code ? (
                        ''
                      ) : (
                        <button
                          key={lang.code}
                          onClick={() => handleSelectMoney(lang)}
                          className="flex items-center gap-2 w-full px-[20px] py-[12px] bg-[#FFFFFF1F] text-white transition capitalize mb-2 rounded-2xl border-2 border-[#FFFFFF33] cursor-pointer"
                        >
                          <img
                            src={lang.flag}
                            alt={lang.name}
                            className="w-[25px] h-[20px] object-cover"
                          />
                          {lang.code}
                        </button>
                      )
                    )}
                  </div>
                )}
              </div>

              <button
                className="block lg:hidden cursor-pointer"
                onClick={() => setBurgerMenu(!burgerMenu)}
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
              { to: '/', label: 'Home' },
              { to: '/about-us', label: 'About Us' },
              { to: '/product', label: 'Product Catalog' },
              { to: '/contact', label: 'Contact Us' },
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
                setIsOpenMoney(false);
              }}
              className="flex items-center w-full justify-center gap-2 px-[12px] py-[14px] bg-[#FFFFFF1F] text-white rounded-full border-[3px] border-[#FFFFFF33] transition cursor-pointer"
            >
              <span className="text-[14px] leading-[150%] capitalize font-semibold">
                {selectedLanguage.code}
              </span>
              <img
                src={selectedLanguage.flag}
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
              <div className="absolute mt-2 w-full min-w-[150px] bg-[#FFFFFF1F]  border-[#FFFFFF4D] border-x-2 border-b-2 overflow-hidden rounded-[24px] px-[12px] py-[16px] backdrop-blur-[56px] z-40">
                {languages.map((lang) =>
                  lang.code == selectedLanguage.code ? (
                    ''
                  ) : (
                    <button
                      key={lang.code}
                      onClick={() => handleSelectLanguage(lang)}
                      className="flex items-center gap-2 w-full px-[20px] py-[12px] bg-[#FFFFFF1F] text-white transition capitalize mb-2 rounded-2xl border-2 border-[#FFFFFF33] cursor-pointer"
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

          <div className="relative">
            <button
              onClick={() => {
                setIsOpenMoney(!isOpenMoney);
                setIsOpen(false);
              }}
              className="flex items-center gap-2 justify-center w-full px-[12px] py-[14px] bg-[#FFFFFF1F] text-white rounded-full border-[3px] border-[#FFFFFF33] transition cursor-pointer"
            >
              <img
                src={selectedMoney.flag}
                alt="Flag"
                className="w-[25px] h-[20px] object-cover"
              />
              <span className="text-[14px] leading-[150%] capitalize font-semibold">
                {selectedMoney.code}
              </span>
              <img
                className={`transition-all duration-300 ${
                  isOpenMoney ? 'rotate-180' : 'rotate-0'
                }`}
                src={chevron}
                alt="chevron"
              />
            </button>

            {isOpenMoney && (
              <div className="absolute mt-2 w-full min-w-[150px] bg-[#FFFFFF1F]  border-[#FFFFFF4D] border-x-2 border-b-2 overflow-hidden rounded-[24px] px-[12px] py-[16px] backdrop-blur-[56px]">
                {money.map((lang) =>
                  lang.code == selectedMoney.code ? (
                    ''
                  ) : (
                    <button
                      key={lang.code}
                      onClick={() => handleSelectMoney(lang)}
                      className="flex items-center gap-2 w-full px-[20px] py-[12px] bg-[#FFFFFF1F] text-white transition capitalize mb-2 rounded-2xl border-2 border-[#FFFFFF33] cursor-pointer"
                    >
                      <img
                        src={lang.flag}
                        alt={lang.name}
                        className="w-[25px] h-[20px] object-cover"
                      />
                      {lang.code}
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

export default Navbar;
