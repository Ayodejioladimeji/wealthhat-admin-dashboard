import React from 'react';
import { Route, Routes } from 'react-router-dom';
//
import Overview from './../pages/Overview';
import Login from './../pages/Login';
import Orders from './../pages/Orders';
import Users from '../pages/Users';
import ProductDetails from './../pages/ProductDetails';
import CreateCategories from './../pages/CreateCategories';
import AllCategories from './../pages/AllCategories';
import SubCategories from './../pages/SubCategories';

//

const Router = () => {
  return (
    <Routes>
      {/* ONBOARDING */}
      <Route path='/' element={<Overview />} />

      {/* ================================================================ */}
      {/* AUTHENTICATION SECTION */}
      <Route path='/login' element={<Login />} />

      {/* ============================================================== */}
      {/* THE ORDERS SECTION */}
      <Route path='/order/all-orders' element={<Orders />} />

      {/* =================================================================== */}
      {/* THE USERS SECTION */}
      <Route path='users/all-users' element={<Users />} />
      <Route
        path='users/all-products/:productsid'
        element={<ProductDetails />}
      />
      <Route path='users/create-user' element={<CreateCategories />} />
      <Route path='users/all-categories' element={<AllCategories />} />
      <Route
        path='users/all-categories/:categoryid'
        element={<SubCategories />}
      />
    </Routes>
  );
};

export default Router;
