import React from "react";
import "../assets/scss/Signup.scss";
import { useFormik } from "formik"; //for form handling
import SignupSchema from "./schemas/SignupSchema";
import { useNavigate } from "react-router-dom";
import "../assets/scss/main.scss"

const Signup = () => {
  const navigate = useNavigate()
  const handleNavigate = () =>{
    navigate("../login")
  }
  const initialValues = {
    // passing name attribute here for every input field
    first_name: "",
    last_name:"",
    email: "",
    mobile_no: "",
    password: "",
    confirm_password: "",
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: SignupSchema,

      onSubmit: (values , action) => {
        console.log(values);
        action.resetForm();
      },
    });
  

  return (
    <>
      <div className="signup_container">
        <div className="modal">
          <div className="modal-container">
            <div className="modal-left">
              <h1 className="modal-title">Signup</h1>
              <p className="modal-desc"></p>
              <form onSubmit={handleSubmit}>
                <div className="input-block">
                  <label htmlFor="name" className="input-label">
                    FIRST NAME
                  </label>
                  <input
                    type="name"
                    autoComplete="off"
                    name="first_name"
                    id="first_name"
                    placeholder="Name"
                    value={values.first_name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <div className="float-end">
                    {errors.first_name && touched.first_name ? (
                      <p className="form-error float-end">{errors.first_name}</p>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
                <div className="input-block">
                  <label htmlFor="name" className="input-label">
                    LAST NAME
                  </label>
                  <input
                    type="name"
                    autoComplete="off"
                    name="last_name"
                    id="last_name"
                    placeholder="Name"
                    value={values.last_name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <div className="float-end">
                    {errors.last_name && touched.last_name ? (
                      <p className="form-error float-end">{errors.last_name}</p>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
                <div className="input-block">
                  <label htmlFor="email" className="input-label">
                    Email
                  </label>
                  <input
                    type="email"
                    autoComplete="off"
                    name="email"
                    id="email"
                    placeholder="Email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />

                  <div className="float-end">
                    {errors.email && touched.email ? (
                      <p className="form-error float-end">{errors.email}</p>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
                <div className="input-block">
                  <label htmlFor="email" className="input-label">
                    mobile no
                  </label>
                  <input
                    type="number  "
                    autoComplete="off"
                    name="mobile_no"
                    id="mobile_no"
                    pattern="[0-9]{3}-[0-9]{2}-[0-9]"
                    placeholder="mobile no"
                    value={values.mobile_no}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />

                  <div className="float-end">
                    {errors.mobile_no && touched.mobile_no ? (
                      <p className="form-error float-end">{errors.mobile_no}</p>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
                <div className="input-block">
                  <label htmlFor="password" className="input-label">
                    Password
                  </label>
                  <input
                    type="password"
                    autoComplete="off"
                    name="password"
                    id="password"
                    placeholder="Password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />

                  <div className="float-end">
                    {errors.password && touched.password ? (
                      <p className="form-error float-end">{errors.password}</p>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
                <div className="input-block">
                  {/* for attribute's value should match value of id */}
                  <label htmlFor="confirm_password" className="input-label">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    autoComplete="off"
                    name="confirm_password"
                    id="confirm_password"
                    placeholder="Confirm Password"
                    value={values.confirm_password} // here value and name 's attribute are same:- must should be
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />

                  <div className="float-end">
                    {errors.confirm_password && touched.confirm_password ? (
                      <p className="form-error float-end">{errors.confirm_password}</p>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
                <div className="modal-buttons">
                  <a href="https://myaccount.google.com/" className="">
                    Want to register using Gmail?
                  </a>
                  <button className="input-button" type="submit">
                    Registration
                  </button>
                </div>
              </form>
              <p className="sign-up">
                Already have an account?  <a href="#" onClick={handleNavigate}>Sign In now</a>
              </p>
            </div>
            <div className="modal-right">
              <img
                src="https://images.unsplash.com/photo-1679421138674-aec9e1c319a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Signup;

// handleChange and handleBlur are used together to handle form validation and to update the state of the form in real-time as the user interacts with it.