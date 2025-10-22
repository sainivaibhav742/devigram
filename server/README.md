# DevIgram Server

## Overview
Backend API server for DevIgram application with MongoDB Atlas integration, JWT authentication, and production security features.

## Features
- **MongoDB Atlas Integration**: Cloud database connection with secure authentication
- **JWT Authentication**: Secure admin authentication system
- **Rate Limiting**: API protection with configurable rate limits
- **Input Sanitization**: MongoDB injection protection
- **CORS Configuration**: Cross-origin resource sharing setup
- **Security Headers**: Helmet.js security middleware
- **Production Ready**: Environment-based configuration

## API Endpoints

### Public Endpoints
- `POST /apply` - Submit application (with validation)

### Admin Endpoints (Protected)
- `POST /admin/login` - Admin login
- `GET /admin/verify` - Verify JWT token
- `GET /apply` - Get all applications (admin only)

## Environment Configuration

Create a `.env` file with the following variables:

```env
PORT=5001
HTTPS_PORT=5443
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/database?retryWrites=true&w=majority
JWT_SECRET=your_super_secure_jwt_secret_key
JWT_EXPIRES_IN=7d
NODE_ENV=production
ADMIN_USERNAME=admin
ADMIN_PASSWORD=secure_admin_password
ADMIN_EMAIL=admin@devigram.com
CORS_ORIGIN=https://yourdomain.com,https://www.yourdomain.com
RATE_LIMIT_MAX=100
RATE_LIMIT_WINDOW_MS=900000
AUTH_RATE_LIMIT_MAX=5
SECURE_COOKIES=true
```

## Installation & Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Configure Environment**
   - Copy `.env.example` to `.env`
   - Update MongoDB Atlas connection string with your credentials
   - Set secure JWT secret and admin credentials

3. **Create Admin User**
   ```bash
   npm run setup-admin
   ```

4. **Start Development Server**
   ```bash
   npm run dev
   ```

5. **Start Production Server**
   ```bash
   npm start
   ```

## MongoDB Atlas Setup

1. **Create MongoDB Atlas Account**
   - Sign up at [MongoDB Atlas](https://cloud.mongodb.com/)
   - Create a new cluster

2. **Database Access**
   - Create database user with read/write permissions
   - Note the username and password for `.env` file

3. **Network Access**
   - Add IP addresses that need access
   - For development, you can use `0.0.0.0/0` (not recommended for production)

4. **Connection String**
   - Get connection string from Atlas dashboard
   - Replace `<password>` with your database user password
   - URL encode special characters in password

## Deployment

### Vercel Deployment

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy to Preview**
   ```bash
   npm run deploy:preview
   ```

4. **Deploy to Production**
   ```bash
   npm run deploy
   ```

### Environment Variables in Vercel

Add the following environment variables in your Vercel dashboard:

- `MONGO_URI` - Your MongoDB Atlas connection string
- `JWT_SECRET` - Your JWT secret key
- `JWT_EXPIRES_IN` - Token expiration (e.g., 7d)
- `NODE_ENV` - Set to `production`
- `ADMIN_USERNAME` - Admin username
- `ADMIN_PASSWORD` - Admin password
- `ADMIN_EMAIL` - Admin email
- `CORS_ORIGIN` - Comma-separated list of allowed origins
- `RATE_LIMIT_MAX` - Maximum requests per window
- `RATE_LIMIT_WINDOW_MS` - Rate limit window in milliseconds
- `AUTH_RATE_LIMIT_MAX` - Max auth attempts per window

## Security Features

- **Rate Limiting**: Configurable per endpoint
- **Input Sanitization**: Protection against MongoDB injection
- **CORS**: Configurable allowed origins
- **Helmet**: Security headers
- **JWT Authentication**: Secure token-based auth
- **Password Hashing**: bcryptjs for password security

## Available Scripts

- `npm start` - Start production server
- `npm run dev` - Start development server
- `npm run setup-admin` - Create admin user
- `npm run update-admin-password` - Update admin password
- `npm run security-audit` - Run security audit
- `npm run deploy` - Deploy to production (Vercel)
- `npm run deploy:preview` - Deploy preview (Vercel)

## Troubleshooting

### MongoDB Connection Issues
1. Check connection string format
2. Verify database user credentials
3. Check network access settings in Atlas
4. Ensure IP is whitelisted

### Authentication Issues
1. Verify JWT_SECRET is set
2. Check admin user exists in database
3. Verify password hash is correct

### CORS Issues
1. Check CORS_ORIGIN environment variable
2. Verify frontend URL is included in allowed origins

## Contributing

1. Fork the repository
2. Create feature branch
3. Make changes with proper testing
4. Submit pull request

## License

Private repository - All rights reserved