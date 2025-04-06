import React from 'react';
import Footer from '../../components/footer';
import ProductNavbar from '../../components/ProductNavbar';
import ProductAllCards from '../../components/ProductAllCards';

const ProductPage = ({ setOpenSidebar,  setOpen }) => {
  return (
    <>
      <ProductNavbar setOpenSidebar={setOpenSidebar}  />
      <main>
        <ProductAllCards setOpen={setOpen} />
      </main>
      <Footer />
    </>
  );
};

export default ProductPage;
