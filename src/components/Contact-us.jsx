import React from 'react';
import contactimg from '../assets/contact-us.png';
import uzb from '../assets/logo/Uzbekistan.svg';
import { useTranslation } from 'react-i18next';

const ContactUs = () => {
  const [phone, setPhone] = React.useState('');
  const { t } = useTranslation();
  const handleChange = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 9);
    setPhone(value);
  };

  return (
    <section className="pt-[64px]">
      <div className="container">
        <h2 className="text-[48px] leading-[126%] text-[#15181E] text-center">
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
          <form className="flex flex-col gap-[24px] w-full">
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
                  className="text-[20px] leading-[150%] text-[#15181E] p-4 border-transparent rounded-[24px] mt-3 bg-[#F1F3F6] placeholder:text-[#A8B3C4] focus:outline-none"
                  required
                />
              </label>

              <label
                htmlFor="phone"
                className=" flex flex-col text-[20px] leading-[150%] text-[#15181E] w-full"
              >
                {t('contact-us.label2')}
                <div className="mt-3 flex items-center justify-center bg-[#F1F3F6] rounded-[24px] w-full border border-transparent gap-4">
                  <div className="flex items-center pl-3 py-[16px]">
                    <img
                      src={uzb}
                      alt="UZB"
                      className="w-[32px] h-[32px] mr-2 object-cover"
                    />
                    <span className="text-[#15181E] text-[20px] pr-2 leading-[150%] border-r-2 border-[#15181E] ">
                      +998
                    </span>
                  </div>
                  <input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={handleChange}
                    placeholder="77 777 77 77"
                    className="bg-transparent text-[#15181E] text-[20px] leading-[150%] pl-6 w-full focus:outline-none py-[16px] placeholder:text-[#A8B3C4]"
                  />
                </div>
              </label>
            </div>
            <label
              htmlFor="message"
              className="text-[20px] leading-[150%] text-[#15181E] "
            >
              {t('contact-us.label3')}
              <textarea
                placeholder={t('contact-us.placeholder3')}
                className="w-full text-[20px] leading-[150%] text-[#15181E] p-4 border-transparent rounded-[24px] mt-3 bg-[#F1F3F6] placeholder:text-[#A8B3C4] focus:outline-none"
                rows="5"
                required
              ></textarea>
            </label>

            <div className="flex flex-col sm:flex-row justify-between items-center">
              <button className="w-full pl-[24px] p-[3px] flex items-center justify-between sm:gap-6 bg-[#037C6A] rounded-[48px] text-[16px] text-[#ffffff] leading-[150%] cursor-pointer">
              {t('contact-us.button_text')}
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

              <div className="flex gap-3 mt-7 sm:mt-0">
                <a className="bg-[#F1F3F6] p-4 rounded-full" href="#telegram">
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
                <a className="bg-[#F1F3F6] p-4 rounded-full" href="#instagram">
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
                <a className="bg-[#F1F3F6] p-4 rounded-full" href="#instagram">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 25"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_34_1133)">
                      <path
                        d="M24 12.4424C24 5.81496 18.6274 0.442383 12 0.442383C5.37258 0.442383 0 5.81496 0 12.4424C0 18.4318 4.3882 23.3964 10.125 24.2966V15.9111H7.07812V12.4424H10.125V9.79863C10.125 6.79113 11.9166 5.12988 14.6576 5.12988C15.9701 5.12988 17.3438 5.36426 17.3438 5.36426V8.31738H15.8306C14.34 8.31738 13.875 9.24246 13.875 10.1924V12.4424H17.2031L16.6711 15.9111H13.875V24.2966C19.6118 23.3964 24 18.4318 24 12.4424Z"
                        fill="#15181E"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_34_1133">
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
                <a className="bg-[#F1F3F6] p-4 rounded-full" href="#youtube">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                  >
                    <path
                      d="M22.7747 6.81857C22.5154 5.85466 21.7554 5.09482 20.7916 4.83527C19.0309 4.35352 11.988 4.35352 11.988 4.35352C11.988 4.35352 4.94536 4.35352 3.18466 4.817C2.23943 5.07628 1.46091 5.8548 1.20163 6.81857C0.738281 8.57913 0.738281 12.2303 0.738281 12.2303C0.738281 12.2303 0.738281 15.8999 1.20163 17.642C1.46118 18.6058 2.22089 19.3656 3.1848 19.6252C4.9639 20.1071 11.9883 20.1071 11.9883 20.1071C11.9883 20.1071 19.0309 20.1071 20.7916 19.6436C21.7555 19.3842 22.5154 18.6243 22.7749 17.6606C23.2381 15.8999 23.2381 12.2488 23.2381 12.2488C23.2381 12.2488 23.2567 8.57913 22.7747 6.81857ZM9.7457 15.6034V8.85722L15.6022 12.2303L9.7457 15.6034Z"
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
