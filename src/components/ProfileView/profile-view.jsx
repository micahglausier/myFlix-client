import { useState } from "react";
import { Button, Form, Row, Col, Container } from "react-bootstrap";
import { MovieCard } from "../MovieCard/movie-card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export const ProfileView = ({
  user,
  deregister,
  token,
  movies,
  favoriteMovies,
  toggleFavorite,
}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [birthday, setBirthday] = useState("");
  const [email, setEmail] = useState("");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleUpdate = (e) => {
    e.preventDefault();
    const data = {
      Username: username,
      Password: password,
      Birthday: birthday,
      Email: email,
      FavoriteMovies: favoriteMovies,
    };
    fetch(`https://myflix-micah.herokuapp.com/users/${user._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.ok) {
          alert("Update successful");
          return res.json();
        } else {
          alert("Update failed");
        }
      })
      .then((data) => {
        localStorage.setItem("user", JSON.stringify(data));
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const favoriteMoviesList = movies.filter((m) => {
    return favoriteMovies.includes(m._id);
  });
  return (
    <Col
      className="profile-view"
      md={12}
      style={{ border: "2px solid #33364D", padding: "20px" }}
    >
      <h1 style={{ color: "#33364D" }}>Username: {user.Username}</h1>
      <h1 style={{ color: "#33364D" }}>Email: {user.Email}</h1>
      <h1 style={{ color: "#33364D", }}>Birthday: {user.Birthday.slice(0, 10)}</h1>

      <Button
        variant="primary"
        style={{
          backgroundColor: "#CC6F57",
          marginBottom: "10px",
          boxShadow:
            "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
          border: "2px solid #33364D",
          color: "#33364D",
          marginRight: "15px",
        }}
        onClick={handleShow}
      >
        Update Info
      </Button>
      <Button
        onClick={deregister}
        variant="danger"
        style={{
          backgroundColor: "#CC6F57",
          marginBottom: "10px",
          boxShadow:
            "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
          border: "2px solid #33364D",
          color: "#33364D",
        }}
      >
        Delete User
      </Button>
      <Row className="justify-content-md-center">
        {favoriteMoviesList.map((movie) => {
          return (
            <Col className="mb-5" key={movie._id} md={3}>
              <MovieCard
                movie={movie}
                key={movie._id}
                toggleFavorite={toggleFavorite}
                favoriteMovies={favoriteMovies}
              />
            </Col>
          );
        })}
      </Row>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Info</Modal.Title>
        </Modal.Header>
        <Form action="PUT" onSubmit={handleUpdate}>
          <Modal.Body>
            {" "}
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formUsername">
                <Form.Label htmlFor="">Username: </Form.Label>
                <Form.Control
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  minLength="3"
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formPassword">
                <Form.Label htmlFor="">Password: </Form.Label>
                <Form.Control
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Form.Group>
            </Row>
            <Form.Group className="mb-3" controlId="formBirthday">
              <Form.Label htmlFor="">Birthday: </Form.Label>
              <Form.Control
                type="date"
                value={birthday}
                onChange={(e) => setBirthday(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label htmlFor="">Email: </Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </Col>
  );
};
