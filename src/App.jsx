import React from 'react';
import MainPage from './pages/Main/MainPage';
import { Route, Routes } from 'react-router-dom';
import AboutUs from './pages/AboutUs/AboutUsPage';
import ContactPage from './pages/ContactUs/ContactPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
};

export default App;
