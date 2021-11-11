import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [penname, setPenName] = useState("");

  useEffect(() => {
    async function getCurrentUserProfile() {
      try {
        const jwt = localStorage.getItem("token");
        const username = localStorage.getItem("currentUsername");
        let response = await axios.get(
          "http://127.0.0.1:8000/api/writing/profile/" + username,
          { headers: { Authorization: "Bearer " + jwt } }
        );
        if (response === undefined) {
        } else {
          setEmail(response.data[0].email);
          setFirstName(response.data[0].first_name);
          setLastName(response.data[0].last_name);
          setPenName(response.data[0].pen_name);
        }
      } catch (err) {
        console.log(err);
      }
    }
    getCurrentUserProfile();
  }, [email, firstname, lastname, penname]);

  function validateForm() {
    return (
      firstname.length > 0 &&
      lastname.length > 0 &&
      email.length > 0 &&
      penname.length > 0
    );
  }

  function handleSubmit(event) {
    event.preventDefault();

    const profile = {
      email,
      firstname,
      lastname,
      penname,
    };

    props.updateUserProfile(profile);
  }

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>E-Mail</Form.Label>
          <Form.Control
            autoFocus
            type="e-mail"
            value={email}
            placeholder={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="penname">
          <Form.Label>Pen Name</Form.Label>
          <Form.Control
            type="name"
            value={penname}
            placeholder={penname}
            onChange={(e) => setPenName(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="firstname">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="name"
            value={firstname}
            placeholder={firstname}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="lastname">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="name"
            value={lastname}
            placeholder={lastname}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Group>
        <br />
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Update Profile
        </Button>
      </Form>
    </div>
  );
};

export default Login;
