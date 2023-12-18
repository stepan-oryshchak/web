const express = require('express');
const projectorRouter = require('./projector.routes');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const PORT = process.env.PORT || 8080;
const app = express();

// Middleware
app.use(bodyParser.json()); // Parse incoming request bodies
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(express.static(__dirname)); // Serve static files from the current directory

// Routes
app.use('/api', projectorRouter); // Projector-related routes

// Root endpoint - Send the index.html file
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html')); // Assuming index.html is present in the root directory
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});
