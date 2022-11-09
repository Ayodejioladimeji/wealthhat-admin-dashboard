import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// COMPONENTS
import Layout from "../common/Layout";
import { all_agents } from "./../redux/actions/usersAction";
import AllAgents from "./../components/agent/AllAgent";

//

const AllAgent = () => {
  const { toggle } = useSelector((state) => state.utils);
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  // get all users
  useEffect(() => {
    if (token) {
      dispatch(all_agents(token));
    }
  }, [dispatch, token]);

  //
  return (
    <Layout>
      <div id={toggle ? "response" : "responsive"}>
        <AllAgents />
      </div>
    </Layout>
  );
};

export default AllAgent;
