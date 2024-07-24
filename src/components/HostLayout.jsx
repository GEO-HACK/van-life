import react from "react";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function HostLayout({ children }) {
  return (
    <>
      <nav className="host-nav">
        <NavLink
          to="."
          end
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Dashboard
        </NavLink>
        <NavLink
          to="reviews"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Reviews
        </NavLink>
        <NavLink
          to="income"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Income
        </NavLink>
        <NavLink
        to={"vans"}
        className={({ isActive }) => (isActive ? "active" : "")}
        >Vans</NavLink>
      </nav>
      <Outlet />
    </>
  );
}
