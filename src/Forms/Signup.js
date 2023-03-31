import React from "react";
import "../assets/scss/Signup.scss";
import { useFormik } from "formik"; //for form handling
import SignupSchema from "./schemas/UserSchema";
import { useNavigate } from "react-router-dom";
import "../assets/scss/main.scss";
import { toast } from "react-hot-toast";
import Button from "react-bootstrap/esm/Button";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { encryption } from "../utils/Privacy";

const Signup = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("../login");
  };
  const [showPassword, setShowPassword] = useState("false");
  const [showConPassword, setShowConPassword] = useState("false");
  const initialValues = {
    // passing name attribute here for every input field
    first_name: "",
    last_name: "",
    email: "",
    mobile_no: "",
    password: "",
    confirm_password: "",
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: SignupSchema,

      onSubmit: (values) => {
        const tempData = JSON.parse(localStorage.getItem("user")) || [];
        const encryptedPassword = encryption(values.password);
        console.log(tempData);
        const changedData = tempData && [
          ...tempData,
          {
            first_name: values.first_name,
            last_name: values.last_name,
            email: values.email,
            mobile_no: values.mobile_no,
            password: encryptedPassword,
          },
        ];
        // console.log(values);
        const users = tempData.filter((item) => item.email === values.email);
        //filtering data based on if email is already isnt existed in Local storage
        console.log(users);
        const userEmail = users.length > 0;

        if (userEmail) {
          toast.error("user already exists ");
        } else {
          toast.success("successfully signedUp");
          localStorage.setItem("user", JSON.stringify(changedData));
          navigate("/login");
        }
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
              <form id="form_signup" onSubmit={handleSubmit}>
                <div className="input-block">
                  <label htmlFor="first_name" className="input-label">
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
                      <p className="form-error float-end">
                        {errors.first_name}
                      </p>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
                <div className="input-block">
                  <label htmlFor="last_name" className="input-label">
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
                  <label htmlFor="mobile_no" className="input-label">
                    mobile no
                  </label>
                  <input
                    type="string"
                    autoComplete="off"
                    name="mobile_no"
                    id="mobile_no"
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
                    type={showPassword ? "password" : "text"}
                    autoComplete="off"
                    name="password"
                    id="password"
                    placeholder="Password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <Button
                    variant={"ghost"}
                    className=" text-center toggle-password  "
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </Button>

                  <div className="float-end">
                    {errors.password && touched.password ? (
                      <p className="form-error float-center">
                        {errors.password}
                      </p>
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
                    type={showPassword ? "password" : "text"}
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
                      <p className="form-error float-center">
                        {errors.confirm_password}
                      </p>
                    ) : (
                      <></>
                    )}
                  </div>
                  <Button
                    variant={"ghost"}
                    className=" toggle-password   "
                    onClick={() => setShowConPassword(!showConPassword)}
                  >
                    {showConPassword ? <FaEyeSlash /> : <FaEye />}
                  </Button>
                </div>
                <div className="modal-buttons">
                  <button className="input-button_signup" 
                  id="submit" 
                  type="submit">
                    Register
                  </button>
                </div>
              </form>
              <p className="sign-up">
                Already have an account?{" "}
                <a href="#" onClick={handleNavigate}>
                  Sign In now
                </a>
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
