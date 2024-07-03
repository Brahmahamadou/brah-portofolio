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
      <h5>Mahamadou</h5>
      <h5 className='h5'> Moussa Brah</h5>
      <div className="contact-info">
        <div className="contact-item">
          <div className="icon">
          <FaEnvelope className='myicon' size={20} />
          </div>
          
          <span className="contact-text mail">{" "}
            <a href="mailto:mahamadoubrah672@gmail.com">
              mahamadoubrah672@gmail.com
            </a></span>
        </div>
        <div className="contact-item">
        <div className="icon">
        <FaPhone className='myicon' size={20} />          
        </div>
          <span className="contact-text">(+227) 92004099</span>
        </div>
        <div className="contact-item">
        <div className="icon">
        <FaMapMarkerAlt className='myicon' size={20} />         
        </div>
          <span className="contact-text">Niamey</span>
        </div>
      </div>
      <div className="social-links">
        <div className="social-icon">
          <a href="https://www.facebook.com/mahamadou.moussabrah" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={30} />
          </a>
        </div>
        <div className="social-icon">
          <a href="https://x.com/MahamadouBrah67" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={30} />
          </a>
        </div>
        <div className="social-icon">
          <a href="https://www.instagram.com/mahamadoubrah67" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} />
          </a>
        </div>
        <div className="social-icon">
          <a href="https://www.linkedin.com/in/mahamadou-moussa-brah-824735267/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
