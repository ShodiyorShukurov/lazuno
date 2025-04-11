import React, { useEffect } from 'react';
import ProductNavbar from '../../components/ProductNavbar';
import ProductDetail from '../../components/ProductDetail';
import Footer from '../../components/footer';
import About from '../../components/About';
import Accordion from '../../components/AccardionPage';
import Review from '../../components/Review';
import Similar from '../../components/Similar';
import { useLocation } from 'react-router-dom';

const ProductDetailPage = ({ setOpenSidebar }) => {
  const location = useLocation();

  useEffect(() => {
    scrollTo(0, 0);
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen">
      <ProductNavbar setOpenSidebar={setOpenSidebar} />
      <main>
        <ProductDetail />
        <Accordion />
        <Review />
        <Similar />
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetailPage;
