import React from "react";
import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";

const ProtectedRoute = () => {
  const users = JSON.parse(localStorage.getItem("user")) || [];
  console.log(users)
  const Auth = users.some((item) => item.isLogin === true);
  return Auth ? <Outlet /> : <Navigate to={"/login"} />;
};

export default ProtectedRoute;
