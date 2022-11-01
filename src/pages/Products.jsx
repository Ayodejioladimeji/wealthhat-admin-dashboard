import React from "react";
import { useSelector } from "react-redux";
import Product from "./../components/products/Products";

// COMPONENTS

//

const Products = () => {
  const { toggle } = useSelector((state) => state.utils);

  //
  return (
    <div id={toggle ? "response" : "responsive"}>
      <Product />
    </div>
  );
};

export default Products;
