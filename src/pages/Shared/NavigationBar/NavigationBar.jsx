import React, { useContext } from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const NavigationBar = () => {
  const { user } = useContext(AuthContext);

  return (
    <Container>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        className="mt-2"
      >
        <Container>
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto me-auto">
              <Link to="/category/0">Home</Link>
              <Link>About</Link>
              <Link>Career</Link>
            </Nav>
            <Nav>
              {user && (
                <div className="d-flex align-items-center gap-2">
                  <FaUserCircle style={{ fontSize: "2rem" }} />{" "}
                  {user?.displayName}
                </div>
              )}
              {user ? (
                <Button variant="secondary" className="rounded-0">
                  Logout
                </Button>
              ) : (
                <Link to="/login">
                  <Button variant="secondary" className="rounded-0">
                    Login
                  </Button>
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default NavigationBar;
