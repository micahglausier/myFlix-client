import { useState } from "react";
import PropTypes from "prop-types";
import { Button, Form } from "react-bootstrap";
import "./login-view.scss";

export const LoginView = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      Username: username,
      Password: password,
    };

    fetch("https://myflix-micah.herokuapp.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.user) {
          localStorage.setItem("user", JSON.stringify(data.user));
          localStorage.setItem("token", data.token);
          onLogin(data.user, data.token);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <Form
      action="POST"
      onSubmit={handleSubmit}
      style={{
        backgroundColor: "#33364D",
        boxShadow:
          "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
        width: "500px",
        border: "2px solid #CC6F57",
        height: "400px",
        marginTop: "100px",

      }}
    >
      <Form.Label
      style={{
        fontFamily: "exo-soft",
            color: "#CC6F57",
            textShadow: ".05em .05em 0 hsl(200 50% 30%)",
            fontSize: "50px",
            marginLeft: "10px",
      }}
      >Login

      </Form.Label>
      <Form.Group
        className="mb-3"
        controlId="formUsername"
        style={{ marginRight: "10px", marginLeft: "10px", marginTop: "10px" }}
      >
        <Form.Label style={{ color: "#e5dac6", fontSize: "20px" }} htmlFor="">
          Username:
        </Form.Label>
        <Form.Control
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          style={{ backgroundColor: "#e5dac6" }}
        />
      </Form.Group>
      <Form.Group
        className="mb-3"
        controlId="formPassword"
        style={{ marginRight: "10px", marginLeft: "10px" }}
      >
        <Form.Label style={{ color: "#e5dac6", fontSize: "20px" }} htmlFor="">
          Password:
        </Form.Label>
        <Form.Control
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ backgroundColor: "#e5dac6" }}
        />
      </Form.Group>

      <Button
        variant="primary"
        type="submit"
        style={{
          marginRight: "10px",
          marginLeft: "10px",
          backgroundColor: "#CC6F57",
          marginBottom: "10px",
        }}
      >
        Login
      </Button>
    </Form>
  );
};

LoginView.propTypes = {
  onLogin: PropTypes.func.isRequired,
};
