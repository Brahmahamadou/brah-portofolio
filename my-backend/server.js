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

  console.log('Form data received:', { firstName, email, type, comment });

  res.json({ type: 'success', message: 'Form submitted successfully!' });
});

// Route to handle sending email notifications
app.post('/send-email', async (req, res) => {
  const { firstName, email, type, comment, recipientEmail } = req.body;

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  let mailOptions = {
    from: process.env.EMAIL_USER,
    to: recipientEmail,
    subject: 'New Contact Form Submission',
    text: `Name: ${firstName}\nEmail: ${email}\nType: ${type}\nMessage: ${comment}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ type: 'success', message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.json({ type: 'error', message: `Failed to send email: ${error.message}` });
  }
});

app.get('/', (req, res) => {
  res.send('Server is running');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
