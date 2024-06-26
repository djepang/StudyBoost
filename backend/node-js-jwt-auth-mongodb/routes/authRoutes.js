const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Pfade je nach Ihrer Ordnerstruktur anpassen

const router = express.Router();

// Route für die Benutzerregistrierung
router.post('/register', async (req, res) => {
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

    // Passwort verschlüsseln (z.B. mit bcrypt)
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

module.exports = router;
