import React, { useEffect } from 'react';
import ProductNavbar from '../../components/ProductNavbar';
import Footer from '../../components/footer';
import ProductAllCards from '../../components/ProductAllCard';
import { useLocation } from 'react-router-dom';

const ProductPage = ({setOpenSidebar, setOpen}) => {
  const location = useLocation()
  useEffect(()=>{
    scrollTo(0, 0)
  },[location])

  return (
    <>
      <ProductNavbar  setOpenSidebar={setOpenSidebar}/>
      <main>
        <ProductAllCards  setOpen={setOpen} />
      </main>
      <Footer />
    </>
  );
};

export default ProductPage;
