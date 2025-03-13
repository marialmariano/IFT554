const express = require('express');
const loggerMiddleware = require('./loggerMiddleware'); // Import the middleware

const app = express();

// Use the middleware
app.use(loggerMiddleware);

app.get('/', (req, res) => {
    res.send('Hello, World! Middleware is working.');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});