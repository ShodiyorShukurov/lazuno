import React from 'react';
import Navbar from '../../components/Navbar';
import HeroPage from '../../components/HeroPage';
import Partners from '../../components/Partners';
import StatisticCard from '../../components/StatisticCard';
import ProductList from '../../components/ProductCard';
import InfoCard from '../../components/InfoCard';
import Testimonials from '../../components/Testimonials';

const MainPage = () => {
  return (
    <>
      <Navbar />
      <HeroPage />
      <main>
        <Partners />
        <StatisticCard />
        <ProductList />
        <InfoCard />
        <Testimonials/>
      </main>
    </>
  );
};

export default MainPage;
