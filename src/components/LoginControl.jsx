import React from "react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

const LoginControl = (props) => {
  let button;
  if (props.isLoggedIn) {
    button = (
      <LogoutButton
        handleLogoutClick={props.handleLogoutClick}
        currentUsername={props.currentUsername}
      />
    );
  } else {
    button = <LoginButton />;
  }

  return <div>{button}</div>;
};

export default LoginControl;
