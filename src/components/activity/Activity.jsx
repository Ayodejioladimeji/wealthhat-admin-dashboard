import React, { useState, useMemo } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import moment from "moment";

//
import "./Activity.css";
import Loading from "../../common/alert/Loading";
import Goback from "../../common/goback/Goback";
import Filter from "../../common/filter/Filter";
import { filteringMethod } from "../../utils/utils";

const PageSize = 25;

const Activity = () => {
  const { alert } = useSelector((state) => state);
  const { all_activity } = useSelector((state) => state.activity);
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState("");
  const [values, setValues] = useState("");

  let sorted = filteringMethod(all_activity, data, values);

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
    <div className="activity">
      <div className="activity-heading">
        <div className="activity-header">
          <h2>All Activity</h2>
          <Goback />
        </div>

        <div className="myactivity-image">
          {/* <img src="/assets/gadgets.png" alt="" /> */}
        </div>
      </div>

      {/* display the filter component if current data is not null */}
      {currentData !== null && (
        <Filter
          filteringData={all_activity}
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
        <div className="activity-table">
          {/* display showing the length of items if current data is not null */}
          {currentData !== null && (
            <small className="showing">
              Showing <b>{count}</b> items of <b>{all_activity?.length}</b>{" "}
              total
            </small>
          )}

          {currentData === null ? (
            <p className="text-center mt-4">No activity found</p>
          ) : (
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">No.</th>
                  <th scope="col">Name</th>
                  <th scope="col">Transaction Type</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Date</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>

              <tbody>
                {currentData.map((item, index) => {
                  const { _id, type, amount, user, updatedAt } = item;

                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>

                      <td>
                        {user.firstname} {user.lastname}
                      </td>
                      <td>{type}</td>
                      <td>{amount}</td>
                      <td>{user.email}</td>
                      <td>{user.phone}</td>
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
          ? "activity not found"
          : ""}{" "}
      </p> */}
    </div>
  );
};

export default Activity;
