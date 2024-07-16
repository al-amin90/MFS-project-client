import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = ({ label, address }) => {
  return (
    <div>
      <NavLink
        to={address}
        className={({ isActive }) =>
          `text-white rounded-full hover:border hover:border-[#D3F8F7] hover:text-[#00f6ff] transition-all duration-300 text-xs 2xl:text-base transform font-semibold ${
            isActive ? "text-[#00f6ff] border border-[#00f6ff]" : ""
          } px-4 py-px`
        }
      >
        {label}
      </NavLink>
    </div>
  );
};

export default NavItem;
