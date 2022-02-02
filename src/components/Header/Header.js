import React from "react";
import "./Header.css";
import { Navbar, Nav, Offcanvas, Container } from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <Navbar className="text-light" expand={false}>
        <Container fluid>
          <Navbar.Brand href="/">Freda Art</Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
            className="bg-dark text-white"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                Freda Art
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link className="text-white" href="/">
                  Home
                </Nav.Link>
                <Nav.Link className="text-white" href="/about">
                  About
                </Nav.Link>
                <Nav.Link className="text-white" href="/artwork">
                  Art
                </Nav.Link>
                <Nav.Link className="text-white" href="/contact">
                  Contact
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
