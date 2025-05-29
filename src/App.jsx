import { useState } from 'react';
import NavBar from './components/NavBar';
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter basename="/Proy_Pre_React_NSM">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App
