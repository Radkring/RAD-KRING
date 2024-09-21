import React from 'react';
import Navbar from './components/Navbar';
import MainSection from './components/MainSection';
import Specifications from './components/Specifications';
import MapAnimation from './components/MapAnimation';
import DesignViews from './components/DesignViews';
import Services from './components/Services';
import Footer from './components/Footer'; // Ensure this matches the file name
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <MainSection />
      <Specifications />
      <MapAnimation />
      <DesignViews />
      <Services />
      <Footer /> {/* Include the Footer component */}
    </>
  );
}

export default App;
