/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/team/logo.svg";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  const handleSignOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  const menuItems = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/about"}>About</Link>
      </li>
      <li>
        <Link to={"/services"}>Services</Link>
      </li>
      <li>
        <Link to={"/blog"}>Blog</Link>
      </li>
      <li>
        <Link to={"/contact"}>Contact</Link>
      </li>
      {user?.email ? (
        <>
          <li>
            <Link to={"/bookingsItems"}>My Bookings</Link>
          </li>
          <li className="flex flex-row justify-center">
           <div className="flex flex-col"> <h1>{user?.email}</h1>
            <p>{user?.metadata?.lastSignInTime}</p></div>
            <button onClick={handleSignOut}>Sign Out</button>
          </li>
        </>
      ) : (
        <li>
          <Link to={"/login"}>Login</Link>
        </li>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100 h-24">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-[#444] text-[18px]"
          >
            {menuItems}
          </ul>
        </div>
        <Link to={"/"} className="btn btn-ghost normal-case text-xl">
          <img src={logo} />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-[#444] text-[18px]">
          {menuItems}
        </ul>
      </div>
      <div className="navbar-end">
        <button className="btn btn-outline btn-warning">Appointment</button>
      </div>
    </div>
  );
};

export default Navbar;
