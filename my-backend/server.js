const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
require('dotenv').config(); // Charger les variables d'environnement à partir du fichier .env

const app = express();
const PORT = process.env.PORT || 5001; // Utiliser un autre port

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Route to handle form submission
app.post('/services', (req, res) => {
  const { firstName, email, type, comment } = req.body;

  // Process the form data here (e.g., save to a database, send an email, etc.)

  console.log('Form data received:', { firstName, email, type, comment });

  // Send a response back to the client
  res.json({ type: 'success', message: 'Form submitted successfully!' });
});

// Route to handle sending email notifications
app.post('/send-email', async (req, res) => {
  const { firstName, email, type, comment, recipientEmail } = req.body;

  // Configure your email transporter
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // Utiliser la variable d'environnement pour l'utilisateur
      pass: process.env.EMAIL_PASS, // Utiliser la variable d'environnement pour le mot de passe
    },
  });

  // Configure email options
  let mailOptions = {
    from: process.env.EMAIL_USER, // Utiliser la variable d'environnement pour l'email de l'expéditeur
    to: recipientEmail, // Email du destinataire
    subject: 'New Contact Form Submission',
    text: `Name: ${firstName}\nEmail: ${email}\nType: ${type}\nMessage: ${comment}`,
  };

  // Send the email
  try {
    await transporter.sendMail(mailOptions);
    res.json({ type: 'success', message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.json({ type: 'error', message: `Failed to send email: ${error.message}` });
  }
});

// Route to handle GET requests to the root URL
app.get('/', (req, res) => {
  res.send('Server is running');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
