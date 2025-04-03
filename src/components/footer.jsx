import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import 'react-phone-input-2/lib/style.css';
import telegram from '../assets/logo/Telegram.svg';
import instagram from '../assets/logo/instagram.svg';
import facebook from '../assets/logo/facebook.svg';
import youtube from '../assets/logo/youtube.svg';
import footerLogo from '../assets/logo/footer-logo.svg';
import uzcard from '../assets/logo/uzcard.svg';
import humo from '../assets/logo/humo.svg';
import click from '../assets/logo/click.svg';
import payme from '../assets/logo/payme.svg';
import visa from '../assets/logo/visa.svg';
import mastercard from '../assets/logo/mastercard.svg';
import uzb from '../assets/logo/Uzbekistan.svg';

const peymentArr = [
  { id: 1, img: uzcard, title: 'uzcard' },
  { id: 2, img: humo, title: 'humo' },
  { id: 3, img: click, title: 'click' },
  { id: 4, img: payme, title: 'payme' },
  { id: 5, img: visa, title: 'visa' },
  { id: 6, img: mastercard, title: 'mastercard' },
];

const Footer = () => {
  const [phone, setPhone] = React.useState('');

  const handleChange = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 9);
    setPhone(value);
  };
  return (
    <footer className="bg-[#191D24] text-white pt-[48px]">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4  md:gap-0">
          <div className="flex items-center flex-row md:flex-col gap-4 sm:gap-6 justify-center md:justify-baseline mb-[24px] md:mb-0">
            <div>
              <h4 className="text-[16px] leading-[150%] font-[ClashDisplay-Regular] mb-[8px] text-center w-full max-w-[150px]">
                Phone Number
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
                Office Location
              </h4>
              <p className="text-[16px] leading-[150%]">Nurafshon Street 117</p>
            </div>
          </div>

          {/* Center Section */}
          <div className="text-center col-span-2 border-y-2 md:border-y-0 border-dashed md:border-solid md:border-x  border-[#414141] py-[56px] md:py-0 md:px-[10px] lg:p-0">
            <h4 className="text-[36px] leading-[130%] mb-2">
              Let's Get In Touch!
            </h4>
            <p className="mb-12 text-[16px] leading-[150%] text-[#A8B3C4]">
              What's inside? Exclusive sales, new arrivals & much more.
            </p>
            <div className="flex items-center justify-center bg-[#1A1D23] rounded-full w-fit border border-[#2C303A] mx-auto">
              <div className="flex items-center px-3 py-[16px]">
                <img
                  src={uzb}
                  alt="UZB"
                  className="w-[26px] h-[20px] mr-2 object-cover"
                />
                <span className="text-white text-[16px] leading-[150%] border-r-2 border-white">
                  +998
                </span>
              </div>
              <input
                type="tel"
                value={phone}
                onChange={handleChange}
                placeholder="77 777 77 77"
                className="bg-transparent text-white text-[16px] leading-[150%] pl-3 w-full max-w-[150px] focus:outline-none py-[16px]"
              />
              <button className="w-fit pl-[12px] lg:pl-[24px] p-[4px] flex items-center gap-4 lg:gap-6 bg-[#FFFFFF] rounded-[48px] text-[16px] text-[#15181E] leading-[150%] cursor-pointer">
                <span className="py-[12px]">
                  Contact <span className="hidden lg:inline">Us</span>
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
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center justify-end flex-col mt-[24px] md:mt-0">
            <h4 className="text-[16px] leading-[150%] font-[ClashDisplay-Regular] mb-4">
              Social Media
            </h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-400">
                <img src={telegram} alt="telegram" width={24} height={24} />
              </a>
              <a href="#" className="hover:text-gray-400">
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
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about-us">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/product">Product Catalog</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact Us</NavLink>
            </li>
          </ul>

          <ul className="hidden lg:flex gap-6 text-[16px] leading-[150%] font-[ClashDisplay-Regular]">
            <li>
              <NavLink to="/">Terms & Conditions</NavLink>
            </li>
            <li>
              <NavLink to="/about-us">Privacy Policy</NavLink>
            </li>
          </ul>

          <div className="mt-[24px] lg:hidden">
            <ul className="grid grid-cols-2 md:flex  justify-between md:justify-center text-center gap-6 text-[16px] leading-[150%] font-[ClashDisplay-Regular]">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about-us">About Us</NavLink>
              </li>
              <li>
                <NavLink to="/product">Product Catalog</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact Us</NavLink>
              </li>
              <li>
                <NavLink to="/">Terms & Conditions</NavLink>
              </li>
              <li>
                <NavLink to="/about-us">Privacy Policy</NavLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="py-[19px]">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-[16px] leading-[150%] font-[ClashDisplay-Regular]">
              &copy; Lazuno Co. 2025. All Rights Reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              {peymentArr.map((item) => (
                <a href="#" key={item.id}>
                  <img
                    src={item.img}
                    alt={item.title}
                    className="h-[30px] w-[45px]"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
