import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Layout from "../common/Layout";
import AllPortfolios from "./../components/portfolio/AllPortfolio";
import { all_portfolio } from "./../redux/actions/portfolioAction";

// COMPONENTS

//

const AllPortfolio = () => {
  const { toggle } = useSelector((state) => state.utils);
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  // get all users
  useEffect(() => {
    if (token) {
      dispatch(all_portfolio(token));
    }
  }, [dispatch, token]);

  //
  return (
    <Layout>
      <div id={toggle ? "response" : "responsive"}>
        <AllPortfolios />
      </div>
    </Layout>
  );
};

export default AllPortfolio;
