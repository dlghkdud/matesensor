import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";
import { Link, Outlet } from "react-router-dom";
import logo from "./img/logo.png";

const Layout = () => {
  console.log(auth);
  const logout = async () => {
    await signOut(auth);
    window.location.reload();
  };

  function mating(){
    let signIn = "${signIn}";
    if (signIn == ""){
        alert('Mating page is available after logging in');
        window.location.href = "/Login";
    } else{
        window.location.href = "/Mating"
    }
  };

  function matingchat(){
    let signIn = "${signIn}";
    if (signIn == ""){
        alert('Mating chat page is available after logging in');
        window.location.href = "/Login";
    } else{
        window.location.href = "/Matingchat"
    }
  };

  return (
    <div className="header">
      <div className="nav">
        <Link to="/" span className="logo">
          <img src={logo} />
        </Link>

        <Link to="/" className="left">Home</Link>
        <Link to="/about" className="left">About</Link>
        <span className="right" onClick={()=>{mating();}}>Mating</span>
        <span className="right" onClick={()=>{matingchat();}}>Mating chat</span>
        <span className="right">New mating</span>
    
        {auth.currentUser?
          <span>
            <Link to="/my" className="navmy">My</Link>
            <span className='logout' onClick={logout}>Log out</span>
          </span> :
          <span className='loginsignup'>
            <Link to="/login" className="right2">Log in&nbsp;&nbsp;·</Link>
            <Link to="/signup" className="right2">&nbsp;&nbsp;Sign up</Link>
          </span>}
      </div>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;