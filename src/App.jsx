import React from 'react';
import MainPage from './pages/Main/MainPage';
import { Route, Routes } from 'react-router-dom';
import AboutUs from './pages/AboutUs/AboutUsPage';
import ContactPage from './pages/ContactUs/ContactPage';
import CartSidebar from './components/CardSidebar';
import CategoryPage from './pages/Category/CategoryPage';
import ProductDetailPage from './pages/ProductDetail/ProductDetailPage';
import useSidebar from './hooks/useSidebar';
import ProductPage from './pages/Product/ProductPage';
import MyCardPage from './pages/MyCard/MyCardPage';
import UseProductDetail from './hooks/UseProductDetail';

const App = () => {
  const { openSidebar, setOpenSidebar } = useSidebar();
  const { addProduct, setAddProduct } = UseProductDetail();

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
        <Route
          path="/category"
          element={<CategoryPage setOpenSidebar={setOpenSidebar} />}
        />
        <Route
          path="/category/:id"
          element={<ProductPage setOpenSidebar={setOpenSidebar} />}
        />
        <Route
          path="/product/:id"
          element={
            <ProductDetailPage
              setOpenSidebar={setOpenSidebar}
              setAddProduct={setAddProduct}
            />
          }
        />
        <Route
          path="/my-card"
          element={
            <MyCardPage
              setOpenSidebar={setOpenSidebar}
              setAddProduct={setAddProduct}
            />
          }
        />
      </Routes>

      <CartSidebar
        openSidebar={openSidebar}
        setOpenSidebar={setOpenSidebar}
        addProduct={addProduct}
      />
    </div>
  );
};

export default App;
