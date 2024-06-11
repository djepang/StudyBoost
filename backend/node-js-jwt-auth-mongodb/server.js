const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose'); // Add this line to require mongoose
const authRoutes = require('./app/routes/authRoutes');

dotenv.config({ path: '.env' }); // Load environment variables

const app = express();
const PORT = process.env.PORT || 8080; // Use environment variable for port or default to 8080

// Configure CORS (adjust origins as needed)
const corsOptions = {

  origin: 'http://localhost:3000',//allow to connect with my Frontend
  origin: 'http://localhost:8081', // Replace with your frontend origin if applicable
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

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});


