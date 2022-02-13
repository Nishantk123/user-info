import React from "react";
import { useHistory } from "react-router-dom";

const Header = () => {

  const history = useHistory();

  const handleLogin = () =>{
    history.push('/login')
  }
  const handleUser = () =>{
    history.push('/user')
  }
  const handleLogout = () =>{
    window.localStorage.clear()
    history.push('/login')

  }

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
                <a className="nav-link" href="#" onClick={handleUser}>
                  user
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Product
                </a>
              </li>
            </ul>
            <span className="navbar-text mx-3 text-cursor" onClick={handleLogin}>Login</span>
            <span className="navbar-text text-cursor" onClick={handleLogout}>Logout</span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
