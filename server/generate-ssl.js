const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Create SSL directory if it doesn't exist
const sslDir = path.join(__dirname, 'ssl');
if (!fs.existsSync(sslDir)) {
  fs.mkdirSync(sslDir);
}

console.log('Generating self-signed SSL certificates for development...');

try {
  // Generate private key
  execSync('openssl genrsa -out ssl/private-key.pem 2048', { cwd: __dirname });
  
  // Generate certificate
  execSync(`openssl req -new -x509 -key ssl/private-key.pem -out ssl/certificate.pem -days 365 -subj "/C=US/ST=State/L=City/O=Organization/CN=localhost"`, { cwd: __dirname });
  
  console.log('SSL certificates generated successfully!');
  console.log('Files created:');
  console.log('- ssl/private-key.pem');
  console.log('- ssl/certificate.pem');
  console.log('\nNote: These are self-signed certificates for development only.');
  console.log('For production, use certificates from a trusted CA like Let\'s Encrypt.');
  
} catch (error) {
  console.error('Error generating SSL certificates:', error.message);
  console.log('\nAlternative: You can generate certificates manually:');
  console.log('1. Install OpenSSL');
  console.log('2. Run: openssl genrsa -out ssl/private-key.pem 2048');
  console.log('3. Run: openssl req -new -x509 -key ssl/private-key.pem -out ssl/certificate.pem -days 365');
}