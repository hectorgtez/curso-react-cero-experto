const express = require('express');
require('dotenv').config();

// Create express server
const app = express();

// Public
app.use(express.static('public'));

// Body read and parse
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));

// Listen requests
app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${ process.env.PORT }`);
});