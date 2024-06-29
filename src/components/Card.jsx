import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './Card.css'; // Assurez-vous que ce fichier CSS existe

const CustomCard = ({ title, description, url, imageSrc }) => {
  return (
    <Card className='custom-card'>
      <Card.Img variant="top" src={imageSrc} alt={title} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary" href={url} target="_blank" rel="noopener noreferrer">
          View Project
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CustomCard;
