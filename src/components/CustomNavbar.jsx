import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CustomNavbar.css';
import logo from './photo/mhd.jpg'; // Assurez-vous de mettre le chemin correct de l'image

function CustomNavbar({ setActiveItem }) {
  return (
    <Navbar className='Navbar' expand="lg">
      <Container>
        <Navbar.Brand className="d-lg-none"> 
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" onSelect={(selectedKey) => setActiveItem(selectedKey)}>
            <Nav.Link eventKey="home">À propos</Nav.Link>
            <Nav.Link eventKey="resume">CV</Nav.Link>
            <Nav.Link eventKey="projects">Projects</Nav.Link>
            <Nav.Link eventKey="contacter">Contact Me</Nav.Link>
            <Nav.Link eventKey="bloging">Blog</Nav.Link>
            <Nav.Link eventKey="login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
