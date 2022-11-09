import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Layout from "../common/Layout";
import Activities from "../components/activity/Activity";
import { all_activity } from "./../redux/actions/activityAction";

// COMPONENTS

//

const Activity = () => {
  const { toggle } = useSelector((state) => state.utils);
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  // get all users
  useEffect(() => {
    if (token) {
      dispatch(all_activity(token));
    }
  }, [dispatch, token]);

  //
  return (
    <Layout>
      <div id={toggle ? "response" : "responsive"}>
        <Activities />
      </div>
    </Layout>
  );
};

export default Activity;
