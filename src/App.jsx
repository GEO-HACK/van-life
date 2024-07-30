import React from "react";
import Home from "./pages/home";
import Vans from "./pages/Vans/vans";
import About from "./pages/About";
import Layout from "./components/layout";
import HostLayout from "./components/HostLayout";
import VanDetail from "./pages/Vans/VanDetail";
import Dashboard from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import HostVans from "./pages/Host/vans"; 
import HostVanDetail from "./pages/Host/VanDetail"; 
import HostVanPricing from "./pages/Host/HostVanPricing";
import HostVanPhotos from "./pages/Host/HostVanPhotos";
import HostVanInfo from "./pages/Host/HostVanInfo";

import Error from './components/error'


import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./server";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* home path */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          
            {/* vans path */}
          <Route path="vans"  >
            <Route index element={<Vans />}/>
            <Route path=":id" element={<VanDetail />} />
          </Route>
           
          {/* host path */}
          <Route path="host" element={<HostLayout/>}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="vans/:id" element={<HostVanDetail />}>
              <Route index element={<HostVanInfo/>} />
              <Route path="pricing" element={<HostVanPricing/>} />
              <Route path="photos" element={<HostVanPhotos/>} />
              
            </Route>
          </Route>
          <Route path="*" element={<Error/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

