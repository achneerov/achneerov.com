// server.js
const express = require('express');
const app = express();
const port = 3000; // You can use any available port

app.use(express.static('public')); // Assuming your HTML, CSS, and JS files are in a 'public' folder

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
