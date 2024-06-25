const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');

const { MONGO_URI } = require('./config');
const mongoose = require('mongoose'); // Add this line to require mongoose
const authRoutes = require('./routes/auth'); // Import auth routes

dotenv.config({ path: '.env' }); // Load environment variables

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cookieParser());

// Configure CORS (adjust origins as needed)
const corsOptions = {

  origin: '*',// Allow all origins
 
};

app.use(cors(corsOptions));

// Parse incoming JSON data
app.use(express.json());

// Your routes and application logic go here
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to your best StudyBoost application of World!' });
});

app.use('/api/auth', authRoutes);


// Connect to MongoDB
const uri = process.env.connection_string; // Use the MONGODB_URI environment variable
mongoose.connect(uri, {
  useNewUrlParser: true,
useUnifiedTopology: true,
})
  .then(() => console.log('Successfully connected to MongoDB.'))
  .catch(err => {
    console.error('Connection error:', err);
    process.exit(); // Exit on connection error
  });

 // Routen
app.use('/auth', authRoutes); 


//Route Register
app.post('/api/auth/signup', (req, res) => {
  const { Username ,email, password } = req.body;

  // Einfache Überprüfung für Register
  if (Username === 'studyboost' && email === 'studybooststudyboost@gmail.com' && password === 'studyboost123') {
    res.json({ message: 'Register successful', token: 'generated-token' });
  } else {
    res.status(401).json({ message: 'Register failed. Invalid credentials.' });
  }
});



//Route Login
app.post('/api/auth/signin', (req, res) => {
  const { email, password } = req.body;

  // Einfache Überprüfung für Login
  if (email === 'studybooststudyboost@gmail.com' && password === 'studyboost123') {
    res.json({ message: 'Login successful', token: 'generated-token' });
  } else {
    res.status(401).json({ message: 'Login failed. Invalid credentials.' });
  }
});

const PORT = process.env.PORT ||8080

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});


