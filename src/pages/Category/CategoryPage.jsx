import React from 'react';
import Footer from '../../components/footer';
import ProductNavbar from '../../components/ProductNavbar';
import CategoryAllCards from '../../components/CategoryAllCards';

const CategoryPage = ({ setOpenSidebar,  setOpen }) => {
  return (
    <>
      <ProductNavbar setOpenSidebar={setOpenSidebar}  />
      <main>
        <CategoryAllCards setOpen={setOpen} />
      </main>
      <Footer />
    </>
  );
};

export default CategoryPage;
