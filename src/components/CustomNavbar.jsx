import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CustomNavbar.css';

function CustomNavbar({ setActiveItem }) {
  return (
    <Navbar className='Navbar' expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" onSelect={(selectedKey) => setActiveItem(selectedKey)}>
            <Nav.Link eventKey="home">À propos</Nav.Link>
            <Nav.Link eventKey="about">Projects</Nav.Link>
            <Nav.Link eventKey="services">Contact Me</Nav.Link>
            <Nav.Link eventKey="contact">Blog</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
