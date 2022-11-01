import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

//
import Modal from "../../common/modals/Modal";
import { GLOBALTYPES } from "./../../redux/actions/globalTypes";
import Loading from "./../../common/alert/Loading";
import "./CreateCategories.css";
import { create_categories } from "./../../redux/actions/ProductAction";
//

const tokens = "";

const CreateCategories = () => {
  const { category_modal } = useSelector((state) => state.products);
  const { callback } = useSelector((state) => state.utils);
  const { alert } = useSelector((state) => state);
  const [values, setValues] = useState("");
  const [err, setErr] = useState("");
  const dispatch = useDispatch();

  //   cancel modal method
  const cancelModal = () => {
    dispatch({ type: GLOBALTYPES.CATEGORY_MODAL, payload: false });
  };

  //   onChange method
  const handleChange = (e) => {
    setValues(e.target.value);
    setErr("");
  };

  //   handle Create Category method
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!values) {
      setErr("Enter category name");
      return;
    }

    const newData = {
      name: values,
    };

    dispatch(create_categories(newData, tokens, callback));
    setValues("");
  };

  //

  return (
    <>
      {category_modal && (
        <Modal cancelModal={cancelModal} height="250px" width="25%">
          <div className="create-category">
            <h1>Create Categories</h1>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                {/* <label>Category name</label> */}
                <input
                  type="text"
                  placeholder="Enter category name"
                  onChange={handleChange}
                  value={values}
                />
                <span className="err">{err}</span>
              </div>

              <button type="submit">
                {alert.categoryloading ? (
                  <Loading width="20px" height="20px" color="#fff" />
                ) : (
                  "Create "
                )}
              </button>
            </form>
          </div>
        </Modal>
      )}
    </>
  );
};

export default CreateCategories;
