// import React, { useState, useEffect, useMemo } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { useNavigate, useParams } from 'react-router-dom';
// import moment from 'moment';

// //
// import './SubCategories.css';
// import Loading from '../../common/alert/Loading';
// import Goback from '../../common/goback/Goback';
// import { filteredData } from '../../utils/utils';
// import CategoryFilter from '../../common/filter/CategoryFilter';
// import { subCategories } from '../../redux/actions/usersAction';

// const PageSize = 10;

// const SubCategories = () => {
//   const { alert } = useSelector((state) => state);
//   const { sub_categories, all_categories } = useSelector(
//     (state) => state.products
//   );
//   const navigate = useNavigate();
//   const [currentPage, setCurrentPage] = useState(1);
//   const [data, setData] = useState('');
//   const { categoryid } = useParams();
//   const dispatch = useDispatch();
//   const [name, setName] = useState('');

//   // get the sub categories with the category id
//   useEffect(() => {
//     if (categoryid) {
//       all_categories?.forEach((item) => {
//         if (item._id === categoryid) {
//           setName(item);
//         }
//       });
//       dispatch(subCategories(categoryid));
//     }
//   }, [all_categories, categoryid, dispatch]);

//   let sorted = filteredData(sub_categories, data);

//   // Pagination function
//   let page;
//   let currentData = useMemo(() => {
//     let firstPageIndex = (currentPage - 1) * PageSize;
//     let lastPageIndex = firstPageIndex + PageSize;
//     /* eslint-disable */
//     page = firstPageIndex;
//     return sorted?.slice(firstPageIndex, lastPageIndex);
//   }, [currentPage, sorted]);

//   //
//   const count = page + currentData.length;

//   //
//   return (
//     <div className='products'>
//       <div className='products-heading'>
//         <div className='products-header'>
//           {!alert.productloading && <h2>{name.name}</h2>}
//           <Goback />
//         </div>

//         <div className='products-button'>
//           <button>Create sub-category</button>
//         </div>
//       </div>

//       {/* display the filter component if current data is not null */}
//       {sub_categories.length === 0 ? (
//         ''
//       ) : (
//         <CategoryFilter
//           filteringData={sub_categories}
//           PageSize={PageSize}
//           data={data}
//           setData={setData}
//           currentPage={currentPage}
//           setCurrentPage={setCurrentPage}
//         />
//       )}

//       {alert.productloading ? (
//         <div className='product-loading'>
//           <Loading width='45px' height='45px' color='#A1257D' />
//         </div>
//       ) : (
//         <div className='products-table'>
//           {/* display showing the length of items if current data is not null */}
//           {sub_categories.length === 0 ? (
//             ''
//           ) : (
//             <small className='showing'>
//               Showing <b>{count}</b> item of <b>{sub_categories.length}</b>{' '}
//               total
//             </small>
//           )}

//           {currentData?.length === 0 ? (
//             <p className='text-center mt-4'>No Sub Categories found</p>
//           ) : (
//             <table className='table'>
//               <thead>
//                 <tr>
//                   <th scope='col'>No.</th>
//                   <th scope='col'>Category name</th>
//                   <th scope='col'>Date Created</th>
//                   <th scope='col'>Actions</th>
//                 </tr>
//               </thead>

//               <tbody>
//                 {currentData?.map((item, index) => {
//                   const { _id, name, updated_at } = item;

//                   return (
//                     <tr key={index}>
//                       <td>{index + 1}</td>

//                       <td>{name}</td>
//                       <td>{moment(updated_at).format('MMMM Do YYYY')}</td>
//                       <td>
//                         <div className='table-actions'>
//                           <button
//                             onClick={() => navigate(`${_id}`)}
//                             className='view'
//                           >
//                             View
//                           </button>
//                           <button className='edit'>Edit</button>
//                           <button className='delete'>Delete</button>
//                         </div>
//                       </td>
//                     </tr>
//                   );
//                 })}
//               </tbody>
//             </table>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default SubCategories;
