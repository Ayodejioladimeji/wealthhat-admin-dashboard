import React from "react";

//
import "./Filter.css";
import Paginate from "./../pagination/Paginate";

//

const Filter = ({
  filteringData,
  PageSize,
  data,
  setData,
  values,
  setValues,
  currentPage,
  setCurrentPage,
}) => {
  //   The search handleChange
  const handleChange = (e) => {
    setData(e.target.value);
  };

  // The sort handle sort
  const handleSort = (e) => {
    setValues(e.target.value);
  };

  //

  return (
    <div className="filter">
      <div className="filtering">
        <input
          type="text"
          onChange={handleChange}
          value={data}
          placeholder="Search products"
        />
        <select onChange={handleSort} value={values}>
          <option defaultValue="Sort by">Sort by</option>
          <option value="1">Price: Low-High</option>
          <option value="2">Price: High-Low</option>
          <option>Discount</option>
        </select>
      </div>

      <div className="paginating">
        <Paginate
          className="pagination-bar"
          currentPage={currentPage}
          totalCount={filteringData.length}
          pageSize={PageSize}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
};

export default Filter;
