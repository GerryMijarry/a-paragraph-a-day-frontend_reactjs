import React from "react";

const LogoutButton = ({ currentUser, handleLogoutClick }) => {
  return (
    <button
      class="btn btn-outline-success"
      type="submit"
      onClick={() => handleLogoutClick()}
    >
      Logout {currentUser}
    </button>
  );
};

export default LogoutButton;
