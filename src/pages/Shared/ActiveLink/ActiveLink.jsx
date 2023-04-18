import React from "react";
import { NavLink } from "react-router-dom";

const ActiveLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "text-decoration-none text-secondary bg-light rounded py-2 px-5 fw-semibold text-center"
          : "text-decoration-none text-secondary rounded py-2 px-5 fw-semibold text-center"
      }
    >
      {children}
    </NavLink>
  );
};

export default ActiveLink;
