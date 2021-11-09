import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Welcome from "./components/Welcome";

import Login from "./routes/Login";
import Register from "./routes/Register";
import Profile from "./routes/Profile";
import Write from "./routes/Write";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { createBrowserHistory } from "history";

import axios from "axios";

import { Outlet } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

const history = createBrowserHistory();
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      localToken: localStorage.token,
      token: [],
      user: [],
      currentUser: [],
      currentUserID: "",
      registeredUser: [],
      isLoggedIn: false,
    };
  }

  componentDidMount() {
    this.getCurrentUser();
    if (this.state.localToken && !this.state.token) {
      this.getCurrentUserToken();
      this.getCurrentUser();
    } else {
      this.setState({
        isLoggedIn: false,
      });
    }
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
    history.push("/login");
    history.go("/login");
  };

  loginUser = async (login) => {
    try {
      let response = await axios.post(
        "http://127.0.0.1:8000/api/auth/login/",
        login
      );
      if (response === undefined) {
        this.setState({});
      } else {
        this.setState({
          token: response.data.access,
        });
        localStorage.setItem("token", response.data.access);
      }
    } catch (err) {
      console.log(err);
    }
    history.push("/");
    history.go("/");
  };

  getCurrentUserToken = async () => {
    try {
      const jwt = localStorage.getItem("token");
      if (jwt === undefined) {
        this.setState({});
      } else {
        this.setState({
          token: jwt,
          isLoggedIn: true,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  getCurrentUser = async () => {
    try {
      const jwt = localStorage.getItem("token");
      let response = await axios.get(
        "https://localhost:44394/api/examples/user/",
        { headers: { Authorization: "Bearer " + jwt } }
      );
      if (response === undefined) {
        this.setState({});
      } else {
        this.setState({
          user: response.data,
          isLoggedIn: true,
          currentUserID: response.data.id,
        });
      }
    } catch (err) {
      console.log(err);
    }
    if (this.state.user.type == "Seller") {
      this.setState({ usertype: true });
    }
  };

  handlelogoutClick = () => {
    localStorage.removeItem("token");
    this.setState({
      isLoggedIn: false,
      currentUser: [],
    });
    history.push("/");
    history.go("/");
  };

  //#endregion

  render() {
    return (
      <div className="App">
        <Nav
          isLoggedIn={this.state.isLoggedIn}
          currentUser={this.state.currentUser}
          handleLoginClick={this.handleLoginClick}
          handleLogoutClick={this.handleLogoutClick}
        />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />}>
              <Route path="/register" element={<Register />} />
              <Route
                path="/login"
                element={<Login loginUser={App.loginUser} />}
              />
              <Route path="/profile" element={<Profile />} />
              <Route path="/write" element={<Write />} />
              <Route
                path="*"
                element={
                  <main style={{ padding: "1rem" }}>
                    <p>There's nothing here!</p>
                  </main>
                }
              />
            </Route>
          </Routes>
        </BrowserRouter>
        <Welcome />
        <Outlet />
      </div>
    );
  }
}

export default App;
