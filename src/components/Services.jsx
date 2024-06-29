// Sidebar.js

import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Sidebar.css'; // Assure-toi que ce fichier existe et que le chemin est correct
import logo from './photo/mhd.jpg'; // Assure-toi que le chemin est correct

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="brand">
        <img
          src={logo} // Utilisation de l'image importée
          width="100"
          height="100"
          className="d-inline-block align-top"
          alt="Logo"
        />
      </div>
      <div className="social-links">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook size={30} />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={30} />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={30} />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} />
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
