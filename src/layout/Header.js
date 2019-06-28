import React from 'react';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';
import './Header.css';

export default function Header() {

  return (
    <Navbar id="layout-nav" collapseOnSelect expand="lg">
      <Navbar.Brand href="/">
        <img id="layout-logo" src="/ics-logo.png" />
            <span id="layout-nav-title">ICS</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="Academic Programs" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/1.1">BS Computer Science</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/1.2">MS Computer Science</NavDropdown.Item>
              <NavDropdown.Item href="#action/1.3">MIT Information Technology</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/1.4">PhD Computer Science</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#features">Research</Nav.Link>
            <Nav.Link href="#pricing">Divisions</Nav.Link>


          </Nav>
          {/* <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav> */}
      </Navbar.Collapse>

    </Navbar>
  )
};
