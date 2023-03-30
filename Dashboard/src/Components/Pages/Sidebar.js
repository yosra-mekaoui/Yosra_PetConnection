import React from 'react'
import { NavLink, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <>

      <aside className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3   bg-gradient-dark" id="sidenav-main">
        <div className="sidenav-header">
          <i className="fas fa-times p-3 cursor-pointer text-white opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav" />
          <a className="navbar-brand m-0" href=" https://demos.creative-tim.com/material-dashboard/pages/dashboard " target="_blank">
            <img src="./assets/img/logo-01.png" className="navbar-brand-img h-100" alt="main_logo" />
            <span className="ms-1 font-weight-bold text-white">Admin Dashboard</span>
          </a>
        </div>
        <hr className="horizontal light mt-0 mb-2" />
        <div className="collapse navbar-collapse  w-auto  max-height-vh-100" id="sidenav-collapse-main">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/" className="nav-link text-white ">
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10">dashboard</i>
                  <span className="nav-link-text ms-1">Dashboard</span>

                </div>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/list" className="nav-link text-white " >
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10">table_view</i>
                </div>
                <span className="nav-link-text ms-1">Users List</span>
              </NavLink>
            </li>
            {/* <li className="nav-item">
          <a className="nav-link text-white " href="./pages/billing.html">
            <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
              <i className="material-icons opacity-10">receipt_long</i>
            </div>
            <span className="nav-link-text ms-1">Billing</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white " href="./pages/virtual-reality.html">
            <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
              <i className="material-icons opacity-10">view_in_ar</i>
            </div>
            <span className="nav-link-text ms-1">Virtual Reality</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white " href="./pages/rtl.html">
            <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
              <i className="material-icons opacity-10">format_textdirection_r_to_l</i>
            </div>
            <span className="nav-link-text ms-1">RTL</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white " href="./pages/notifications.html">
            <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
              <i className="material-icons opacity-10">notifications</i>
            </div>
            <span className="nav-link-text ms-1">Notifications</span>
          </a>
        </li> */}
            <li className="nav-item mt-3">
              <h6 className="ps-4 ms-2 text-uppercase text-xs text-white font-weight-bolder opacity-8">Account pages</h6>
            </li>
            <li className="nav-item">
            <NavLink to="/profile" className="nav-link text-white ">
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10">person</i>
                </div>
                <span className="nav-link-text ms-1">Profile</span>
                </NavLink>

            </li>
            <li className="nav-item">
            <NavLink to="/products" className="nav-link text-white ">
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                <i className="material-icons opacity-10">view_in_ar</i>
                </div>
                <span className="nav-link-text ms-1">Product</span>
                </NavLink>

            </li>
            <li className="nav-item">

              <NavLink to="/signin" className="nav-link text-white ">
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10">login</i>
                  <span className="nav-link-text ms-1">Sign In</span>

                </div>
              </NavLink>
            </li>


            <li className="nav-item">

             
            </li>
            {/* <li className="nav-item">
          <a className="nav-link text-white " href="./pages/sign-up.html">
            <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
              <i className="material-icons opacity-10">assignment</i>
            </div>
            <span className="nav-link-text ms-1">Sign Up</span>
          </a>
        </li> */}
          </ul>
        </div>

      </aside>
    </>
  )
}

export default Sidebar