import{ useState } from "react";
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
            Birthday: birthday
        };

        fetch("https://myflix-micah.herokuapp.com/users", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
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
        <Form onSubmit={handleSubmit} style= {{textAlign: 'left'}}>
            <h3 style={{ display: 'flex',  justifyContent:'center', alignItems:'center', color: '#FBC403', fontSize: "20px", marginBottom: '-10px', marginTop: '30px' }}>Sign-Up:</h3>
            <Form.Group controlId="formUsername" className="form"  style={{ display: 'flex',  justifyContent:'center', alignItems:'center' }}>
            <Form.Label>Username:&nbsp;</Form.Label>
            <Form.Control
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                minLength="3" 
                style={{ backgroundColor: "whitesmoke", border: '2px solid #F34C19'}}
            />
            </Form.Group>
            <Form.Group controlId="formPassword" className="form"  style={{ display: 'flex',  justifyContent:'center', alignItems:'center' }}>
            <Form.Label>Password:&nbsp;</Form.Label>
            <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{ backgroundColor: "whitesmoke", border: '2px solid #F34C19'}}
            />
            </Form.Group>
            <Form.Group controlId="formEmail" className="form"  style={{ display: 'flex',  justifyContent:'center', alignItems:'center' }}>
            <Form.Label>Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Form.Label>
            <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{ backgroundColor: "whitesmoke", border: '2px solid #F34C19'}}
            />
            </Form.Group>
            <Form.Group controlId="formBirthday" className="form"  style={{ display: 'flex',  justifyContent:'center', alignItems:'center' }}>
                <Form.Label>Birthday:&nbsp;&nbsp;</Form.Label>
                <Form.Control
                    type="date"
                    value={birthday}
                    onChange={(e) => setBirthday(e.target.value)}
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