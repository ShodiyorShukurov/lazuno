import React, { useEffect } from 'react';
import ProductNavbar from '../../components/ProductNavbar';
import Footer from '../../components/footer';
import ProductAllCards from '../../components/ProductAllCard';
import { useLocation } from 'react-router-dom';

const ProductPage = () => {
  const location = useLocation()
  useEffect(()=>{
    scrollTo(0, 0)
  },[location])

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
