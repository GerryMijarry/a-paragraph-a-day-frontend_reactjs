import React from "react";
import { Link } from "react-router-dom";

const ProfileLink = (props) => {
  if (props.isLoggedIn) {
    return (
      <Link
        className="nav-link active"
        aria-current="page"
        to="/profile"
        onClick={props.getCurrentUserProfile(props.currentUsername)}
      >
        Profile
      </Link>
    );
  } else {
    return <></>;
  }
};

export default ProfileLink;
