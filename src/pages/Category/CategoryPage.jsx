import React, { useEffect, useState } from 'react';
import Footer from '../../components/footer';
import ProductNavbar from '../../components/ProductNavbar';
import CategoryAllCards from '../../components/CategoryAllCards';
import FilterCategorySidebar from '../../components/FilterCategorySidebar';
import { useLocation } from 'react-router-dom';
import UseCategory from '../../hooks/UseCategory';
import UseProduct from '../../hooks/UseProduct';

const CategoryPage = ({ setOpenSidebar }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);

  const location = useLocation();
  const {
    categoryData,
    isLoading,
    popularData,
    open,
    setOpen,
    productColorData,
  } = UseCategory();

  const { productData } = UseProduct(null, selectedCategories, selectedColors);

  useEffect(() => {
    scrollTo(0, 0);
  }, [location]);

  if (isLoading) {
    return <h3>{isLoading}</h3>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <ProductNavbar setOpenSidebar={setOpenSidebar} />
      <main>
        <CategoryAllCards
          setOpen={setOpen}
          categoryData={
            selectedCategories.length > 0 || selectedColors.length > 0
              ? productData
              : categoryData
          }
        />
      </main>
      <FilterCategorySidebar
        open={open}
        setOpen={setOpen}
        popularData={popularData}
        productColorData={productColorData}
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
        selectedColors={selectedColors}
        setSelectedColors={setSelectedColors}
      />
      <Footer />
    </div>
  );
};

export default CategoryPage;
