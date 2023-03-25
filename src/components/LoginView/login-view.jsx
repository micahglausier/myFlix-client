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
      Password: password
    };
    fetch("https://myflix-micah.herokuapp.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
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
      <h3 style={{ display: 'flex',  justifyContent:'center', alignItems:'center', color: '#FBC403', fontSize: "20px", marginBottom: '-10px', marginTop: '30px' }}>Login:</h3>
      <Form.Group controlId="formUsername" className="form"  style={{ display: 'flex',  justifyContent:'center', alignItems:'center' }}>
        <Form.Label class="form-label">Username:&nbsp;</Form.Label>
        <Form.Control
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          minLength="3"
          style={{ backgroundColor: "whitesmoke", border: '2px solid #F34C19'}}
          />
      </Form.Group>
      
      <Form.Group controlId="formPassword" className="form" style={{ display: 'flex',  justifyContent:'center', alignItems:'center' }}>
        <Form.Label>Password:&nbsp;</Form.Label>
        <Form.Control
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ backgroundColor: "whitesmoke", border: '2px solid #F34C19'}}
          />
      </Form.Group>
      <div style={{ display: 'flex',  justifyContent:'center', alignItems:'center', marginTop: '10px' }}>
      <Button variant="primary" type="submit" className="form-button">Submit</Button>
      </div>
    </Form>
  );
}; 