import React from "react";
import { Link,NavLink } from "react-router-dom";

export default function Header() {
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
      </nav>
    </header>
  );
}
