import { Navbar, Container, Nav, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./navigation-bar.scss";

export const NavigationBar = ({ user, onLoggedOut, onFilter }) => {
  const [query, setQuery] = useState("");
  useEffect(() => {
    onFilter(query);
  }, [query]);
  return (
    <Navbar className="navbar" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand
          as={Link}
          to="/"
          style={{
            fontFamily: "exo-soft",
            color: "#CC6F57",
            textShadow: ".05em .05em 0 hsl(200 50% 30%)",
            fontSize: "75px",
          }}
        >
          favMOV
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {!user && (
              <>
                <Nav.Link
                  as={Link}
                  to={"/login"}
                  style={{
                    color: "#CC6F57",
                    fontSize: "25px",
                    fontFamily: "exo-soft",
                  }}
                >
                  Login
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to={"/signup"}
                  style={{
                    color: "#CC6F57",
                    fontSize: "25px",
                    fontFamily: "exo-soft",
                  }}
                >
                  Sign up
                </Nav.Link>
              </>
            )}
            {user && (
              <>
                <Nav.Link
                  as={Link}
                  to={"/"}
                  style={{
                    color: "#CC6F57",
                    fontSize: "25px",
                    fontFamily: "exo-soft",
                  }}
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to={"/profile"}
                  style={{
                    color: "#CC6F57",
                    fontSize: "25px",
                    fontFamily: "exo-soft",
                  }}
                >
                  Profile
                </Nav.Link>
                <Nav.Link
                  onClick={onLoggedOut}
                  style={{
                    color: "#CC6F57",
                    fontSize: "25px",
                    marginRight: "20px",
                    fontFamily: "exo-soft",
                  }}
                >
                  Logout
                </Nav.Link>
              </>
            )}
          </Nav>
          {user && (
            <>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  style={{ border: "1px solid #CC6F57" }}
                />
              </Form>
            </>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

