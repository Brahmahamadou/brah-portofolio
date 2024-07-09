import React, { useRef, useState, useEffect } from 'react';
import emailjs from 'emailjs-com'; // Importez emailjs-com au lieu de @emailjs/browser
import { Container, Form, Button, Alert, Spinner } from 'react-bootstrap';
import './Services.css';

export const Service = () => {
  const form = useRef();
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!form.current.user_name.value) {
      newErrors.user_name = 'Veuillez entrer votre nom.';
    }
    if (!form.current.user_email.value) {
      newErrors.user_email = 'Veuillez entrer une adresse email valide.';
    } else if (!/\S+@\S+\.\S+/.test(form.current.user_email.value)) {
      newErrors.user_email = 'Veuillez entrer une adresse email valide.';
    }
    if (!form.current.message.value) {
      newErrors.message = 'Veuillez entrer un message.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    emailjs
      .sendForm(
        'service_yzyoxsq',
        'template_psmxr7n',
        form.current,
        'GCFAu0S5sj1EcTdxQ'
      )
      .then(
        (result) => {
          setResponse({ type: 'success', message: 'Email envoyé avec succès!' });
          console.log('SUCCESS!', result.text);
        },
        (error) => {
          setResponse({ type: 'error', message: 'Erreur lors de l\'envoi de l\'email.' });
          console.log('ÉCHEC...', error.text);
        }
      );

    setIsLoading(false);
    e.target.reset();
  };

  useEffect(() => {
    if (response) {
      const timer = setTimeout(() => {
        setResponse(null);
      }, 5000); // Le message d'alerte disparaît après 5 secondes
      return () => clearTimeout(timer);
    }
  }, [response]);

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">Contactez-nous</h2>
      {response && <Alert variant={response.type === 'success' ? 'success' : 'danger'}>{response.message}</Alert>}
      <Form ref={form} onSubmit={sendEmail} className="custom-form">
        <Form.Group controlId="user_name">
          <Form.Label className="text-white">Nom Complet</Form.Label>
          <Form.Control
            type="text"
            name="user_name"
            className={`custom-input ${errors.user_name ? 'is-invalid' : ''}`}
            isInvalid={!!errors.user_name}
          />
          <Form.Control.Feedback type="invalid">
            {errors.user_name}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="user_email">
          <Form.Label className="text-white">Email</Form.Label>
          <Form.Control
            type="email"
            name="user_email"
            className={`custom-input ${errors.user_email ? 'is-invalid' : ''}`}
            isInvalid={!!errors.user_email}
          />
          <Form.Control.Feedback type="invalid">
            {errors.user_email}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="message">
          <Form.Label className="text-white">Message</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            rows={4}
            className={`custom-input ${errors.message ? 'is-invalid' : ''}`}
            isInvalid={!!errors.message}
          />
          <Form.Control.Feedback type="invalid">
            {errors.message}
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit" className="mybut w-100 mt-3" disabled={isLoading}>
          {isLoading ? <Spinner animation="border" size="sm" /> : 'Envoyer'}
        </Button>
      </Form>
    </Container>
  );
};

export default Service;
