import React from "react";
import { Link } from "react-router-dom";
import LoginControl from "./LoginControl";
import ProfileLink from "./ProfileLink";

const Nav = (props) => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
      <div className="container-fluid">
        <a className="navbar-brand">A Paragraph A Day</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/write">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <ProfileLink
                isLoggedIn={props.isLoggedIn}
                getCurrentUserProfile={props.getCurrentUserProfile}
                currentUsername={props.currentUsername}
              />
            </li>
          </ul>
          <form className="d-flex">
            <LoginControl
              isLoggedIn={props.isLoggedIn}
              currentUsername={props.currentUsername}
              handleLoginClick={props.handleLoginClick}
              handleLogoutClick={props.handleLogoutClick}
            />
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
