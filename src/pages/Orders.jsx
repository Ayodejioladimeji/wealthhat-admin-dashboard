import React from "react";
import { useSelector } from "react-redux";

// COMPONENTS
import Order from "./../components/orders/Orders";

//

const Orders = () => {
  const { toggle } = useSelector((state) => state.utils);

  //
  return (
    <div id={toggle ? "response" : "responsive"}>
      <Order />
    </div>
  );
};

export default Orders;
