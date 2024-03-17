const express = require('express');

const app = express();
const port = 3000;

// Set up routes
app.get('/', (req, res) => {
    res.send('Hello, world!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});