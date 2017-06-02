const express = require('express');
const path = require('path');

// Create the Application Entry Point
const port = process.env.PORT || 3000;
let app = express();

// Expose the Public Directory
app.use(express.static(__dirname + '/public'));

// Wildcard Route Handling
app.get('*', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

// Open the Port
app.listen(port, () => {
    console.log(`Express server is running on port: ${port}`);
});
