import React, { useEffect } from 'react';
import ProductNavbar from '../../components/ProductNavbar';
import ProductDetail from '../../components/ProductDetail';
import Footer from '../../components/footer';
import About from '../../components/About';
import Accordion from '../../components/AccardionPage';
import Review from '../../components/Review';
import Similar from '../../components/Similar';
import { useLocation, useParams } from 'react-router-dom';
import UseProductDetail from '../../hooks/UseProductDetail';

const ProductDetailPage = ({ setOpenSidebar, setAddProduct }) => {
  const { id } = useParams();
  const { productDetailData, prroductDetailLoading, } = UseProductDetail(id);
  const location = useLocation();

  useEffect(() => {
    scrollTo(0, 0);
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen">
      <ProductNavbar setOpenSidebar={setOpenSidebar} />
      <main>
        <ProductDetail productDetailData={productDetailData} setAddProduct={setAddProduct}  />
        <Accordion productDetailData={productDetailData}/>
        <Review productDetailData={productDetailData}/>
        <Similar />
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetailPage;
