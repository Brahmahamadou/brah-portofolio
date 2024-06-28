// CustomNavbar.js

import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './photo/mhd.jpg'; // Assure-toi que le chemin est correct

function MyNavbar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        {/* Logo ou image à gauche */}
        <Navbar.Brand href="#home">
          <img
            src={logo} // Utilisation de l'image importée
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>

        {/* Éléments à droite */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Accueil</Nav.Link>
            <Nav.Link href="#link">À propos</Nav.Link>
          </Nav>
           <Nav>
            <Nav.Link href="#deets">Contact Me</Nav.Link>
            <Nav>
            <Nav.Link href="#deets">Blog</Nav.Link>
          </Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
