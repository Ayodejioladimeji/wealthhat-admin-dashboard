import React, { useState, useMemo } from "react";
import { useSelector } from "react-redux";
import moment from "moment";

//
import "./AllAgent.css";
import Loading from "../../common/alert/Loading";
import Goback from "../../common/goback/Goback";
import Filter from "../../common/filter/Filter";
import { filteringMethod } from "../../utils/utils";
import { delete_agents } from "./../../redux/actions/usersAction";

const PageSize = 25;

const AllAgent = () => {
  const { alert } = useSelector((state) => state);
  const { all_agents } = useSelector((state) => state.users);
  const { token } = useSelector((state) => state.auth);
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState("");
  const [values, setValues] = useState("");

  let sorted = filteringMethod(all_agents, data, values);

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

  // Handle Delete method
  const handleDelete = (id) => {
    dispatch(delete_agents(id, token));
  };

  //
  return (
    <div className="agents">
      <div className="agents-heading">
        <div className="agents-header">
          <h2>All agents</h2>
          <Goback />
        </div>

        <div className="myagents-image">
          {/* <img src='/assets/gadgets.png' alt='' /> */}
        </div>
      </div>

      {/* display the filter component if current data is not null */}
      {currentData !== null && count !== 0 && (
        <Filter
          filteringData={all_agents}
          PageSize={PageSize}
          data={data}
          setData={setData}
          values={values}
          setValues={setValues}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}

      {alert.getagentloading ? (
        <div className="product-loading">
          <Loading width="45px" height="45px" color="#A1257D" />
        </div>
      ) : (
        <div className="agents-table">
          {/* display showing the length of items if current data is not null */}
          {currentData !== null && (
            <small className="showing">
              Showing <b>{count}</b> items of <b>{all_agents?.length}</b> total
            </small>
          )}

          {currentData === null ? (
            <p className="text-center mt-4">No agents found</p>
          ) : (
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">No.</th>
                  <th scope="col">Userame</th>
                  <th scope="col">Email</th>
                  <th scope="col">Date</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>

              <tbody>
                {currentData.map((item, index) => {
                  const { _id, username, email, updatedAt } = item;

                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{username}</td>
                      <td>{email}</td>
                      <td>{moment(updatedAt).format("MMMM Do YYYY")}</td>
                      <td>
                        <div className="table-actions">
                          {alert.deleteloading ? (
                            <button className="delete">
                              <Loading /> delete agent
                            </button>
                          ) : (
                            <button
                              onClick={() => handleDelete(_id)}
                              className="delete"
                            >
                              delete agent
                            </button>
                          )}
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

      {!alert.getagentloading && (
        <div className="empty-agents mt-5">
          {count === 0 ? "agents not found" : ""}
        </div>
      )}
    </div>
  );
};

export default AllAgent;
