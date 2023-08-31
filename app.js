// Import necessary modules
const express = require('express');

// Create an instance of the Express application
const app = express();

// Define a route for the homepage
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Set up a static file server to serve CSS and other assets
app.use(express.static(__dirname + '/public'));

// Start the server on port 3000
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
