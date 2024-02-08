import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import "./Nav.scss";

const data = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "About Me",
    to: "aboutMe",
  },
  {
    label: "Work Experience",
    to: "experience",
  },
  {
    label: "Contact",
    to: "contact",
  },
];

export const Nav = () => {
  const [toggleIcon, setToggleIcon] = useState(false);
  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  };
  const handleMenuItemclick = () => {
    setToggleIcon(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar_container">
          <NavLink to="/" className="navbar_container_logo">
            <h2>Kruthi</h2>
          </NavLink>
        </div>
        <ul className={`navbar_container_menu ${toggleIcon ? "active" : ""}`}>
          {data.map((item, index) => (
            <li key={index} className="navbar_container_menu_item">
              <NavLink
                to={item.to}
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={handleMenuItemclick}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="nav-icon" onClick={handleToggleIcon}>
          {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
        </div>
      </nav>
    </>
  );
};
