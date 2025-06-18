import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Homepage from "../pages/Homepage";
import Register from "../pages/Register";
import ProductDetails from "../pages/ProductDetails";

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/addcategory" element={<AddCategoryPage/>} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="/productdetails" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MyRoutes;
