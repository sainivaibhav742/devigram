# Local Development Setup

This guide will help you set up Devigram for local development.

## Prerequisites

- Node.js (v16 or higher)
- MongoDB (local installation or MongoDB Atlas account)
- Git

## Setup Instructions

### 1. Clone and Install Dependencies

```bash
# Install frontend dependencies
npm install

# Install server dependencies
cd server
npm install
```

### 2. Configure Environment Variables

#### Frontend Configuration

Copy the example environment file:
```bash
cp .env.example .env.local
```

The `.env.local` file should contain:
```env
REACT_APP_API_URL=http://localhost:5001
REACT_APP_ENVIRONMENT=development
REACT_APP_VERSION=1.0.0
```

#### Server Configuration

Create a `.env` file in the server directory:
```bash
cd server
cp .env.example .env
```

Update the `server/.env` file with your configuration:
```env
PORT=5001
MONGO_URI=mongodb://localhost:27017/devigram
NODE_ENV=development
CORS_ORIGIN=http://localhost:3000,http://localhost:3001
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX=100
AUTH_RATE_LIMIT_MAX=5
```

**MongoDB Options:**
- **Local MongoDB:** `mongodb://localhost:27017/devigram`
- **MongoDB Atlas:** `mongodb+srv://username:password@cluster.mongodb.net/devigram`

### 3. Start Development Servers

#### Option 1: Using separate terminals

**Terminal 1 - Frontend:**
```bash
npm start
```
Frontend will run at: http://localhost:3000

**Terminal 2 - Backend:**
```bash
cd server
node server.js
```
Backend will run at: http://localhost:5001

#### Option 2: Using concurrently (if configured)

```bash
npm run dev
```

## API Endpoints

The application automatically uses the correct API endpoints based on the environment:

- **Development:** `http://localhost:5001`
- **Production:** `https://server-ruby-zeta-76.vercel.app`

## Testing the Setup

1. Open http://localhost:3000 in your browser
2. Navigate to the "Apply Now" page
3. Fill out and submit the application form
4. Check your server logs to verify the data is being received

## Common Issues

### Port Already in Use

If port 3000 or 5001 is already in use:

```bash
# Frontend (change in package.json or use PORT env variable)
PORT=3001 npm start

# Backend (change in server/.env)
PORT=5002
```

### MongoDB Connection Error

- Ensure MongoDB is running locally or your Atlas connection string is correct
- Check firewall settings
- Verify network access in MongoDB Atlas dashboard

### CORS Issues

Make sure your `server/.env` includes the correct frontend URL:
```env
CORS_ORIGIN=http://localhost:3000
```

## Development Workflow

1. Make changes to the code
2. Frontend auto-reloads with hot module replacement
3. Backend requires manual restart (or use nodemon)
4. Test changes in browser

## Building for Production

```bash
# Build frontend
npm run build

# The build folder will contain production-ready files
```

## Additional Commands

```bash
# Run tests
npm test

# Format code
npm run format

# Lint code
npm run lint
```

## Need Help?

If you encounter any issues, please:
1. Check the console for error messages
2. Verify all environment variables are set correctly
3. Ensure all dependencies are installed
4. Check that MongoDB is running
