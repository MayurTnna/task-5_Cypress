import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = () => {
   
    const Auth = localStorage.getItem("isLoggedIn") 
    return Auth ?<Outlet/> : <Navigate to={"/login"}/>
}

export default ProtectedRoute