import React from 'react';
import { useSelector } from 'react-redux';
import Layout from '../common/Layout';
import User from '../components/users/Users';

// COMPONENTS

//

const AllWithdrawal = () => {
  const { toggle } = useSelector((state) => state.utils);

  //
  return (
    <Layout>
      <div id={toggle ? 'response' : 'responsive'}>
        <User />
      </div>
    </Layout>
  );
};

export default AllWithdrawal;
