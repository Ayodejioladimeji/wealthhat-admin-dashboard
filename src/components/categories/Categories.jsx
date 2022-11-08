import React, { useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import moment from "moment";

//
import "./Categories.css";
import Loading from "../../common/alert/Loading";
import Goback from "../../common/goback/Goback";
import { filteredData } from "./../../utils/utils";
import CategoryFilter from "./../../common/filter/CategoryFilter";
import { GLOBALTYPES } from "./../../redux/actions/globalTypes";
import CreateCategories from "../createcategories/CreateCategories";

const PageSize = 5;

const Categories = () => {
  const { alert } = useSelector((state) => state);
  const { all_categories } = useSelector((state) => state.products);
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState("");
  const dispatch = useDispatch();

  // passing data to the fitering method
  let sorted = filteredData(all_categories, data);

  // Pagination function
  let page;
  let currentData = useMemo(() => {
    let firstPageIndex = (currentPage - 1) * PageSize;
    let lastPageIndex = firstPageIndex + PageSize;
    /* eslint-disable */
    page = firstPageIndex;
    return sorted.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, sorted]);

  //getting the length of items in a row
  const count = page + currentData.length;

  // Open the create category modal
  const handleModal = () => {
    dispatch({ type: GLOBALTYPES.CATEGORY_MODAL, payload: true });
  };

  //
  return (
    <div className="products">
      <div className="products-heading">
        <div className="products-header">
          <h2>All Categories</h2>
          <Goback />
        </div>

        <div className="products-button">
          <button onClick={handleModal}>Create Category</button>
        </div>
      </div>

      {/* display the filter component if current data is not null */}
      {currentData !== null && (
        <CategoryFilter
          filteringData={all_categories}
          PageSize={PageSize}
          data={data}
          setData={setData}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}

      {alert.productloading ? (
        <div className="product-loading">
          <Loading width="45px" height="45px" color="#A1257D" />
        </div>
      ) : (
        <div className="products-table">
          {/* display showing the length of items if current data is not null */}
          {currentData !== null && (
            <small className="showing">
              Showing <b>{count}</b> products of <b>{all_categories?.length}</b>{" "}
              total
            </small>
          )}

          {currentData === null ? (
            <p className="text-center mt-4">No products found</p>
          ) : (
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">No.</th>
                  <th scope="col">Category name</th>
                  <th scope="col">Date Created</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>

              <tbody>
                {currentData.map((item, index) => {
                  const { _id, name, updated_at } = item;

                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>

                      <td>{name}</td>
                      <td>{moment(updated_at).format("MMMM Do YYYY")}</td>
                      <td>
                        <div className="table-actions">
                          <button
                            onClick={() => navigate(`${_id}`)}
                            className="view"
                          >
                            View
                          </button>
                          <button className="edit">Edit</button>
                          <button className="delete">Delete</button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      )}

      <CreateCategories />
    </div>
  );
};

export default Categories;
