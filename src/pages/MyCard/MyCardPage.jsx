import React from 'react';
import ProductNavbar from '../../components/ProductNavbar';
import MyCard from '../../components/MyCard';
import Footer from '../../components/footer';

const MyCardPage = ({ setOpenSidebar, setAddProduct }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <ProductNavbar setOpenSidebar={setOpenSidebar} />
      <main className="flex-1">
        <MyCard setAddProduct={setAddProduct} />
      </main>
      <Footer />
    </div>
  );
};

export default MyCardPage;
