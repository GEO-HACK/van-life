import React from "react";
import Home from "./pages/home";
import Vans from "./pages/vans";
import About from "./pages/About";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './server'


export default function App() {
  return (
    <BrowserRouter>
      <header>
      <Link className='site-logo' to="/">#vanIt</Link>
        <nav>
          <Link to="/vans">Vans</Link>
          <Link to="/about">About</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vans" element={<Vans />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
