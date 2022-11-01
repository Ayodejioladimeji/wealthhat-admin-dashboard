import React from "react";
import { useSelector } from "react-redux";
import SubCategory from "../components/subcategories/SubCategories";

// COMPONENTS

//

const SubCategories = () => {
  const { toggle } = useSelector((state) => state.utils);

  //
  return (
    <div id={toggle ? "response" : "responsive"}>
      <SubCategory />
    </div>
  );
};

export default SubCategories;
