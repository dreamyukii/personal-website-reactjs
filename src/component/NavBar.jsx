import React, { Component } from "react";
import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <Navbar bg="light" expand="md">
          <Container>
            <Navbar.Brand href="#home">dreamyuki</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">About</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
