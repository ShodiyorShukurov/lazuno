import React from 'react';
import MainPage from './pages/Main/MainPage';
import { Route, Routes } from 'react-router-dom';
import AboutUs from './pages/AboutUs/AboutUsPage';
import ContactPage from './pages/ContactUs/ContactPage';
import CartSidebar from './components/CardSidebar';
import useSidebar from './hooks/useSidebar';
import ProductPage from './pages/Product/ProductPage';
import FilterSidebar from './components/FilterSidebar'
import useFilter from './hooks/useFilter';

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
        <Route path="/product" element={<ProductPage setOpenSidebar={setOpenSidebar}  setOpen={setOpen}/>} />
      </Routes>

      <CartSidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
      <FilterSidebar open={open} setOpen={setOpen}/>
    </div>
  );
};

export default App;
