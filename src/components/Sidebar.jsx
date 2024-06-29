import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Sidebar.css';
import logo from './photo/mhd.jpg';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">
        <img
          src={logo}
          width="100"
          height="100"
          className="d-inline-block align-top"
          alt="Logo"
        />
      </div>
      <h5>Je Suis Mahamadou</h5>
      <h5 className='h5'> Moussa Brah</h5>
      <div className="contact-info">
        <div className="contact-item">
          <FaEnvelope size={20} />
          <span className="contact-text">mahamadoubrah672@gmail.com</span>
        </div>
        <div className="contact-item">
          <FaPhone size={20} />
          <span className="contact-text">99956147</span>
        </div>
        <div className="contact-item">
          <FaMapMarkerAlt size={20} />
          <span className="contact-text">Niamey</span>
        </div>
      </div>
      <div className="social-links">
        <div className="social-icon">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={30} />
          </a>
        </div>
        <div className="social-icon">
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={30} />
          </a>
        </div>@
        <div className="social-icon">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} />
          </a>
        </div>
        <div className="social-icon">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
