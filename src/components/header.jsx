import React from "react";
import { Link,NavLink } from "react-router-dom";
import imageUrl from "../assets/images/user.png"

export default function Header() {
  function fakeLogOut() {
    localStorage.removeItem("loggedin")
  }

   
  return (
    <header>
      <Link className="site-logo" to="/">
        #vanIt
      </Link>
      <nav>
        <NavLink
         to="/vans"
         className={({ isActive}) => (isActive ? "active" : "")}

         >Vans</NavLink>
        <NavLink 
        to="/about"
        className={({ isActive}) => (isActive ? "active" : "")}
         
        >About </NavLink>
        <NavLink 
        to="/host"
        className={({ isActive}) => (isActive ? "active" : "")}
        >Host</NavLink>

        <Link to ="login" className="login-link">
        <img src={imageUrl}
         className="login-icon" />
        </Link>
        <button onClick = {fakeLogOut}>x</button>
      </nav>
    </header>
  );
}
