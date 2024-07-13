import React from "react";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faNode,
} from "@fortawesome/free-brands-svg-icons";
import {
  faServer,
  faChartLine,
  faPalette
} from "@fortawesome/free-solid-svg-icons";

function Home() {
  return (
    <div className="content">
      <div className="entete">
        <h3 className="titre">Qui Suis-je</h3>
        <p>
        Je m'appelle Mahamadou Moussa Brah, développeur Web spécialisé dans HTML, CSS, JavaScript, React, Node.js, Express et MongoDB. 
        Je peux combiner toutes ces compétences pour créer des solutions adaptées aux entreprises et aux particuliers.
        Mes expériences de travail et d'étude m'ont permis d'aborder diverses problématiques liées au développement informatique et communicationnel. 
        Passionné par la résolution de problèmes, animé par la curiosité, j'améliore continuellement mes compétences en codage pour développer des solutions innovantes. 
        Je suis également blogueur, fact-cheker et titulaire d'une licence en Communication. Vous pouvez m'écrire à cette
          adresse{" "}
          <a href="mailto:mahamadoubrah672@gmail.com">
            mahamadoubrah672@gmail.com
          </a>
          .
        </p>
      </div>
      <div className="contenu">
        <h2>Mes Services</h2>
        <div className="services">
          <div className="service-card">
            <h4>Frontend</h4>
            <div className="icons">
              <FontAwesomeIcon icon={faHtml5} size="2x" />
              <FontAwesomeIcon icon={faCss3Alt} size="2x" />
              <FontAwesomeIcon icon={faJs} size="2x" />
              <FontAwesomeIcon icon={faReact} size="2x" />
            </div>
            <p>
              Création d'interfaces utilisateur réactives et interactives en utilisant HTML, CSS, JavaScript et React. 
              Expérience dans le développement d'applications web modernes avec des pratiques de codage propres et maintenables.
            </p>
          </div>
          <div className="service-card">
            <h4>Backend</h4>
            <div className="icons">
              <FontAwesomeIcon icon={faNode} size="2x" />
              <FontAwesomeIcon icon={faServer} size="2x" />
            </div>
            <p>
              Développement de serveurs et d'API RESTful avec Node.js et Express. Gestion des bases de données et mise en place de solutions de stockage et de récupération de données sécurisées.
            </p>
          </div>
        </div>
        <div className="services">
          <div className="service-card">
            <h4>Marketing Digital</h4>
            <div className="icons">
              <FontAwesomeIcon icon={faChartLine} size="2x" />
            </div>
            <p>
              Marketing digital pour accroître la visibilité et l'engagement en ligne.
            </p>
          </div>
          <div className="service-card">
            <h4>Graphic Design</h4>
            <div className="icons">
              <FontAwesomeIcon icon={faPalette} size="2x" />
            </div>
            <p>
            Je possède une expérience de débutant en design graphique, principalement avec Canva et Figma. Je me spécialise dans la création d'interfaces utilisateur et de logos, et je suis passionné par le développement de designs attrayants et fonctionnels            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
