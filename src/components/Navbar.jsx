import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo/desktop_logo.svg';
import search from '../assets/logo/search 01.svg';
import shop from '../assets/logo/shopping bag.svg';
import arrow from '../assets/logo/arrow-right.svg';
import chevron from '../assets/logo/Chevron down.svg';
import usa from '../assets/logo/USA.svg'

const Navbar = () => {
  const languages = [
    { code: 'eng', name: 'English', flag: usa },
    { code: 'ru', name: 'Русский', flag: 'https://flagcdn.com/w40/ru.png' },
    { code: 'uz', name: 'O‘zbek', flag: 'https://flagcdn.com/w40/uz.png' },
  ];

  const [selectedLanguage, setSelectedLanguage] = React.useState(languages[0]);
  const [isOpen, setIsOpen] = React.useState(false);

  const handleSelectLanguage = (language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 z-50 bg-[#0000001F] py-[20px] backdrop-blur-[24px] border-b-[3px] border-[#FFFFFF33] w-full">
      <div className="container">
        <div className="flex items-center justify-between w-full">
          <a href="/">
            <img src={logo} alt="Lazuno Furniture" width={198} height={32} />
          </a>

          <nav>
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
              <img src={search} alt="search" width={24} height={24} />
            </button>
            <button className="p-[12px] bg-[#FFFFFF1F] border-[3px] border-[#FFFFFF33] rounded-full cursor-pointer">
              <img src={shop} alt="shopping bag" width={24} height={24} />
            </button>

            <div className="relative">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-[12px] py-[14px] bg-[#FFFFFF1F] text-white rounded-full border-[3px] border-[#FFFFFF33] transition cursor-pointer"
              >
                <span className="text-[14px] leading-[150%] capitalize font-semibold">{selectedLanguage.code}</span>
                <img
                  src={selectedLanguage.flag}
                  alt="Flag"
                  className="w-[25px] h-[20px] object-cover"
                />
                <img className={`transition-all duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`} src={chevron} alt="chevron" />
              </button>

              {isOpen && (
                <div className="absolute mt-2 w-full bg-gray-800 border border-gray-700 rounded-lg shadow-lg">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleSelectLanguage(lang)}
                      className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-700 text-white transition capitalize"
                    >
                      <img
                        src={lang.flag}
                        alt={lang.name}
                        className="w-[25px] h-[20px] object-cover"
                      />
                      {lang.code}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button className="pl-[20px] p-[3px] flex items-center gap-6 bg-[#037C6A] rounded-[48px] font-semibold text-[14px] text-[#ffffff] leading-[150%] cursor-pointer">
              Sign In
              <span className="bg-[#FFFFFF] w-[40px] h-[40px] flex justify-center rounded-full">
                <img
                  src={arrow}
                  alt="arrow-right"
                  className="w-[20px] h-[20px]"
                />
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
