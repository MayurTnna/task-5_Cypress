import React from 'react'
import "../assets/scss/UserProfile.scss"

function UserProfile() {
  const userFname = localStorage.getItem("first_name")
  const userLname = localStorage.getItem("last_name")
  const userPassword = localStorage.getItem("password")
  const userMno = localStorage.getItem("mobile_no")
  const userEmail = localStorage.getItem("email");
  return (
    <>
    <div>
        <>
      <div className="UserProfile_container">
        <div className="modal">
          <div className="modal-container">
            <div className="modal-left">
              <h1 className="modal-title">Welcome</h1>
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
                    value={userFname}
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
                    value={userLname}
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
                    value={userEmail}
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
                    value={userMno}
                    
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
                    value={userPassword}
                   
                  /> 
                </div>
                <div className="modal-buttons">
                  <button className="input-button" type="submit">
                    Update
                  </button>
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