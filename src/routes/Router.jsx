import React from 'react';
import { Route, Routes } from 'react-router-dom';
//
import Overview from './../pages/Overview';
import Login from './../pages/Login';
import Users from '../pages/Users';
import Activity from './../pages/Activity';
import AllAgent from './../pages/AllAgent';
import CreateAgent from './../pages/CreateAgent';
import AllPortfolio from './../pages/AllPortfolio';
import ClosedPortfolio from './../pages/ClosedPortfolio copy';
import WithdrawRequest from './../pages/WithdrawRequest';
import AllPayment from './../pages/AllPayment';
import AllWithdrawal from './../pages/AllWithdrawal';
import AllDeposit from './../pages/AllDeposit';
import Settings from './../pages/Settings';

//

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Login />} />

      {/* Dashboard */}
      <Route path='/overview' element={<Overview />} />
      <Route path='/dashboard/all-activity' element={<Activity />} />

      {/* Agents */}
      <Route path='/dashboard/create-agent' element={<CreateAgent />} />
      <Route path='/dashboard/all-agents' element={<AllAgent />} />

      {/* Portfolios */}
      <Route path='/dashoard/all-portfolios' element={<AllPortfolio />} />
      <Route path='/dashboard/closed-portfolio' element={<ClosedPortfolio />} />

      {/* Transactions */}
      <Route path='dashboard/withdraw-request' element={<WithdrawRequest />} />
      <Route path='dashboard/all-payment' element={<AllPayment />} />
      <Route path='dashboard/all-withdrawal' element={<AllWithdrawal />} />
      <Route path='dashboard/all-deposits' element={<AllDeposit />} />

      {/* users */}
      <Route path='users/all-users' element={<Users />} />

      {/* Settings */}
      <Route path='users/all-users' element={<Settings />} />

      {/* <Route
        path='users/all-products/:productsid'
        element={<ProductDetails />}
      />

      <Route
        path='users/all-categories/:categoryid'
        element={<SubCategories />}
      /> */}
    </Routes>
  );
};

export default Router;
