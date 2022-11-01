import React, { useState, useMemo } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addComma } from "comma-separator";
import moment from "moment";

//
import "./Products.css";
import Loading from "../../common/alert/Loading";
import Goback from "../../common/goback/Goback";
import Filter from "../../common/filter/Filter";
import { filteringMethod } from "./../../utils/utils";

const PageSize = 25;

const Products = () => {
  const { alert } = useSelector((state) => state);
  const { all_products } = useSelector((state) => state.products);
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState("");
  const [values, setValues] = useState("");

  let sorted = filteringMethod(all_products, data, values);

  // Pagination function
  let page;
  let currentData = useMemo(() => {
    let firstPageIndex = (currentPage - 1) * PageSize;
    let lastPageIndex = firstPageIndex + PageSize;
    /* eslint-disable */
    page = firstPageIndex;
    return sorted.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, sorted]);

  //
  const count = page + currentData.length;

  //
  return (
    <div className="products">
      <div className="products-heading">
        <div className="products-header">
          <h2>All Products</h2>
          <Goback />
        </div>

        <div className="myproducts-image">
          <img src="/assets/gadgets.png" alt="" />
        </div>
      </div>

      {/* display the filter component if current data is not null */}
      {currentData !== null && (
        <Filter
          filteringData={all_products}
          PageSize={PageSize}
          data={data}
          setData={setData}
          values={values}
          setValues={setValues}
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
              Showing <b>{count}</b> products of <b>{all_products?.length}</b>{" "}
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
                  <th scope="col">Image</th>
                  <th scope="col">Product Name</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Discount</th>
                  <th scope="col">Posted By</th>
                  <th scope="col">Date Posted</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>

              <tbody>
                {currentData.map((item, index) => {
                  const {
                    _id,
                    productname,
                    productamount,
                    productimages,
                    productdiscount,
                    vendor,
                    updatedat,
                  } = item;

                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>
                        <div className="table-image">
                          <img src={productimages[0]} alt="course-pic" />
                        </div>
                      </td>
                      <td>{productname}</td>
                      <td>₦{addComma(productamount)}</td>
                      <td>{!productdiscount ? "0" : productdiscount}%</td>
                      <td>{vendor}</td>
                      <td>{moment(updatedat).format("MMMM Do YYYY")}</td>
                      <td>
                        <div className="table-actions">
                          <button
                            onClick={() => navigate(`${_id}`)}
                            className="view"
                          >
                            view
                          </button>
                          <button className="delete">delete</button>
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

      {/* <p className="text-center mt-5">
        {currentData?.length === 0 && !loading && !alert.loading
          ? "products not found"
          : ""}{" "}
      </p> */}
    </div>
  );
};

export default Products;
