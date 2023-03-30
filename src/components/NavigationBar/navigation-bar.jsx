import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export const NavigationBar = ({ user, onLoggedOut }) => {
  return (
    <Navbar expand="lg" style={{ backgroundColor: "#6F9984", marginBottom: "10px", marginTop: "25px", padding: "10px", width: "100%", border: "4px solid #CC6F57", boxShadow: "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset" }}>
      <Container>
        <Navbar.Brand as={Link} to="/" >
          <h1 
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "90px",
                fontFamily: "exo-soft, san-serif",
                color: "#CC6F57",
                textShadow: ".05em .05em 0 hsl(200 50% 30%)",
                marginBottom: "25px",
            }}>myFlix
            </h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            {!user && (
              <>
                <Nav.Link as={Link} to="/login" >
                    <h4 style={{fontFamily: "exo-soft, san-serif",}}>Login</h4>
                </Nav.Link>
                <Nav.Link as={Link} to="/signup">
                    <h4 style={{fontFamily: "exo-soft, san-serif",}}>Sign-up</h4>
                </Nav.Link>
              </>
            )}
            {user && (
              <>
                <Nav.Link as={Link} to="/">
                <h4 style={{fontFamily: "exo-soft, san-serif",}}>Home</h4>
                </Nav.Link>
                <Nav.Link as={Link} to="/profile">
                <h4 style={{fontFamily: "exo-soft, san-serif",}}>Profile</h4>
                </Nav.Link>
                <Nav.Link onClick={onLoggedOut}><h4 style={{fontFamily: "exo-soft, san-serif",}}>Logout</h4></Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};