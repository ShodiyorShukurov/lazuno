import React from 'react';
import ProductNavbar from '../../components/ProductNavbar';
import Footer from '../../components/footer';
import ProductAllCards from '../../components/ProductAllCard';

const ProductPage = () => {
  return (
    <>
      <ProductNavbar />
      <main>
        <ProductAllCards />
      </main>
      <Footer />
    </>
  );
};

export default ProductPage;
