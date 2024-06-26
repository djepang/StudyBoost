const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const path = require('path');

dotenv.config();

const app = express();
app.use(express.json());

const secretKey = process.env.JWT_SECRET;
const PORT = process.env.PORT || 8080;

mongoose.connect(process.env.connection_string, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Successfully connected to MongoDB.');
}).catch(err => {
  console.error('MongoDB connection error:', err);
});

// Import User model
const User = require(path.join(__dirname, 'models', 'User'));

// Benutzerregistrierung
app.post('/api/register', async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    // Überprüfen, ob die E-Mailadresse bereits verwendet wird
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ error: 'User already exists' });
    }

    // Wenn nicht, neuen Benutzer erstellen
    user = new User({
      firstName,
      lastName,
      email,
      password,
    });

    // Passwort verschlüsseln
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    // Benutzer in die Datenbank speichern
    await user.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.error('User registration error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Benutzerlogin
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Überprüfen, ob die E-Mailadresse existiert
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Passwort vergleichen
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // JWT-Token erstellen und zurückgeben
    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(payload, secretKey, { expiresIn: '1h' }, (err, token) => {
      if (err) throw err;
      res.json({ token });
    });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

app.post('/api/google-login', async (req, res) => {
  const { tokenId } = req.body;

  try {
    const ticket = await client.verifyIdToken({
      idToken: tokenId,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    const payload = ticket.getPayload();
    const { email, name, sub } = payload;

    let user = await User.findOne({ email });
    if (!user) {
      user = new User({
        firstName: name.split(' ')[0],
        lastName: name.split(' ')[1],
        email,
        googleId: sub,
      });
      await user.save();
    }

    const token = jwt.sign({ userId: user._id }, secretKey, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    console.error('Google login error:', error);
    res.status(500).json({ error: 'Google login failed' });
  }
});