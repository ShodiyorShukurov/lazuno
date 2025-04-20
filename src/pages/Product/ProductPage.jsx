import React, { useEffect, useState } from 'react';
import ProductNavbar from '../../components/ProductNavbar';
import Footer from '../../components/footer';
import ProductAllCards from '../../components/ProductAllCard';
import { useLocation, useParams } from 'react-router-dom';
import UseProduct from '../../hooks/UseProduct';
import FilterCategorySidebar from '../../components/FilterCategorySidebar';
import UseCategory from '../../hooks/UseCategory';

const ProductPage = ({ setOpenSidebar }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const { id } = useParams();

  const { popularData, productColorData } = UseCategory();
  const { productData, currentPage, setCurrentPage, open, setOpen } =
    UseProduct(id, selectedCategories, selectedColors);

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

export default ProductPage;
