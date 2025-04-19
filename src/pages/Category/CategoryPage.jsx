import React, { useEffect } from 'react';
import Footer from '../../components/footer';
import ProductNavbar from '../../components/ProductNavbar';
import CategoryAllCards from '../../components/CategoryAllCards';
import { useLocation } from 'react-router-dom';
import UseCategory from '../../hooks/UseCategory';

const CategoryPage = ({ setOpenSidebar, setOpen }) => {
  const location = useLocation();
  const { categoryData, isLoading } = UseCategory();

  useEffect(() => {
    scrollTo(0, 0);
  }, [location]);

  if(isLoading){
    return <h3>{isLoading}</h3>
  }
  
  return (
    <div className="flex flex-col min-h-screen">
      <ProductNavbar setOpenSidebar={setOpenSidebar} />
      <main>
        <CategoryAllCards setOpen={setOpen} categoryData={categoryData}/>
      </main>
      <Footer />
    </div>
  );
};

export default CategoryPage;
