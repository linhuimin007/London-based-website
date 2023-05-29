import React from 'react';
import Navbar from './components/pages/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './components/pages/Contact';
import About from './components/pages/About';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
