import React, { useEffect } from 'react';
import ProductNavbar from '../../components/ProductNavbar';
import Footer from '../../components/footer';
import ProductAllCards from '../../components/ProductAllCard';
import { useLocation, useParams } from 'react-router-dom';
import UseProduct from '../../hooks/UseProduct';

const ProductPage = ({ setOpenSidebar, setOpen }) => {
  const { id } = useParams();

  const { productData, currentPage, setCurrentPage } = UseProduct(id);

  const location = useLocation();
  useEffect(() => {
    scrollTo(0, 0);
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen">
      <ProductNavbar setOpenSidebar={setOpenSidebar} />
      <main>
        <ProductAllCards
          setOpen={setOpen}
          productData={productData}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </main>
      <Footer />
    </div>
  );
};

export default ProductPage;
