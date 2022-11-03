import React from 'react';
import { Route, Routes } from 'react-router-dom';
//
import Overview from './../pages/Overview';
import Login from './../pages/Login';
import Users from '../pages/Users';
import ProductDetails from './../pages/ProductDetails';
import SubCategories from './../pages/SubCategories';

//

const Router = () => {
  return (
    <Routes>
      {/* ONBOARDING */}
      <Route path='/' element={<Overview />} />

      {/* ================================================================ */}
      {/* AUTHENTICATION SECTION */}
      <Route path='/sign_in' element={<Login />} />

      {/* =================================================================== */}
      {/* THE USERS SECTION */}
      <Route path='users/all-users' element={<Users />} />
      <Route
        path='users/all-products/:productsid'
        element={<ProductDetails />}
      />

      <Route
        path='users/all-categories/:categoryid'
        element={<SubCategories />}
      />
    </Routes>
  );
};

export default Router;
