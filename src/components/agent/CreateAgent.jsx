import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Formik } from "formik";
import * as EmailValidator from "email-validator";
import { FaEye, FaEyeSlash } from "react-icons/fa";

//COMPONENTS
import "./CreateAgent.css";
import Loading from "../../common/alert/Loading";
import Goback from "../../common/goback/Goback";
import { createAgent } from "../../redux/actions/usersAction";

//

const CreateAgent = () => {
  const [typePass, setTypePass] = useState(false);
  const { token } = useSelector((state) => state.auth);
  const { createagentloading } = useSelector((state) => state.alert);
  const dispatch = useDispatch();

  //
  return (
    <Formik
      initialValues={{ email: "", username: "", password: "" }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(async () => {
          dispatch(createAgent(values, token));

          setSubmitting(false);
        }, 500);
      }}
      //   HANDLING VALIDATION MESSAGES
      validate={(values) => {
        let errors = {};
        if (!values.email) {
          errors.email = "Email is required";
        } else if (!EmailValidator.validate(values.email)) {
          errors.email = "Invalid email address";
        }

        if (!values.username) {
          errors.username = "Username is required";
        }

        //   THE PASSWORD SECTION
        if (!values.password) {
          errors.password = "Password is required";
        } else if (values.password.length < 8) {
          errors.password = "Password must be 8 characters long.";
        }

        return errors;
      }}
    >
      {(props) => {
        const {
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
        } = props;

        return (
          <div className="agent">
            <div className="agent-heading">
              <div className="agent-header">
                <h2>Create Agent</h2>
                <Goback />
              </div>

              <div className="myagent-image">
                {/* <img src="/assets/gadgets.png" alt="" /> */}
              </div>
            </div>

            <div className="agent-table">
              <div className="agent-form">
                <form onSubmit={handleSubmit}>
                  <div className="form_group">
                    <label htmlFor="username">Username</label>
                    <input
                      name="username"
                      type="text"
                      placeholder="layobright"
                      value={values.username.toLowerCase()}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={errors.username && touched.username && "error"}
                    />
                    {errors.username && touched.username && (
                      <div className="input_feedback">{errors.username}</div>
                    )}
                  </div>

                  <div className="form_group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      name="email"
                      type="text"
                      placeholder="claire@example.com"
                      value={values.email.toLowerCase()}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={errors.email && touched.email && "error"}
                    />
                    {errors.email && touched.email && (
                      <div className="input_feedback">{errors.email}</div>
                    )}
                  </div>

                  <div className="form_group">
                    <label htmlFor="password">Password</label>
                    <input
                      name="password"
                      type={typePass ? "text" : "password"}
                      placeholder="Enter your password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      autoComplete="on"
                      className={errors.password && touched.password && "error"}
                    />
                    {errors.password && touched.password && (
                      <div className="input_feedback">{errors.password}</div>
                    )}
                    <div
                      className={errors.password ? "eye" : "eyes"}
                      onClick={() => setTypePass(!typePass)}
                    >
                      {typePass ? <FaEyeSlash /> : <FaEye />}
                    </div>
                  </div>

                  <div className="form_group">
                    <button type="submit" disabled={isSubmitting}>
                      {createagentloading ? (
                        <Loading width="25px" height="25px" color="#fff" />
                      ) : (
                        "Create Agent"
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        );
      }}
    </Formik>
  );
};

export default CreateAgent;
