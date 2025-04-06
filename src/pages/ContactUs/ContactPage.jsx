import React from 'react';
import Navbar from '../../components/Navbar';
import HeroPage from '../../components/HeroPage';
import About from '../../components/About';
import Footer from '../../components/footer';
import ContactUs from '../../components/Contact-us';



const ContactPage = () => {
  return (
    <>
      <Navbar />
      <HeroPage />
      <main>
        <ContactUs/>
        <About/>
      </main>
      <Footer/>
    </>
  );
};

export default ContactPage;
