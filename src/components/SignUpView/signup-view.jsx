import { useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";

export const SignUpView = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [birthday, setBirthday] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      Username: username,
      Password: password,
      Birthday: birthday,
      Email: email,
    };
    fetch("https://myflix-micah.herokuapp.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.ok) {
        alert("Sign up successful");
        window.location.reload();
      } else {
        alert("Sign up failed");
      }
    });
  };

  return (
    <div>
      <Form
        action="POST"
        onSubmit={handleSubmit}
        style={{
          backgroundColor: "#33364D",
          boxShadow:
            "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
          width: "500px",
          border: "2px solid #CC6F57",
          height: "500px",
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
      >Sign Up

      </Form.Label>
        <Row
          className="mb-3"
          style={{ marginRight: "10px", marginLeft: "10px", marginTop: "10px" }}
        >
          <Form.Group as={Col} controlId="formUsername">
            <Form.Label
              style={{ color: "#e5dac6", fontSize: "20px" }}
              htmlFor=""
            >
              Username:{" "}
            </Form.Label>
            <Form.Control
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              minLength="3"
            />
          </Form.Group>
          <Form.Group
            as={Col}
            controlId="formPassword"
            style={{ marginRight: "10px", marginLeft: "10px" }}
          >
            <Form.Label
              style={{ color: "#e5dac6", fontSize: "20px" }}
              htmlFor=""
            >
              Password:{" "}
            </Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>
        </Row>

        <Form.Group
          className="mb-3"
          controlId="formBirthday"
          style={{ marginRight: "10px", marginLeft: "10px" }}
        >
          <Form.Label style={{ color: "#e5dac6", fontSize: "20px" }} htmlFor="">
            Birthday:{" "}
          </Form.Label>
          <Form.Control
            type="date"
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="formEmail"
          style={{ marginRight: "10px", marginLeft: "10px" }}
        >
          <Form.Label style={{ color: "#e5dac6", fontSize: "20px" }} htmlFor="">
            Email:{" "}
          </Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
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
          Submit
        </Button>
      </Form>
    </div>
  );
};
