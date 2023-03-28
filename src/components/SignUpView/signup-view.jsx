import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const SignupView = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      Username: username,
      Password: password,
      Email: email,
      Birthday: birthday,
    };

    fetch("https://myflix-micah.herokuapp.com/users", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      if (response.ok) {
        alert("Signup successful");
        window.location.reload();
      } else {
        alert("Signup Failed");
      }
    });
  };

  return (
    <Form onSubmit={handleSubmit} style={{ textAlign: "left" }}>
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
          Sign-Up:
        </h3>
        <Form.Group controlId="formUsername" className="form">
          <Form.Label
            style={{
              color: "#e5dac6",
              fontWeight: "500",
            }}
          >
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
        <Form.Group controlId="formEmail" className="form">
          <Form.Label style={{ color: "#e5dac6", fontWeight: "500" }}>
            Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              backgroundColor: "whitesmoke",
              border: "2px solid #CC6F57",
              color: "#33364D",
            }}
          />
        </Form.Group>
        <Form.Group controlId="formBirthday" className="form">
          <Form.Label style={{ color: "#e5dac6", fontWeight: "500" }}>
            Birthday:&nbsp;&nbsp;
          </Form.Label>
          <Form.Control
            type="date"
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
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
            style={{
              backgroundColor: "#e5dac6",
              color: "#33364D",
              border: "2px solid #CC6F57",
            }}
          >
            Sign-up
          </Button>
        </div>
      </div>
    </Form>
  );
};
