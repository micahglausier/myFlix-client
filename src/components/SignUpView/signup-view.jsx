import { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";

export const SignupView = () => {
    const [Username, setUsername] = useState("");
    const [Password, setPassword] = useState("");
    const [Email, setEmail] = useState("");
    const [Birthday, setBirthday] = useState("");

    const handleSubmit = event => {
        event.preventDefault();

        const data = {
            Username,
            Password,
            Email,
            Birthday
        }

        fetch("https://myflix-micah.herokuapp.com/users", {
            method: "POST",
            body: JSON.stringify(data),
            headers: { "Content-Type": "application/json" }
        })
        .then(response => {
            if (response.ok) {
                alert("Signup successful");
                window.location.replace("/login");
            } else {
                alert("Signup failed");
            }
        });
    };

    return (
        <Card className="mt-2 mb-3">
            <Card.Body>
                <Card.Title>Sign up</Card.Title>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>Username:</Form.Label>
                        <Form.Control
                            type="text"
                            value={Username}
                            onChange={e => setUsername(e.target.value)}
                            required
                            minLength="5"
                            className="bg-light"
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password:</Form.Label>
                        <Form.Control
                            type="password"
                            value={Password}
                            onChange={e => setPassword(e.target.value)}
                            required
                            minLength="8"
                            className="bg-light"
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Email:</Form.Label>
                        <Form.Control
                            type="email"
                            value={Email}
                            onChange={e => setEmail(e.target.value)}
                            required
                            className="bg-light"
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Birthdate:</Form.Label>
                        <Form.Control
                            type="date"
                            value={Birthday}
                            onChange={e => setBirthday(e.target.value)}
                            required
                            className="bg-light"
                        />
                    </Form.Group>
                    <Button className="mt-3" variant="primary" type="submit">Submit</Button>
                </Form>
            </Card.Body>
        </Card>
    );
};
