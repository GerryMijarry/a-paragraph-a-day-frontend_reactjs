import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";

import Login from "./routes/Login";
import Register from "./routes/Register";
import Profile from "./routes/Profile";
import Write from "./routes/Write";

import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";
import { ListGroupItem } from "react-bootstrap";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userProfile: [],
      currentUsername: "",
      isLoggedIn: false,
    };
  }

  componentDidMount() {
    this.getCurrentUserToken();
  }

  //#region Users

  register = async (registerUser) => {
    let secondReg = registerUser;
    let response = await axios.post(
      "http://127.0.0.1:8000/api/auth/register/",
      registerUser
    );
    if (response === undefined) {
      this.setState({});
    } else {
      this.setState({
        registeredUser: response.data,
      });
    }
    await axios.put(
      "https://localhost:44394/api/users/editname/" + secondReg.UserName,
      secondReg
    );
  };

  loginUser = async (login) => {
    try {
      let response = await axios.post(
        "http://127.0.0.1:8000/api/auth/login/",
        login
      );
      if (response === undefined) {
        this.setState({});
        console.log("undefined");
      } else {
        console.log(response.data);
        console.log(response.data.access);
        this.setState({
          token: response.data.access,
          currentUsername: login.username,
          isLoggedIn: true,
        });
        console.log(this.state.currentUsername);
        localStorage.setItem("currentUsername", login.username);
        localStorage.setItem("token", response.data.access);
      }
    } catch (err) {
      console.log(err);
    }
  };

  getCurrentUserToken = async () => {
    try {
      const jwt = localStorage.getItem("token");
      const currentUsername = localStorage.getItem("currentUsername");
      if (jwt === undefined) {
        this.setState({
          isLoggedIn: false,
          currentUsername: "",
        });
      } else {
        this.setState({
          token: jwt,
          currentUsername: currentUsername,
          isLoggedIn: true,
        });
        console.log(this.state.isLoggedIn);
      }
    } catch (err) {
      console.log(err);
    }
  };

  getCurrentUserProfile = async () => {
    try {
      const jwt = localStorage.getItem("token");
      const username = localStorage.getItem("currentUsername");
      let response = await axios.get(
        "http://127.0.0.1:8000/api/writing/profile/" + username,
        { headers: { Authorization: "Bearer " + jwt } }
      );
      if (response === undefined) {
        this.setState({});
      } else {
        this.setState({
          userProfile: response.data,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  handleLogoutClick = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("currentUsername");
    this.setState({ isLoggedIn: false, currentUsername: "" }, () => {
      console.log(this.state.isLoggedIn, "isLoggedIn");
      console.log(this.state.currentUsername, "currentUsername");
    });
  };

  //#endregion

  render() {
    return (
      <div className="App">
        <Nav
          isLoggedIn={this.state.isLoggedIn}
          currentUsername={this.state.currentUsername}
          handleLoginClick={this.handleLoginClick}
          handleLogoutClick={this.handleLogoutClick}
          getCurrentUserProfile={this.getCurrentUserProfile}
        />
        <Routes>
          <Route path="/" element={<Write />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login loginUser={this.loginUser} />} />
          <Route
            path="/profile"
            element={<Profile userProfile={this.state.userProfile} />}
          />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </div>
    );
  }
}

export default App;
