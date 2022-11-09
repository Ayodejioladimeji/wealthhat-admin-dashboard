import React from 'react';
import Topbar from './../components/topbar/Topbar';
import Sidebar from './../components/sidebar/Sidebar';

const Layout = ({ children }) => {
  return (
    <>
      <Topbar />
      <Sidebar />
      {children}
    </>
  );
};

export default Layout;
