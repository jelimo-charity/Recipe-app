import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Landing from './components/Landing';
import Recipes from './components/Recipes';
import Recipe from './components/Recipe';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/recipe/:recipeName" element={<Recipe />} />
          {/* <Route path="/footer" element={<Footer />} /> */}
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
