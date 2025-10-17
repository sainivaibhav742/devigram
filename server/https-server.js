const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

// Import the Express app
const app = require('./server-app'); // We'll extract the app logic

const PORT = process.env.PORT || 5001;
const HTTPS_PORT = process.env.HTTPS_PORT || 5443;

// HTTPS configuration
const httpsOptions = {
  key: fs.readFileSync(path.join(__dirname, 'ssl', 'private-key.pem')),
  cert: fs.readFileSync(path.join(__dirname, 'ssl', 'certificate.pem'))
};

// Create HTTPS server
const httpsServer = https.createServer(httpsOptions, app);

// Create HTTP server for redirects
const httpApp = require('express')();
httpApp.use((req, res) => {
  res.redirect(301, `https://${req.headers.host.split(':')[0]}:${HTTPS_PORT}${req.url}`);
});

const httpServer = http.createServer(httpApp);

// Start servers
if (process.env.NODE_ENV === 'production') {
  // In production, use HTTPS
  httpsServer.listen(HTTPS_PORT, () => {
    console.log(`HTTPS Server running on port ${HTTPS_PORT}`);
  });
  
  // HTTP server for redirects
  httpServer.listen(PORT, () => {
    console.log(`HTTP Server running on port ${PORT} (redirecting to HTTPS)`);
  });
} else {
  // In development, use HTTP
  const httpDevServer = http.createServer(app);
  httpDevServer.listen(PORT, () => {
    console.log(`Development Server running on port ${PORT}`);
    console.log('Running in development mode (HTTP)');
  });
}