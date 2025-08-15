const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse JSON request bodies

const PORT = process.env.PORT || 5000; // Define the port to run the server

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected')).catch(err => console.log(err));

// Basic route
app.get('/', (req, res) => {
    res.send('Welcome to the Agile Sprint Tracker API!'); // Send welcome message
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack); // Log the error stack to console
    res.status(500).send('Something went wrong!'); // Send error response
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`); // Log server start message
});