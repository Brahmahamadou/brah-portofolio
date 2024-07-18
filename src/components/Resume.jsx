import React from "react";
import "./Resume.css";
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

function Resume() {
  return (
    <div className="mycont">
      <h3>Education</h3>
      <div className="cv">
        <div className="ligne">
          <div className="point">
            <h6 className="experience-title">
              Université André Salifou de Zinder
            </h6>
            <p className="experience-description">
              De 2017 à 2022 : Etudiant à Université André Salifou de Zinder à
              la Faculté des Lettres et Sciences Humaines au département de
              Philosophie, Culture et Communication: Obtention d'une Licence en
              Communication.
            </p>
          </div>
          <div className="hr"></div>
          <div className="point">
            <h6 className="experience-title">CSP Hikima Maradi</h6>
            <p className="experience-description">
              De 2013-2017 : Complexe scolaire Privé Hikima de Maradi avec
              l’obtention de Baccalauréat A4.
            </p>
          </div>
          <div className="hr"></div>
          <div className="point">
            <h6 className="experience-title">Meta Front-End Developer</h6>
            <p className="experience-description">
              J'ai suivi une formation en ligne de 7 mois en 2024, composée de 9 modules
              de certification pour la spécialisation en Front-End, autorisés
              par Meta et proposés via Coursera.{" "}
              <a
                href="https://www.coursera.org/account/accomplishments/specialization/certificate/G88BCKL2T3TF"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cliquez ici pour voir mon certificat
              </a>
            </p>
          </div>
          <div className="hr"></div>
          <div className="point">
            <h6 className="experience-title">CodeLocool</h6>
            <p className="experience-description">
              De 2023 à 2024, j'ai suivi une formation en Coding à Codeloccol.
              C'est la première école nigérienne dédiée à 100% au coding et à la
              pratique, avec une formation autonome et un apprentissage par les
              pairs.
            </p>
          </div>
          <h3>Expérience</h3>
          <div className="point">
            <h6 className="experience-title">Challenge Sahel Coder</h6>
            <p className="experience-description">
              J'ai été parmi les trois finalistes du challenge nommé #30JoursDeCodeNe, organisé par la communauté Sahel Coders. Cela a été une très grande expérience pour moi et pour ma vie professionnelle.
            </p>
          </div>
          <div className="hr"></div>
          <div className="point">
            <h6 className="experience-title">Opérateur d’Enrôlement</h6>
            <p className="experience-description">
              Du 15 Octobre 2019 au 31 Mai 2020 : j’ai travaillé en tant
              qu’Opérateur d’enrôlement dans le cadre de l’élaboration du
              fichier électorale biométrique au sein de la commission électorale
              nationale indépendante du Niger (CENI-NIGER).
            </p>
          </div>
          <div className="hr"></div>
          <div className="point">
            <h6 className="experience-title">
              ABCA
            </h6>
            <p className="experience-description">
            En qualité de communicant, je suis actuellement chargé de communication pour le bureau départemental de l'Association des Blogueurs pour une Citoyenneté Active (ABCA) à Magaria.            </p>
          </div>
        </div>
      </div>
      <Button className="cv" variant="secondary">
        <FontAwesomeIcon icon={faDownload} />{" "}
        <a
          href="/cx.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none' }}
        >
          Pour Plus D'informations Voir Mon CV
        </a>
      </Button>
    </div>
  );
}

export default Resume;
