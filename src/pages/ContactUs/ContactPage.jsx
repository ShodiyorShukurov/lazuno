import React from 'react';
import Navbar from '../../components/Navbar';
import HeroPage from '../../components/HeroPage';
import About from '../../components/About';
import Footer from '../../components/footer';
import ContactUs from '../../components/Contact-us';



const ContactPage = ({setOpenSidebar}) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar setOpenSidebar={setOpenSidebar} />
      <HeroPage />
      <main>
        <ContactUs/>
        <About/>
      </main>
      <Footer/>
    </div>
  );
};

export default ContactPage;
