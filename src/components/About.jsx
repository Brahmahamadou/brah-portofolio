import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CustomCard from './Card';
import './About.css';

// Données des projets
const projects = [
  {
    title: 'HTML CSS JS',
    description: "C'est une App developper en groiupe pour entreprise Ninetchec",
    url: 'https://siteninetech.onrender.com/',
    imageSrc: require('./images/photo1.png')
  },
  {
    title: 'HTML CSS JS',
    description: 'Project Inval',
    url: 'https://brahmahamadou.github.io/EnvalIntra-CodeLoccol/',
    imageSrc: require('./images/photo2.png')
  },
  {
    title: 'Project BubdetApp',
    description: "C'est une App qu'elle peut te permettre de gerer te budget",
    url: 'https://brahmahamadou.github.io/ProjetBudgetApp/',
    imageSrc: require('./images/photo3.png')
  },
  {
    title: 'Project TodoList',
    description: "C'est une App qui va te permettre de gerer tes taches quotidiens",
    url: 'https://brahmahamadou.github.io/ProjetToDoListe/',
    imageSrc: require('./images/photo4.png')
  },
];

const About = () => {
  return (
    <Container className="cont p-4">
      <h2 className="text-center mb-4" style={{ color: '#ffffff' }}>
        Projets en vedette
      </h2>
      <Row className="g-3">
        {projects.map((project, index) => (
          <Col key={index} xs={12} md={6} className="d-flex">
            <CustomCard
              title={project.title}
              description={project.description}
              url={project.url}
              imageSrc={project.imageSrc}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default About;
