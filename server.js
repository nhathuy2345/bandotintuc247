// simple Express server that serves static files and exposes API keys from .env
// install dependencies with: npm init -y && npm install express dotenv

require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// serve all files in the project root (index.html, weather.html, etc.)
app.use(express.static(path.join(__dirname, '/')));

// endpoint that returns the keys (never expose .env directly)
app.get('/config', (req, res) => {
  res.json({
    openWeather: process.env.OPENWEATHER_API_KEY || '',
    googleMaps: process.env.GOOGLE_MAPS_API_KEY || ''
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
