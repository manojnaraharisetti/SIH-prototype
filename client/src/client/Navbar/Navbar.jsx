import React from "react";
import "./Navbar.css";
import logo from "./ODC.png";
import { Link } from "react-router-dom";
// import { useTranslation } from 'react-i18next';
// import LanguageSelector from "../../LanguageSelector";
export default function Navbar(props) {
  // const { t } = useTranslation();
  return (
    <>
      {/* <div className="top-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <marquee className="top-text" behavior="scroll" direction="left">
                 Welcome to One district One product
              </marquee>
            </div>
          </div>
        </div>
      </div> */}
      <nav className="nav_body navbar navbar-expand-lg">
        <div className="nav_container container-fluid">
          <Link className="nav_brand navbar-brand" to="/">
            <img width="60px" height="40px" src={logo} alt="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon  text-dark"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav_item nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav_item nav-item">
                <Link className="nav-link" to="district-wise-products">
                  Products
                </Link>
              </li>
              <li className="nav_item nav-item">
                <Link className="nav-link" to="routemaps">
                  RouteMaps
                </Link>
              </li>
              <li className="nav_item nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav_item nav-item">
                <Link className="nav-link" to="docs">
                  Docs
                </Link>
              </li>
              <li className="nav_item nav-item">
                <div className="language-select">
                  <select
                    className="custom-select"
                    value={props.language}
                    onChange={(e) => props.handleSetLanguage(e.target.value)}
                  >
                    <option value="English">English</option>
                    <option value="Malayalam">Malayalam</option>
                  </select>
                </div>
              </li>

              {/* <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  >
                  Districts
                  </Link>
                  <ul className="dropdown-menu">
                  <li>
                  <Link className="dropdown-item" to="#">
                  Action
                  </Link>
                  </li>
                  </ul>
                </li> */}
              {/* <li className="nav_item nav-item">
                  <Link className="nav-link" aria-current="page" to="/login">
                    <li>Login</li>
                  </Link>
                </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
