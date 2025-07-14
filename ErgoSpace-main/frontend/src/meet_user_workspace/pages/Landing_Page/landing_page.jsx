// App.jsx - Main component that assembles all sections
import React from "react";
import Header from "../../components/Landing_Page_compoents/Header/Header";
import Hero from "../../components/Landing_Page_compoents/Hero/Hero";
import Features from "../../components/Landing_Page_compoents/Features/Features";
import Modes from "../../components/Landing_Page_compoents/Modes/Modes";
import Reviews from "../../components/Landing_Page_compoents/Reviews/Reviews";
import Footer from "../../components/Landing_Page_compoents/Footer/Footer";
import CafeSection from '../../components/Landing_Page_compoents/CafeSection/CafeSection';
import StartupSection from '../../components/Landing_Page_compoents/StartupSection/StartupSection';

const LandingPage = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Features />
        <Modes />
        <CafeSection />
        <StartupSection />
        <Reviews />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;