import React from 'react';
import Navbar from './components/Navbar';
import MainSection from './components/MainSection';
import Specifications from './components/Specifications';
import MapAnimation from './components/MapAnimation';
import DesignViews from './components/DesignViews';
import Services from './components/Services';
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
    </>
  );
}

export default App;
