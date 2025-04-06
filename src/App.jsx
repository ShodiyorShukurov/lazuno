import React from 'react';
import MainPage from './pages/Main/MainPage';
import { Route, Routes } from 'react-router-dom';
import AboutUs from './pages/AboutUs/AboutUsPage';
import ContactPage from './pages/ContactUs/ContactPage';
import CartSidebar from './components/CardSidebar';
import useSidebar from './hooks/useSidebar';

const App = () => {
  const { openSidebar, setOpenSidebar } = useSidebar();

  return (
    <div className="relative min-h-screen">
      <Routes>
        <Route
          path="/"
          element={<MainPage setOpenSidebar={setOpenSidebar} />}
        />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <CartSidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
    </div>
  );
};

export default App;
