import React, { useRef, useState, useEffect } from 'react';
import video1 from '../assets/video/Lazuno_en_v1.mp4';
import video2 from '../assets/video/Lazuno_en_v2.mp4';
import arrow from '../assets/logo/arrow-right.svg';
import arrowVideo from '../assets/logo/arrow-right-video.svg';
import pauseIcon from '../assets/logo/pause_icon.svg';
import playIcon from '../assets/logo/play_icon.svg';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

const HeroPage = () => {
  const videos = [video1, video2];
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isFading, setIsFading] = useState(false);
  const videoRef = useRef(null);


  const { t } = useTranslation();

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play();
      setIsPaused(false);
    }
  }, [activeIndex]);

  const nextVideo = () => {
    setIsFading(true);
    setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % videos.length);
      setIsFading(false);
    }, 800);
  };

  const prevVideo = () => {
    setIsFading(true);
    setTimeout(() => {
      setActiveIndex((prev) => (prev - 1 + videos.length) % videos.length);
      setIsFading(false);
    }, 800);
  };

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPaused(false);
      } else {
        videoRef.current.pause();
        setIsPaused(true);
      }
    }
  };

  return (
    <section className="relative h-[100vh] flex items-center justify-center">
      <video
        ref={videoRef}
        className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ${
          isFading ? 'opacity-0' : 'opacity-100'
        }`}
        src={videos[activeIndex]}
        autoPlay
        loop
        playsInline
        muted
      />

      <div className="container relative z-10 h-full flex flex-col justify-end pb-[60px]">
        <h1 className="text-white text-[36px] sm:text-[48px] md:text-[72px] font-semibold text-left w-full md:max-w-[790px] leading-[120%] font-[ClashDisplay-Semibold]">
         {t('hero.title')}
        </h1>
        <p className="text-white text-[16px] md:text-[18px] font-medium text-left w-full md:max-w-[660px] leading-[26px] mt-[12px] md:mt-[24px] font-[ClashDisplay-Medium]">
        {t('hero.subtitle')}
        </p>
        <NavLink to='/category'
          style={{ fontFamily: 'ClashDisplay-Semibold' }}
          className="w-fit pl-[20px] p-[3px] flex items-center gap-6 bg-[#037C6A] rounded-[48px] text-[14px] text-[#ffffff] leading-[150%] cursor-pointer mt-[24px] md:mt-[40px]"
        >
          {t('hero.button')}
          <span className="bg-[#FFFFFF] w-[48px] h-[48px] flex items-center justify-center rounded-full">
            <img src={arrow} alt="arrow-right" className="w-[24px] h-[24px]" />
          </span>
        </NavLink>

        <div className="flex items-center gap-4 justify-center md:justify-end mt-[78px] md:mt-6 mb-[36px] md:mb-0">
          <button
            className="bg-[#FFFFFF29] w-[50px] h-[50px] flex justify-center items-center rounded-full border-[3px] border-[#FFFFFF33] cursor-pointer"
            onClick={prevVideo}
          >
            <img
              src={arrowVideo}
              alt="arrow-left"
              className="w-[28px] h-[28px]"
            />
          </button>

          <button
            className="bg-[#FFFFFF29] w-[64px] h-[64px] flex justify-center items-center rounded-full border-[3px] border-[#FFFFFF33] cursor-pointer"
            onClick={togglePlayPause}
          >
            <img
              src={isPaused ? playIcon : pauseIcon}
              alt="play/pause"
              className="w-[28px] h-[28px]"
            />
          </button>

          <button
            className="bg-[#FFFFFF29] w-[50px] h-[50px] flex justify-center items-center rounded-full border-[3px] border-[#FFFFFF33] cursor-pointer"
            onClick={nextVideo}
          >
            <img
              src={arrowVideo}
              alt="arrow-right"
              className="w-[28px] h-[28px] rotate-180"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroPage;
