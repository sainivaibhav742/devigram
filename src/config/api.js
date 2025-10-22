// API Configuration for different environments
const API_CONFIG = {
  development: {
    apiUrl: process.env.REACT_APP_API_URL || 'http://localhost:5001',
  },
  production: {
    apiUrl: 'https://server-ruby-zeta-76.vercel.app',
  },
};

const environment = process.env.REACT_APP_ENVIRONMENT || 'development';

export const API_URL = API_CONFIG[environment].apiUrl;

export const API_ENDPOINTS = {
  apply: `${API_URL}/apply`,
  adminLogin: `${API_URL}/admin/login`,
  adminApplications: `${API_URL}/apply`,
};

export default API_URL;
