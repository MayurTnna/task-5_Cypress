import React, { useState } from 'react'
import "../assets/scss/UserProfile.scss"
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
// const [userDetails , setUserDetails] = useState(JSON.parse(localStorage.getItem("user")))

function UserProfile() {
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("user"))
  const handleLogOut = () => {
    localStorage.removeItem("isLoggedIn")
    toast.success("Logged out successfully")
    navigate("/login")
  }
  // const updatedUsers = {
  //   ...userDetails,
    
  // }
  return (
    <>
    <div>
        <>
      <div className="UserProfile_container">
        <div className="modal">
          <div className="modal-container">
            <div className="modal-left">
              <h1 className="modal-title">Welcome {userData.first_name}</h1>
              <p className="modal-desc"></p>
              <form>
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
                    value={userData.first_name}
                  />
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
                    value={userData.last_name}
                  />
                 
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
                    value={userData.email}
                  />

                  
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
                    value={userData.mobile_no}
                    
                  />

                 
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
                    value={userData.password}
                   
                  /> 
                </div>
                <div className="modal-buttons ">
                  <button className="input-button" type="submit">
                    Update
                  </button>
                  <Button className='input-button' variant="danger" onClick={handleLogOut}>Logout</Button>{' '}
                </div>
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
  )
}

export default UserProfile