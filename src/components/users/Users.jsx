import React, { useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addComma } from 'comma-separator';
import moment from 'moment';

//
import './Users.css';
import Loading from '../../common/alert/Loading';
import Goback from '../../common/goback/Goback';
import Filter from '../../common/filter/Filter';
import { filteringMethod } from '../../utils/utils';

const PageSize = 25;

const Users = () => {
  const { alert } = useSelector((state) => state);
  const { all_users } = useSelector((state) => state.users);
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState('');
  const [values, setValues] = useState('');

  let sorted = filteringMethod(all_users, data, values);

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
    <div className='users'>
      <div className='users-heading'>
        <div className='users-header'>
          <h2>All Users</h2>
          <Goback />
        </div>

        <div className='myusers-image'>
          <img src='/assets/gadgets.png' alt='' />
        </div>
      </div>

      {/* display the filter component if current data is not null */}
      {currentData !== null && (
        <Filter
          filteringData={all_users}
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
        <div className='product-loading'>
          <Loading width='45px' height='45px' color='#A1257D' />
        </div>
      ) : (
        <div className='users-table'>
          {/* display showing the length of items if current data is not null */}
          {currentData !== null && (
            <small className='showing'>
              Showing <b>{count}</b> items of <b>{all_users?.length}</b> total
            </small>
          )}

          {currentData === null ? (
            <p className='text-center mt-4'>No users found</p>
          ) : (
            <table className='table'>
              <thead>
                <tr>
                  <th scope='col'>No.</th>
                  <th scope='col'>Title</th>
                  <th scope='col'>Name</th>
                  <th scope='col'>Email</th>
                  <th scope='col'>Gender</th>
                  <th scope='col'>Nationality</th>
                  <th scope='col'>Phone</th>
                  <th scope='col'>Date</th>
                  <th scope='col'>Actions</th>
                </tr>
              </thead>

              <tbody>
                {currentData.map((item, index) => {
                  const {
                    _id,
                    title,
                    firstname,
                    lastname,
                    email,
                    gender,
                    nationality,
                    phone,
                    updatedAt,
                  } = item;

                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>

                      <td>{title}</td>
                      <td>
                        {firstname} {lastname}
                      </td>
                      <td>{email}</td>
                      <td>{gender}</td>
                      <td>{nationality}</td>
                      <td>{phone}</td>
                      <td>{moment(updatedAt).format('MMMM Do YYYY')}</td>
                      <td>
                        <div className='table-actions'>
                          <button
                            onClick={() => navigate(`${_id}`)}
                            className='view'
                          >
                            view
                          </button>
                          <button className='delete'>delete</button>
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
          ? "users not found"
          : ""}{" "}
      </p> */}
    </div>
  );
};

export default Users;
