import React from "react";
import { Route, Routes } from "react-router-dom";
//
import Overview from "./../pages/Overview";
import Login from "./../pages/Login";
import Orders from "./../pages/Orders";
import Products from "../pages/Products";
import ProductDetails from "./../pages/ProductDetails";
import CreateCategories from "./../pages/CreateCategories";
import AllCategories from "./../pages/AllCategories";
import SubCategories from "./../pages/SubCategories";

//

const Router = () => {
  return (
    <Routes>
      {/* ONBOARDING */}
      <Route path="/" element={<Overview />} />

      {/* ================================================================ */}
      {/* AUTHENTICATION SECTION */}
      <Route path="/login" element={<Login />} />

      {/* ============================================================== */}
      {/* THE ORDERS SECTION */}
      <Route path="/order/all-orders" element={<Orders />} />

      {/* =================================================================== */}
      {/* THE PRODUCTS SECTION */}
      <Route path="product/all-products" element={<Products />} />
      <Route
        path="product/all-products/:productsid"
        element={<ProductDetails />}
      />
      <Route path="product/create-categories" element={<CreateCategories />} />
      <Route path="product/all-categories" element={<AllCategories />} />
      <Route
        path="product/all-categories/:categoryid"
        element={<SubCategories />}
      />
    </Routes>
  );
};

export default Router;
