import React, { useContext } from "react";
import { Link } from "react-router-dom";
import './Navbar.css';
import { store } from "../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [token, setToken] = useContext(store);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  return (
    <nav className="navbar">
      <Link to={token ? '/' : '/account'} className="logo-link">
        <h1 className="logo">
          <FontAwesomeIcon icon={faArrowLeftLong} />
        </h1>
      </Link>

      <div className="icon-container"> {/* This is the new div for the SVG icon */}
        <svg xmlns="http://www.w3.org/2000/svg" height="2.25em" viewBox="0 0 576 512">
          {/* Your SVG code goes here */}
          <path d="M413.5 237.5c-28.2 4.8-58.2-3.6-80-25.4l-38.1-38.1C280.4 159 272 138.8 272 117.6V105.5L192.3 62c-5.3-2.9-8.6-8.6-8.3-14.7s3.9-11.5 9.5-14l47.2-21C259.1 4.2 279 0 299.2 0h18.1c36.7 0 72 14 98.7 39.1l44.6 42c24.2 22.8 33.2 55.7 26.6 86L503 183l8-8c9.4-9.4 24.6-9.4 33.9 0l24 24c9.4 9.4 9.4 24.6 0 33.9l-88 88c-9.4 9.4-24.6 9.4-33.9 0l-24-24c-9.4-9.4-9.4-24.6 0-33.9l8-8-17.5-17.5zM27.4 377.1L260.9 182.6c3.5 4.9 7.5 9.6 11.8 14l38.1 38.1c6 6 12.4 11.2 19.2 15.7L134.9 484.6c-14.5 17.4-36 27.4-58.6 27.4C34.1 512 0 477.8 0 435.7c0-22.6 10.1-44.1 27.4-58.6z"/></svg>
      </div>
    </nav>
  );
}

export default Navbar;
