import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// COMPONENTS
import Layout from "../common/Layout";
import { all_users } from "../redux/actions/usersAction";
import User from "./../components/users/Users";

//

const Users = () => {
  const { toggle } = useSelector((state) => state.utils);
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  // get all users
  useEffect(() => {
    if (token) {
      dispatch(all_users(token));
    }
  }, [dispatch, token]);

  //
  return (
    <Layout>
      <div id={toggle ? "response" : "responsive"}>
        <User />
      </div>
    </Layout>
  );
};

export default Users;
