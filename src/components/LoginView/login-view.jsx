import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
export const LoginView = ({ onLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // validation of user login
  const handleSubmit = (event) => {
    // this prevents the default behavior of the form which is to reload the entire page
    // prevents the default behavior of the form which is to reload the entire page
    event.preventDefault();

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
      .then((response) => response.json())
      .then((data) => {
        console.log("Login response: ", data);
        if (data.user) {
          localStorage.setItem("user", JSON.stringify(data.user));
          localStorage.setItem("token", data.token);
          onLoggedIn(data.user, data.token);
        } else {
          alert("No such user");
        }
      })
      .catch((e) => {
        alert("Something went wrong");
      });
  };

  // login form with submit button
  return (
    // handleSubmit is the callback of onSubmit, tells the login API to validate user and password

    <Form onSubmit={handleSubmit}>
      <div
        style={{
          border: "4px solid #CC6F57",
          padding: "10px",
          boxShadow:
            "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
          backgroundColor: "#33364D",
        }}
      >
        <h3
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#e5dac6",
            fontSize: "40px",
            marginBottom: "-10px",
            marginTop: "30px",
          }}
        >
          Login:
        </h3>

        <Form.Group controlId="formUsername" className="form">
          <Form.Label style={{ color: "#e5dac6", fontWeight: "500" }}>
            Username:&nbsp;
          </Form.Label>
          <Form.Control
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            minLength="3"
            style={{
              backgroundColor: "whitesmoke",
              border: "2px solid #CC6F57",
              color: "#33364D",
            }}
          />
        </Form.Group>

        <Form.Group controlId="formPassword" className="form">
          <Form.Label style={{ color: "#e5dac6", fontWeight: "500" }}>
            Password:&nbsp;
          </Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              backgroundColor: "whitesmoke",
              border: "2px solid #CC6F57",
              color: "#33364D",
            }}
          />
        </Form.Group>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <Button
            type="submit"
            className="form-button"
            style={{
              backgroundColor: "#e5dac6",
              color: "#33364D",
              border: "2px solid #CC6F57",
            }}
          >
            Login
          </Button>
        </div>
      </div>
    </Form>
  );
};

