import React from "react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

const LoginControl = ({
  isLoggedIn,
  currentUser,
  handleLoginClick,
  handleLogoutClick,
}) => {
  if (isLoggedIn) {
    return (
      <LogoutButton
        currentUser={currentUser}
        handleLogoutClick={handleLogoutClick}
      />
    );
  } else {
    return <LoginButton handleLoginClick={handleLoginClick} />;
  }
};

export default LoginControl;
