import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import HeroPage from '../../components/HeroPage';
import Partners from '../../components/Partners';
import About from '../../components/About';
import Footer from '../../components/footer';
import StatisticCard from '../../components/StatisticCard';
import AboutUsComponent from '../../components/About-us';
import { useLocation } from 'react-router-dom';

const AboutUs = ({ setOpenSidebar }) => {
  const location = useLocation();
  useEffect(() => {
    scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Navbar setOpenSidebar={setOpenSidebar} />
      <HeroPage />
      <main>
        <Partners />
        <AboutUsComponent />
        <StatisticCard />
        <About />
      </main>
      <Footer />
    </>
  );
};

export default AboutUs;
