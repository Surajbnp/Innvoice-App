import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Addpage from "./Addpage";
import Editpage from "./Editpage";
import ProductPage from "./ProductPage";
import CartPage from "./CartPage";
import BillPage from "./BillPage";
import SinglePage from "./SinglePage";
import Login from "./Login";
import Signup from './Signup';


const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      {/* <Route path="/add" element={<Addpage />} />
      <Route path="/editpage/:id" element={<Editpage />} />
      <Route path="/productpage/:id" element={<ProductPage />} /> */}
      {/* <Route path="/cart" element={<CartPage />} />
      <Route path="/bill" element={<BillPage />} />
      <Route path="/bill/:id" element={<SinglePage />} /> */}
      <Route path="/login" element={<Login />}/>
      <Route path="/signup" element={<Signup />}/>
    </Routes>
  );
};

export default MainRoutes;
