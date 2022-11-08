import React, { useState } from "react";
//
import "./Orders.css";

import Goback from "./../../common/goback/Goback";

const Orders = () => {
  const [data, setData] = useState("");

  // console.log(my_orders);

  // useEffect
  // useEffect(() => {
  //   if (my_orders?.length !== 0) {
  //     setLoading(false);
  //   }
  // }, [my_orders?.length]);

  //   The search handleChange
  const handleChange = (e) => {
    setData(e.target.value);
  };

  //   Filtering for search
  // const filteredData = my_orders?.filter((my_order) => {
  //   return Object.values(my_order).join(" ").toLowerCase().match(data);
  // });

  // order details method
  // const orderDetailsMethod = (id) => {
  //   history.push(`/dashboard/my-orders/details/${id}`);
  //   dispatch({ type: GLOBALTYPES.ORDER_ID, payload: id });
  // };

  //

  return (
    <div className="my-orders">
      <div className="my-orders-heading">
        <div className="order-header">
          <h2>All Orders</h2>

          <div className="orders-sorting">
            <div className="order-search">
              <input
                type="text"
                value={data}
                onChange={handleChange}
                placeholder="Search orders"
              />
            </div>
          </div>

          <Goback />
        </div>

        <div className="myorder-image">
          <img src="/assets/gadgets.png" alt="" />
        </div>
      </div>
      {/* 
      {alert.loading ? (
        <div className="transaction-loading">
          <Loading width="45px" height="45px" color="#fff" />
        </div>
      ) : (
        <div className="my-orders-table">
          {my_orders === null ? (
            <p className="text-center mt-4">No Created Orders yet</p>
          ) : (
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">No.</th>
                  <th scope="col">Buyers Name</th>
                  <th scope="col">Sellers Email</th>
                  <th scope="col">Status</th>
                  <th scope="col">Charges</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Date</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>

              <tbody style={{ border: "0" }}>
                {filteredData?.map((item, index) => {
                  const {
                    _id,
                    buyersname,
                    selleremail,
                    status,
                    total,
                    createdat,
                    verifibizcharge,
                  } = item;
                  return (
                    <tr key={_id}>
                      <td>{index + 1}</td>
                      <td>{buyersname}</td>
                      <td className="sellers-email">{selleremail}</td>
                      {(status === "funded") | (status === "delivered") ? (
                        <td style={{ color: "green" }}>{status}</td>
                      ) : status === "pending" ? (
                        <td style={{ color: "orange" }}>{status}</td>
                      ) : status === "awaiting-disbursement" ? (
                        <td style={{ color: "blue" }}>{status}</td>
                      ) : (
                        <td style={{ color: "red" }}>{status}</td>
                      )}
                      <td>₦{addComma(verifibizcharge)}</td>
                      <td>₦{addComma(total)}</td>
                      <td>{getDate(createdat)}</td>

                      <td>
                        <button onClick={() => orderDetailsMethod(_id)}>
                          View Order
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      )}

      <p className="text-center mt-5">
        {filteredData?.length === 0 && !loading && !alert.loading
          ? "Orders not found"
          : ""}{" "}
      </p> */}
    </div>
  );
};

export default Orders;
