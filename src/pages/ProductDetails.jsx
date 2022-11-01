import React from "react";
import { useSelector } from "react-redux";
import Detail from "./../components/productdetails/Detail";

// COMPONENTS

//

const ProductDetails = () => {
  const { toggle } = useSelector((state) => state.utils);

  //
  return (
    <div id={toggle ? "response" : "responsive"}>
      <Detail />
    </div>
  );
};

export default ProductDetails;
