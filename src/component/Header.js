import React from "react";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-info bg-info">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            UserInfo
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  user
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Product
                </a>
              </li>
            </ul>
            <span className="navbar-text mx-3">Sign in</span>
            <span className="navbar-text">Sign up</span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
