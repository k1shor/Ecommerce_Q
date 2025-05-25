import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "../pages/Cart";
import Layout from "../pages/Layout/Layout";
import Homepage from "../pages/Homepage";

const Myroutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />

          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Myroutes;
