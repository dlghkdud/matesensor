import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";
import { Link, Outlet } from "react-router-dom";
import logo from "./img/logo.png";

const Layout = () => {
  // const logout = async () => {
  //     await signOut(auth);
  // };
  return (
    <div className="header">
      <div className="nav">
        <Link to="/" span className="logo">
          <img src={logo} />
        </Link>
        <Link to="/" className="left">
          Home
        </Link>
        <Link to="/about" className="left">
          About
        </Link>
        <Link to="/mating" className="right" onClick="mating()">
          Mating
        </Link>
        <Link to="/matingchat" className="right" onClick="matingchat()">
          Mating chat
        </Link>
        <span className="right" onClick="newmating()">
          New mating
        </span>
        <Link to="/login" className="right2">
          Log in&nbsp;&nbsp;·
        </Link>
        <Link to="/signup" className="right2">
          &nbsp;&nbsp;Sign up
        </Link>
        <Link to="/my" className="right3">
          My
        </Link>
        {/* <span className='right3' onClick={logout}>Log out</span> */}
      </div>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
