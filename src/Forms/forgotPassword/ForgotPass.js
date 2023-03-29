import React, { useState } from "react";
import { useFormik } from "formik";
import "../forgotPassword/forgotPassword.scss";
import Button from "react-bootstrap/esm/Button";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { forgotPasswordSchema } from "../schemas/SignupSchema";

const ForgotPass = () => {
  const [showPassword, setShowPassword] = useState("false");
  const [showNewPassword, setShowNewPassword] = useState("false");
  const [showConPassword, setShowConPassword] = useState("false");

  // const userData = JSON.parse(localStorage.getItem("user")) || [];
  // // console.log(userData)
  // const loggedUser = userData.find((user) => user.isLogin === true || []);
  // // console.log(loggedUser)
  const initialValues = {
    current_password: "",
    new_password: "",
    confirm_password: "",
  };
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues,
    // validationSchema:forgotPasswordSchema

    onSubmit: (values) = {

    }



    
  })
  return (
    <>
      <div className="forgot_container">
        <div className="modal">
          <div className="modal-container">
            <div className="modal-left">
              <h1 className="modal-title">Change Password</h1>
              <p className="modal-desc"></p>
              <form onSubmit={handleSubmit}>
                <div className="input-block">
                  <label htmlFor="current_password" className="input-label">
                    Current Password
                  </label>
                  <input
                    type={showPassword ? "password" : "text"}
                    autoComplete="off"
                    name="current_password"
                    id="current_password"
                    placeholder="enter your current password"
                    value={values.current_password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <div className="float-end">
                    {errors.current_password && touched.current_password ? (
                      <p className="form-error float-center">
                        {errors.current_password}
                      </p>
                    ) : (
                      <></>
                    )}
                  </div>
                  <Button
                    variant={"ghost"}
                    className=" text-center toggle-password  "
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </Button>
                </div>
                <div className="input-block">
                  <label htmlFor="new_password" className="input-label">
                    New Password
                  </label>
                  <input
                    type={showNewPassword ? "password" : "text"}
                    autoComplete="off"
                    name="new_password"
                    id="new_password"
                    placeholder="Set new password"
                    value={values.new_password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <div className="float-end">
                    {errors.new_password && touched.new_password ? (
                      <p className="form-error float-center">
                        {errors.new_password}
                      </p>
                    ) : (
                      <></>
                    )}
                  </div>
                  <Button
                    variant={"ghost"}
                    className=" text-center toggle-password  "
                    onClick={() => setShowNewPassword(!showNewPassword)}
                  >
                    {showNewPassword ? <FaEyeSlash /> : <FaEye />}
                  </Button>
                </div>
                <div className="input-block">
                  <label htmlFor="confirm_password" className="input-label">
                    Confirm Password
                  </label>
                  <input
                    type={showConPassword ? "password" : "text"}
                    autoComplete="off"
                    name="confirm_password"
                    id="confirm_password"
                    placeholder="Re-enter your new password"
                    value={values.confirm_password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <div className="float-end">
                    {errors.confirm_password && touched.confirm_password ? (
                      <p className="form-error float-center">
                        {errors.confirm_password}
                      </p>
                    ) : (
                      <></>
                    )}
                  </div>
                  <Button
                    variant={"ghost"}
                    className=" text-center toggle-password  "
                    onClick={() => setShowConPassword(!showConPassword)}
                  >
                    {showConPassword ? <FaEyeSlash /> : <FaEye />}
                  </Button>
                </div>
                <div className="modal-buttons">
                  <button
                    className="input-button_forgot"
                    type="submit"
                    onClick={""}
                  >
                    Submit
                  </button>
                </div>
              </form>
              {/* <p className="sign-up">
                <a href="#">forgot Password</a>
              </p> */}
            </div>
            <div className="modal-right">
              <img
                src="https://images.unsplash.com/photo-1679615845580-8691c78fd7d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ForgotPass;

// handleChange and handleBlur are used together to handle form validation and to update the state of the form in real-time as the user interacts with it.
