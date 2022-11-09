import React, { useState, useMemo } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import moment from "moment";

//
import "./AllPortfolio.css";
import Loading from "../../common/alert/Loading";
import Goback from "../../common/goback/Goback";
import Filter from "../../common/filter/Filter";
import { filteringMethod } from "../../utils/utils";

const PageSize = 25;

const AllPortfolio = () => {
  const { alert } = useSelector((state) => state);
  const { all_portfolio } = useSelector((state) => state.portfolio);
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState("");
  const [values, setValues] = useState("");

  let sorted = filteringMethod(all_portfolio, data, values);

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
    <div className="portfolio">
      <div className="portfolio-heading">
        <div className="portfolio-header">
          <h2>All Portfolio</h2>
          <Goback />
        </div>

        <div className="myportfolio-image">
          {/* <img src="/assets/gadgets.png" alt="" /> */}
        </div>
      </div>

      {/* display the filter component if current data is not null */}
      {currentData !== null && (
        <Filter
          filteringData={all_portfolio}
          PageSize={PageSize}
          data={data}
          setData={setData}
          values={values}
          setValues={setValues}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}

      {alert.portfolioloading ? (
        <div className="product-loading">
          <Loading width="45px" height="45px" color="#A1257D" />
        </div>
      ) : (
        <div className="portfolio-table">
          {/* display showing the length of items if current data is not null */}
          {currentData !== null && (
            <small className="showing">
              Showing <b>{count}</b> items of <b>{all_portfolio?.length}</b>{" "}
              total
            </small>
          )}

          {currentData === null ? (
            <p className="text-center mt-4">No portfolio found</p>
          ) : (
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">No.</th>
                  <th scope="col">Portfolio Name</th>
                  <th scope="col">Portfolio Type</th>
                  <th scope="col">Balance</th>
                  <th scope="col">Status</th>
                  <th scope="col">Date</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>

              <tbody>
                {currentData.map((item, index) => {
                  const {
                    _id,
                    portName,
                    portType,
                    balance,
                    closed,
                    updatedAt,
                  } = item;

                  const close = closed ? "closed" : "active";

                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>

                      <td>{portName}</td>
                      <td>{portType}</td>
                      <td>{balance}</td>
                      <td>{close}</td>
                      <td>{moment(updatedAt).format("MMMM Do YYYY")}</td>
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
          ? "portfolio not found"
          : ""}{" "}
      </p> */}
    </div>
  );
};

export default AllPortfolio;
