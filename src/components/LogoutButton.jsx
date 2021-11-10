import React from "react";

const LogoutButton = (props) => {
  return (
    <button
      class="btn btn-success"
      type="submit"
      onClick={() => props.handleLogoutClick()}
    >
      Logout {props.currentUsername}
    </button>
  );
};

export default LogoutButton;
