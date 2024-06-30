// Home.js

import React from 'react';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faNode } from '@fortawesome/free-brands-svg-icons';
import { faServer } from '@fortawesome/free-solid-svg-icons';

function Home() {
  return (
    <div className="content">
      <div className="entete">
        <h3 className='titre'>À Propos</h3>
        <p>
          Je suis Mahamadou Moussa Brah, Développeur Web Front-End spécialisé dans des technologies telles que HTML,
          CSS, Bootstrap, JavaScript, React pour le Frontend et Node.js pour le Backend.
          J'ai étudié à Codeloccol, la première école nigérienne 100% coding.
          Je suis également certifié par Meta pour leurs cours sur Coursera,
          où j'ai développé des projets concrets en validant leurs 9 modules.
          Je peux utiliser toute cette expérience pour créer des solutions
          pour les entreprises et les particuliers.
          Je suis également blogueur et titulaire d'une licence en Communication.
        </p>
      </div>
      <div className="contenu">
        <h2>Mes Services</h2>
      <div className="services">
        <div className="frontend">
          <h4>Frontend</h4>
          <div className="icons">
            <FontAwesomeIcon icon={faHtml5} size="2x" />
            <FontAwesomeIcon icon={faCss3Alt} size="2x" />
            <FontAwesomeIcon icon={faJs} size="2x" />
            <FontAwesomeIcon icon={faReact} size="2x" />
          </div>
        </div>
        <div className="backend">
          <h4>Backend</h4>
          <div className="icons">
            <FontAwesomeIcon icon={faNode} size="2x" />
            <FontAwesomeIcon icon={faServer} size="2x" />
          </div>
        </div>
      </div>
      </div>
   
    </div>
  );
}

export default Home;
