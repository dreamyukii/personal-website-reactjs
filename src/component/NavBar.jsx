import React, { Component } from "react";
import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
import { createBrowserRouter, Link, Router, RouterProvider } from "react-router-dom";
export default class NavBar extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar bg="light" expand="md">
            <Container>
              <Navbar.Brand as={Link} to={"./component/Home"}>dreamyuki</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link as={Link} to={"./component/Home"}>Home</Nav.Link>
                  <Nav.Link as={Link} to={"./component/AboutMe"}>About</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </Router>
    );
  }
}
