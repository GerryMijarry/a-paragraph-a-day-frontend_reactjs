import React from "react";
import { Link } from "react-router-dom";

const LoginButton = () => {
  return (
    <>
      <Link to="/register">
        <button class="btn btn-success" type="submit">
          Register
        </button>
      </Link>
      &nbsp;
      <Link to="/login">
        <button class="btn btn-success" type="submit">
          Login
        </button>
      </Link>
    </>
  );
};

export default LoginButton;
