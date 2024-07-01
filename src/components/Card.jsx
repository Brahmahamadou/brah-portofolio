import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import './Card.css'; // Assurez-vous que ce fichier CSS existe

const CustomCard = ({ title, description, url, imageSrc }) => {
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <Card className='custom-card'>
      <Card.Img variant="top" src={imageSrc} alt={title} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <div className="buttons">
          <Button className="custom-button" href={url} target="_blank" rel="noopener noreferrer">
            View Project
          </Button>
          <Button className="custom-button" onClick={toggleDescription}>
            Description
          </Button>
        </div>
        {showDescription && (
          <div className="description">
            <Card.Text>{description}</Card.Text>
          </div>
        )}
      </Card.Body>
    </Card>
  );
};

export default CustomCard;
