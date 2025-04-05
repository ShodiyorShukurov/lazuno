import React from 'react';
import Navbar from '../../components/Navbar';
import HeroPage from '../../components/HeroPage';
import Partners from '../../components/Partners';
import About from '../../components/About';
import Footer from '../../components/footer';
import StatisticCard from '../../components/StatisticCard';
import AboutUsComponent from '../../components/about-us';


const ContactPage = () => {
  return (
    <>
      <Navbar />
      <HeroPage />
      <main>
        <Partners />
        <About/>
      </main>
      <Footer/>
    </>
  );
};

export default ContactPage;
