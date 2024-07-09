import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CustomCard from './Card';
import './About.css';
import { BiFontSize } from 'react-icons/bi';

// Données des projets
const projects = [
  {
    title: 'HTML CSS JS: Ninetec App',
    description: 'Site et application développés en groupe avec mes autres camarades lors du hackathon organisé par Ninetech',
    url: 'https://siteninetech.onrender.com/',
    imageSrc: require('./images/photo1.png')
  },
  {
    title: 'HTML CSS JS: Enval App',
    description: 'Une application nommée Enval, développée dans le cadre du cursus de CodeLoccol.',
    url: 'https://brahmahamadou.github.io/EnvalIntra-CodeLoccol/',
    imageSrc: require('./images/photo2.png')
  },
  {
    title: 'HTML CSS JS: BubdetApp',
    description: 'Une application qui permet de gérer vos budgets. Elle fait également partie du projet du cursus de CodeLoccol.',
    url: 'https://brahmahamadou.github.io/ProjetBudgetApp/',
    imageSrc: require('./images/photo3.png')
  },
  {
    title: 'HTML CSS JS: TodoList App',
    description: 'Une application qui vous permet de gérer vos tâches quotidiennes avec toutes les descriptions nécessaires. Ce projet peut également faire partie du programme de CodeLoccol.',
    url: ' https://brahmahamadou.github.io/ProjetToDoListe/',
    imageSrc: require('./images/photo4.png')
  },
  {
    title: 'React : My Portofolio',
    description: 'Mon portfolio où vous allez découvrir tous mes projets réalisés.',
    url: 'brah-portofolio.vercel.app',
    imageSrc: require('./images/photo6.png')
  },
];

const About = () => {
  return (
    <Container className="cont p-4">
      <h4 className=" mb-4" style={{ color: '#ffffff' }}>
        Mes Projects
      </h4>
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
