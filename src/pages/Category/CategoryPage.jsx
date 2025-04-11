import React, { useEffect } from 'react';
import Footer from '../../components/footer';
import ProductNavbar from '../../components/ProductNavbar';
import CategoryAllCards from '../../components/CategoryAllCards';
import { useLocation } from 'react-router-dom';

const CategoryPage = ({ setOpenSidebar, setOpen }) => {
  const location = useLocation();

  useEffect(() => {
    scrollTo(0, 0);
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen">
      <ProductNavbar setOpenSidebar={setOpenSidebar} />
      <main>
        <CategoryAllCards setOpen={setOpen} />
      </main>
      <Footer />
    </div>
  );
};

export default CategoryPage;
