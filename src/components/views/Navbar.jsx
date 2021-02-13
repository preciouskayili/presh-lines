import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";
const Navbar = ({ location }) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top">
        <NavLink className="navbar-brand waves-effect" to="/">
          <img
            src="../ListIcon.svg"
            alt="Logo"
            style={{ marginRight: "7px" }}
          />
          <small>Punch Lines</small>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#basicExampleNav"
          aria-controls="basicExampleNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="basicExampleNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink to="/" className="nav-link waves-effect">
                Home
              </NavLink>
            </li>
            <li
              className={
                location.pathname === "/business"
                  ? "nav-item active"
                  : "nav-item"
              }
            >
              <NavLink to="/business" className="nav-link waves-effect">
                Business
              </NavLink>
            </li>
            <li
              className={
                location.pathname === "/sports" ? "nav-item active" : "nav-item"
              }
            >
              <NavLink to="/sports" className="nav-link waves-effect">
                Sports
              </NavLink>
            </li>
            <li
              className={
                location.pathname === "/entertainment"
                  ? "nav-item active"
                  : "nav-item"
              }
            >
              <NavLink to="/entertainment" className="nav-link waves-effect">
                Entertainment
              </NavLink>
            </li>
            <li
              className={
                location.pathname === "/health" ? "nav-item active" : "nav-item"
              }
            >
              <NavLink to="/health" className="nav-link waves-effect">
                Health
              </NavLink>
            </li>
            <li
              className={
                location.pathname === "/science"
                  ? "nav-item active"
                  : "nav-item"
              }
            >
              <NavLink to="/science" className="nav-link waves-effect">
                Science
              </NavLink>
            </li>
            <li
              className={
                location.pathname === "/technology"
                  ? "nav-item active"
                  : "nav-item"
              }
            >
              <NavLink
                to="/technology"
                className="nav-link waves-effect active"
              >
                Technology
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li
              title="Reload"
              className="nav-item waves-effect p-2 text-center hover"
              onClick={() => window.location.reload(false)}
              style={{
                borderRadius: "50%",
                height: "40px",
                width: "40px",
                paddingTop: "10px",
              }}
            >
              <i className="fas fa-redo"></i>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
