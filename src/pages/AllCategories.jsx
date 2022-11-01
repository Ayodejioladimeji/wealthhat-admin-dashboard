import React from "react";
import { useSelector } from "react-redux";
import Category from "../components/categories/Categories";

// COMPONENTS

//

const AllCategories = () => {
  const { toggle } = useSelector((state) => state.utils);

  //
  return (
    <div id={toggle ? "response" : "responsive"}>
      <Category />
    </div>
  );
};

export default AllCategories;
