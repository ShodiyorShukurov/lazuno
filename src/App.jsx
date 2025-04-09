import React from 'react';
import MainPage from './pages/Main/MainPage';
import { Route, Routes } from 'react-router-dom';
import AboutUs from './pages/AboutUs/AboutUsPage';
import ContactPage from './pages/ContactUs/ContactPage';
import CartSidebar from './components/CardSidebar';
import CategoryPage from './pages/Category/CategoryPage';
import FilterCategorySidebar from './components/FilterCategorySidebar'
import ProductDetailPage from './pages/ProductDetail/ProductDetailPage';
import useFilter from './hooks/useFilter';
import useSidebar from './hooks/useSidebar';
import ProductPage from './pages/Product/ProductPage';

const App = () => {
  const { openSidebar, setOpenSidebar } = useSidebar();
  const {open, setOpen} = useFilter()

  return (
    <div className="relative min-h-screen">
      <Routes>
        <Route
          path="/"
          element={<MainPage setOpenSidebar={setOpenSidebar} />}
        />
        <Route
          path="/about-us"
          element={<AboutUs setOpenSidebar={setOpenSidebar} />}
        />
        <Route
          path="/contact"
          element={<ContactPage setOpenSidebar={setOpenSidebar} />}
        />
        <Route path="/category" element={<CategoryPage setOpenSidebar={setOpenSidebar}  setOpen={setOpen}/>} />
        <Route path="/category/:id" element={<ProductPage setOpenSidebar={setOpenSidebar}  setOpen={setOpen}/>} />
        <Route
          path="/product/:id"
          element={<ProductDetailPage setOpenSidebar={setOpenSidebar}/>}/>
      </Routes>

      <CartSidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
      <FilterCategorySidebar open={open} setOpen={setOpen}/>
    </div>
  );
};

export default App;
