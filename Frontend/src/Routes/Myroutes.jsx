import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Homepage from "../pages/Homepage";
import Register from "../pages/Register";
import ProductDetails from "../pages/ProductDetails";
import Contact from "../pages/Contact";
import AddCategoryPage from "../pages/addCategory";
import Layout from "../pages/Layout/Layout";
import Cart from "../pages/Cart";

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Layout />} >
        
        
          <Route path="/"  element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/addcategory" element={<AddCategoryPage/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/productdetails" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default MyRoutes;
