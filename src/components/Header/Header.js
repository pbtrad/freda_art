import React from "react";
import "./Header.css";
import { Navbar, Nav, Offcanvas, Container } from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <Navbar className="text-dark" expand={false}>
        <Container fluid>
          <Navbar.Brand className="" href="/">Freda Hatch</Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
            className="bg-dark text-white"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                Freda Hatch
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <a className="text-white" href="#home">
                  Home
                </a>
                <a className="text-white" href="#about">
                  About
                </a>
                <a className="text-white" href="#artwork">
                  Art
                </a>
                <a className="text-white" href="#contact">
                  Contact
                </a>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
