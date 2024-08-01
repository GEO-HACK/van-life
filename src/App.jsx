import React from "react";
import Home from "./pages/home";
import Vans ,{loader as vansLoader} from "./pages/Vans/vans";
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
import Errorroute from "./components/error"
import Error from "./pages/Error/error";
import Login from "./pages/login"
import AuthRequired from "./components/AuthRequired"

import {
   Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Link,
} from "react-router-dom";
import "./server";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<Errorroute/>}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route
       path="login"
       element={<Login/>}/>


      {/* vans path */}
      <Route path="vans" >
        <Route 
        index 
        element={<Vans />}
        
         loader={vansLoader}
          />
        <Route path=":id" element={<VanDetail />} />
      </Route>

      {/* host path */}
      <Route element={<AuthRequired/>}>

      <Route path="host" element={<HostLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="income" element={<Income />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="vans" element={<HostVans />}   />
        <Route path="vans/:id" element={<HostVanDetail />}>
          <Route index element={<HostVanInfo />} />
          <Route path="pricing" element={<HostVanPricing />} />
          <Route path="photos" element={<HostVanPhotos />} />
        </Route>
      </Route>
      </Route>
      <Route path="*" element={<Error />} />
    </Route>
  )
);

export default function App() {
  return (
   <RouterProvider router={router}/>
  );
}
