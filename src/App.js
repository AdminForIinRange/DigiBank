import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";


import Home from './components/Home'
import AboutUs from './components/AboutUs'
import Services from './components/Services'
import Finance from './components/Finance'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Outlet />}>
      <Route index element={<Home />} />
      <Route path="Services" element={<Services />} />
      <Route path="Finance" element={<Finance />} />
      <Route path="AboutUs" element={<AboutUs />} />

    </Route>
  )
);

export default function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
    
  );
}
