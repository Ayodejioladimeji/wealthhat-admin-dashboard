import React from "react";

//
import "./Filter.css";
import Paginate from "../pagination/Paginate";

//

const CategoryFilter = ({
  filteringData,
  PageSize,
  data,
  setData,
  currentPage,
  setCurrentPage,
}) => {
  //   The search handleChange
  const handleChange = (e) => {
    setData(e.target.value);
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

export default CategoryFilter;
