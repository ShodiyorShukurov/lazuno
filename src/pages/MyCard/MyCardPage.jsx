import React from 'react';
import ProductNavbar from '../../components/ProductNavbar';
import MyCard from '../../components/MyCard';
import Footer from '../../components/footer';

const MyCardPage = () => {
  return (
    <>
      <ProductNavbar />
      <main>
        <MyCard />
      </main>
      <Footer />
    </>
  );
};

export default MyCardPage;
