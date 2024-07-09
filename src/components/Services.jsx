import React, { useRef } from 'react';
import emailjs from 'emailjs-com'; // Importez emailjs-com au lieu de @emailjs/browser
import { Container, Form, Button } from 'react-bootstrap';
import './Services.css';

export const Service = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_yzyoxsq',
        'template_psmxr7n',
        form.current,
        'GCFAu0S5sj1EcTdxQ'
      )
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
        },
        (error) => {
          console.log('ÉCHEC...', error.text);
        }
      );

    e.target.reset();
  };

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">Contactez-nous</h2>
      <Form ref={form} onSubmit={sendEmail} className="custom-form">
        <Form.Group controlId="user_name">
          <Form.Label className="text-white">Nom Complet</Form.Label>
          <Form.Control type="text" name="user_name" className="custom-input" required />
        </Form.Group>

        <Form.Group controlId="user_email">
          <Form.Label className="text-white">Email</Form.Label>
          <Form.Control type="email" name="user_email" className="custom-input" required />
        </Form.Group>

        <Form.Group controlId="message">
          <Form.Label className="text-white">Message</Form.Label>
          <Form.Control as="textarea" name="message" rows={4} className="custom-input" required />
        </Form.Group>

        <Button variant="primary" type="submit" className="mybut w-100 mt-3">
          Envoyer
        </Button>
      </Form>
    </Container>
  );
};

export default Service;
