import React from "react";
import "../assets/scss/Login.scss";
import { useFormik } from "formik"; //for form handling
import SignupSchema, { LoginSchema, mobile_no } from "./schemas/SignupSchema";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("../signup");
  };
  const initialValues = {
    // passing name attribute here for every input field
    email: "",
    password: "",
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: LoginSchema,

      onSubmit: (values) => {
        console.log(values);

        // const userName = localStorage.getItem("email") || "admin@admin.com";
        // const userPassword = localStorage.getItem("password") || "Admin@123";
        // if (values.email === userName && values.password === userPassword) {
        //   toast.success("Login Success");
        //   navigate("/product");
        // } else {
        //   toast.error("Invalid credentials");
        // }

        const loggedUserData = JSON.parse(localStorage.getItem("user")); //converting again string to object to access properties
        if (
          values.email === loggedUserData.email &&
          values.password === loggedUserData.password
        ) {
          toast.success("Login Success");
          navigate("/product");
        } else {
            toast.error("Invalid credentials");
          }
      },
    });

  return (
    <>
      <div className="login_container">
        <div className="modal">
          <div className="modal-container">
            <div className="modal-left">
              <h1 className="modal-title">Login</h1>
              <p className="modal-desc"></p>
              <form onSubmit={handleSubmit}>
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
                <div className="modal-buttons">
                  <a onClick={handleNavigate} className="/signup">
                    create new
                  </a>
                  <button className="input-button" type="submit">
                    Log in
                  </button>
                </div>
              </form>
              <p className="sign-up">
                <a href="#">forgot Password</a>
              </p>
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
export default Login;

// handleChange and handleBlur are used together to handle form validation and to update the state of the form in real-time as the user interacts with it.
