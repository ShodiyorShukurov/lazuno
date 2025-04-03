import React from 'react';
import Navbar from '../../components/Navbar';
import HeroPage from '../../components/HeroPage';
import Partners from '../../components/Partners';
import StatisticCard from '../../components/StatisticCard';
import ProductList from '../../components/ProductCard';
import InfoCard from '../../components/InfoCard';
import Testimonials from '../../components/Testimonials';
import About from '../../components/About';
import Footer from '../../components/footer';
import Collection from '../../components/Collection';

const MainPage = () => {
  return (
    <>
      <Navbar />
      <HeroPage />
      <main>
        <Partners />
        <StatisticCard />
        {/* <Collection/> */}
        <ProductList />
        <InfoCard />
        <Testimonials/>
        <About/>
      </main>
      <Footer/>
    </>
  );
};

export default MainPage;
