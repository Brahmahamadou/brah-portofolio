// Footer.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'; // Importer les styles CSS

const socials = [
  {
    icon: faEnvelope,
    url: 'mailto:mahamadoubrah672@gmail.com',
  },
  {
    icon: faGithub,
    url: 'https://github.com/Brahmahamadou',
  },
  {
    icon: faLinkedin,
    url: 'https://www.linkedin.com/in/mahamadou-moussa-brah-824735267/',
  },
  {
    icon: faTwitter,
    url: 'https://x.com/MahamadouBrah67',
  },
  {
    icon: faFacebook,
    url: 'https://www.facebook.com/mahamadou.moussabrah',
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-section">
        <p>Retrouvez moi sur mes differents comptes reseaux sociaux</p>
        <div className="social-icons">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={social.icon} size="2x" className="icon" />
            </a>
          ))}
        </div>
        <hr className="footer-separator" />
      </div>
      <div className="footer-bottom">
        <p>Mahamadou Moussa Brah • © 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
