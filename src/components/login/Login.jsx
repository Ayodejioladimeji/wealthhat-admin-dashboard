import React, { useState } from 'react';

// PACKAGES
import { Formik } from 'formik';
import * as EmailValidator from 'email-validator';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

// COMPONENTS
import './Login.css';
import logo from '../../assets/logo.png';
import { useSelector } from 'react-redux';
import Loading from './../../common/alert/Loading';

const Login = () => {
  const [typePass, setTypePass] = useState(false);
  const { loading } = useSelector((state) => state.alert);

  //

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(async () => {
          setSubmitting(false);
        }, 500);
      }}
      //   HANDLING VALIDATION MESSAGES
      validate={(values) => {
        let errors = {};
        if (!values.email) {
          errors.email = 'Email is required';
        } else if (!EmailValidator.validate(values.email)) {
          errors.email = 'Invalid email address';
        }

        //   THE PASSWORD SECTION
        if (!values.password) {
          errors.password = 'Password is required';
        } else if (values.password.length < 8) {
          errors.password = 'Password must be 8 characters long.';
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
          <div className='login'>
            <div className='login_center'>
              <div className='login_left'>
                <div className='login_left_div'>
                  <h1>An investment advisor that’s focused on you</h1>
                  {/* <p>
                    Save yourself the stress and uncertainty of facing thousands
                    of investment choices.
                  </p> */}
                </div>
              </div>

              <div className='login_right'>
                <div className='login_right_div'>
                  <div className='login_right_top'>
                    <img src={logo} alt='logo' />
                    <h4>Agent Login</h4>
                  </div>

                  <div className='login_right_bottom'>
                    <form onSubmit={handleSubmit}>
                      <div className='form_group'>
                        <label htmlFor='email'>Email Address</label>
                        <input
                          name='email'
                          type='text'
                          placeholder='claire@example.com'
                          value={values.email.toLowerCase()}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={errors.email && touched.email && 'error'}
                        />
                        {errors.email && touched.email && (
                          <div className='input_feedback'>{errors.email}</div>
                        )}
                      </div>

                      <div className='form_group'>
                        <label htmlFor='password'>Password</label>
                        <input
                          name='password'
                          type={typePass ? 'text' : 'password'}
                          placeholder='Enter your password'
                          value={values.password}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          autoComplete='on'
                          className={
                            errors.password && touched.password && 'error'
                          }
                        />
                        {errors.password && touched.password && (
                          <div className='input_feedback'>
                            {errors.password}
                          </div>
                        )}
                        <div
                          className={errors.password ? 'eye' : 'eyes'}
                          onClick={() => setTypePass(!typePass)}
                        >
                          {typePass ? <FaEyeSlash /> : <FaEye />}
                        </div>
                      </div>

                      <div className='form_group'>
                        <button type='submit' disabled={isSubmitting}>
                          {loading ? (
                            <Loading width='25px' height='25px' color='#fff' />
                          ) : (
                            'Sign in'
                          )}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }}
    </Formik>
  );
};

export default Login;
