import React from "react";
import { NavLink } from "react-router-dom";

const ActiveLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "text-decoration-none text-secondary bg-light rounded my-1 py-2 px-5 fw-semibold text-left"
          : "text-decoration-none text-secondary rounded my-1 py-2 px-5 fw-semibold text-left"
      }
    >
      {children}
    </NavLink>
  );
};

export default ActiveLink;
