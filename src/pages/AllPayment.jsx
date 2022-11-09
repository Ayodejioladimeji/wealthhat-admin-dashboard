import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Layout from "../common/Layout";
import Payment from "./../components/payment/Payment";
import { all_payment } from "./../redux/actions/paymentAction";

// COMPONENTS

//

const AllPayment = () => {
  const { toggle } = useSelector((state) => state.utils);
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  // get all users
  useEffect(() => {
    if (token) {
      dispatch(all_payment(token));
    }
  }, [dispatch, token]);

  //
  return (
    <Layout>
      <div id={toggle ? "response" : "responsive"}>
        <Payment />
      </div>
    </Layout>
  );
};

export default AllPayment;
