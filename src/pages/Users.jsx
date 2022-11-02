import React from 'react';
import { useSelector } from 'react-redux';
import User from './../components/users/Users';

// COMPONENTS

//

const Users = () => {
  const { toggle } = useSelector((state) => state.utils);

  //
  return (
    <div id={toggle ? 'response' : 'responsive'}>
      <User />
    </div>
  );
};

export default Users;
