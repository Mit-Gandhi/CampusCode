const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables from a .env file
dotenv.config();

// Middleware
app.use(cors());
app.use(express.json());

// Define a simple route
app.get('/', (req, res) => {
    res.send('Hello from the Express server!');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});