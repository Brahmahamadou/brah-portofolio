import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import { Container, Form, Button, Col, Row, Spinner, Alert } from 'react-bootstrap';
import * as Yup from 'yup';
import './Services.css'; 

const ContactMeSection = () => {
  const [response, setResponse] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  const formik = useFormik({
    initialValues: {
      firstName: '',
      email: '',
      type: 'hireMe',
      comment: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      type: Yup.string().required('Required'),
      comment: Yup.string().required('Required'),
    }),
    onSubmit: async (values) => {
      setIsLoading(true);
      try {
        const response = await fetch('http://localhost:5001/services', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        });
        const data = await response.json();
        setResponse(data);
        if (data.type === 'success') {
          formik.resetForm();
          sendEmailNotification(values); // Appel de la fonction pour envoyer l'e-mail
        }
      } catch (error) {
        setResponse({ type: 'error', message: 'Something went wrong' });
      }
      setIsLoading(false);
    },
  });

  const sendEmailNotification = async (formData) => {
    try {
      const emailResponse = await fetch('http://localhost:5001/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          recipientEmail: 'mahamadoubrah672@gmail.com', // Remplacez par votre adresse e-mail
        }),
      });
      const emailData = await emailResponse.json();
      console.log('Email notification response:', emailData);
    } catch (error) {
      console.error('Failed to send email notification:', error);
    }
  };

  useEffect(() => {
    if (response) {
      // Vous pouvez ajouter ici une logique d'alerte ou de notification pour l'utilisateur
      alert(response.message);
    }
  }, [response]);

  return (
    <Container className="py-5" style={{ backgroundColor: '#1E1E1F' }}>
      <Row className="justify-content-center">
        <Col md={8}>
          <h1 className="text-center text-white mb-4">Contact me</h1>
          {response && <Alert variant={response.type}>{response.message}</Alert>}
          <Form onSubmit={formik.handleSubmit}>
            <Form.Group controlId="firstName">
              <Form.Label className="text-white">Name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                className="custom-input"
                {...formik.getFieldProps('firstName')}
                isInvalid={formik.touched.firstName && !!formik.errors.firstName}
              />
              <Form.Control.Feedback type="invalid">
                {formik.touched.firstName && formik.errors.firstName}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label className="text-white">Email Address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                className="custom-input"
                {...formik.getFieldProps('email')}
                isInvalid={formik.touched.email && !!formik.errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {formik.touched.email && formik.errors.email}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="type">
              <Form.Label className="text-white">Type of enquiry</Form.Label>
              <Form.Control
                as="select"
                name="type"
                className="custom-input"
                {...formik.getFieldProps('type')}
                isInvalid={formik.touched.type && !!formik.errors.type}
              >
                <option value="hireMe">Freelance project proposal</option>
                <option value="other">Other</option>
              </Form.Control>
              <Form.Control.Feedback type="invalid">
                {formik.touched.type && formik.errors.type}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="comment">
              <Form.Label className="text-white">Your message</Form.Label>
              <Form.Control
                as="textarea"
                name="comment"
                rows={5}
                className="custom-input"
                {...formik.getFieldProps('comment')}
                isInvalid={formik.touched.comment && !!formik.errors.comment}
              />
              <Form.Control.Feedback type="invalid">
                {formik.touched.comment && formik.errors.comment}
              </Form.Control.Feedback>
            </Form.Group>
            <Button
              type="submit"
              className="mybut w-100 mt-3"
              disabled={isLoading}
            >
              {isLoading ? <Spinner animation="border" size="sm" /> : 'Submit'}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactMeSection;
