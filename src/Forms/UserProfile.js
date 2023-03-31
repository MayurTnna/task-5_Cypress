import React, { useState } from "react";
import "../assets/scss/UserProfile.scss";
import Button from "react-bootstrap/Button";
import { RiLockPasswordLine, RiLogoutCircleRLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useFormik } from "formik";
import { userProfileSchema } from "./schemas/UserSchema";
import Header from "../components/Header";

function UserProfile() {
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("user")) || [];
  // console.log(userData)
  const handleUpdatePassword = () => {
    navigate("/forgotpassword");
  };

  const handleLogOut = () => {
    toast.success("Logged out successfully");
    const userData = JSON.parse(localStorage.getItem("user"));
    const updatedData = userData.map((item) => {
      return {
        ...item,
        isLogin: false,
      };
    });
    localStorage.setItem("user", JSON.stringify(updatedData));
    navigate("/login");
  };
  const loggedUser = userData.find((user) => user.isLogin === true || []);

  const initialValues = {
    // passing name attribute here for every input field
    first_name: loggedUser.first_name,
    last_name: loggedUser.last_name,
    mobile_no: loggedUser.mobile_no,
    email: loggedUser.email,
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: userProfileSchema,

      onSubmit: (values) => {
        const activeEmail = userData.filter((user) => user.isLogin === false);
        console.log(activeEmail);
        // upadting user's data:-
        const newData = userData.map((item) => {
          // console.log(item);
          if (item.isLogin === true) {
            if (activeEmail.some((item) => item.email === values.email)) {
              toast.error("user already exist!");
              return {
                ...item,
              };
            } else {
              toast.success("Updated successfully");
              return {
                ...item,
                first_name: values.first_name,
                last_name: values.last_name,
                mobile_no: values.mobile_no,
                email: values.email,
              };
            }
          } else {
            return {
              ...item,
            };
          }
        });
        localStorage.setItem("user", JSON.stringify(newData));
      },
    });
  // console.log(updatedUser);
  return (
    <>
      <Header />

      <div>
        <>
          <div className="UserProfile_container">
            <div className="modal">
              <div className="modal-container">
                <div className="modal-left">
                  <h1 className="modal-title">Welcome {values.first_name}</h1>
                  <p className="modal-desc"></p>
                  <form onSubmit={handleSubmit}>
                    <div className="input-block">
                      <label htmlFor="name" className="input-label">
                        FIRST NAME
                      </label>
                      <input
                        type="name"
                        name="first_name"
                        id="first_name"
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
                          <p className="form-error float-end">
                            {errors.last_name}
                          </p>
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
                        placeholder="mobile no"
                        value={values.mobile_no}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <div className="float-end">
                        {errors.mobile_no && touched.mobile_no ? (
                          <p className="form-error float-end">
                            {errors.mobile_no}
                          </p>
                        ) : (
                          <></>
                        )}
                      </div>
                    </div>
                    <div className="modal-buttons   ">
                      <button id="updateDetail" className="input-button" type="submit">
                        
                        Update
                      </button>
                      <div className="px-2">
                        <Button
                          className="input-button "
                          variant="danger"
                          onClick={handleLogOut}
                          id="logoutClick"
                        >
                          Logout
                        </Button>{" "}
                      </div>
                    </div>
                    <Button
                      className="input-button mt-2 "
                      variant="danger"
                      onClick={handleUpdatePassword}
                      id="forgotClick"
                    >
                      Update Password
                      <span className="px-1">
                        <RiLockPasswordLine className=" mb-1" />
                      </span>
                    </Button>{" "}
                  </form>
                </div>
                <div className="modal-right">
                  <img
                    src="https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHVzZXIlMjBwcm9maWxlfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      </div>
    </>
  );
}

export default UserProfile;
