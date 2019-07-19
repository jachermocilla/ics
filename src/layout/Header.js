import React from 'react';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';
import './Header.css';

export default function Header() {

  return (
    <Navbar id="layout-nav" collapseOnSelect expand="lg">
      <Navbar.Brand href="/">
        <img id="layout-logo" src="/ics-logo.png" alt="ics-log" />
        <span className="layout-nav-title hide-on-desktop show-on-mobile">ICS</span>
        <span className="layout-nav-title hide-on-mobile">Institute of Computer Science</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          {/* <NavDropdown title="Academic Programs" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/1.1">BS Computer Science</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/1.2">MS Computer Science</NavDropdown.Item>
            <NavDropdown.Item href="#action/1.3">MIT Information Technology</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/1.4">PhD Computer Science</NavDropdown.Item>
          </NavDropdown>

          <Nav.Link href="#features">Research</Nav.Link>
          <Nav.Link href="#pricing">Divisions</Nav.Link> */}
        </Nav>
        <Nav>
          {/* <NavDropdown title="Academic Programs" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/1.1">BS Computer Science</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/1.2">MS Computer Science</NavDropdown.Item>
            <NavDropdown.Item href="#action/1.3">MIT Information Technology</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/1.4">PhD Computer Science</NavDropdown.Item>
          </NavDropdown> */}
          <Nav.Link eventKey={1} href="/">Academic Programs</Nav.Link>
          <Nav.Link eventKey={2} href="/">Research</Nav.Link>
          <Nav.Link eventKey={3} href="/">Faculty</Nav.Link>
          <Nav.Link eventKey={4} href="/">About</Nav.Link>

        </Nav>
      </Navbar.Collapse>

    </Navbar>
  )
};
