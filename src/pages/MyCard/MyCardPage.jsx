import React from 'react';
import ProductNavbar from '../../components/ProductNavbar';
import MyCard from '../../components/MyCard';
import Footer from '../../components/footer';

const MyCardPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <ProductNavbar />
      <main className="flex-1">
        <MyCard />
      </main>
      <Footer />
    </div>
  );
};

export default MyCardPage;
