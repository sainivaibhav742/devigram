# Troubleshooting Guide

## Issues Fixed

### ✅ Admin Login Not Working
**Problem**: Admin login was failing with "Invalid credentials"
**Solution**: 
- Recreated admin user with fresh credentials
- Fixed middleware conflicts

### ✅ Apply Form Submission Failing
**Problem**: Application form submission was not working
**Solution**: 
- Fixed express-mongo-sanitize middleware conflict
- Corrected API endpoint configuration

### ✅ Server Configuration Issues
**Problems**: 
- MongoDB connection warnings
- CORS configuration errors
- Frontend API URL mismatch

**Solutions**:
- Removed deprecated MongoDB connection options
- Simplified CORS configuration
- Fixed frontend .env file API URL

## Current Working Configuration

### Admin Credentials
- **Username**: `admin`
- **Password**: `admin123`
- **Email**: `admin@devigram.com`

### API Endpoints
- **Server**: `http://localhost:5001`
- **Admin Login**: `POST /admin/login`
- **Apply Form**: `POST /apply`
- **Get Applications**: `GET /apply` (requires admin auth)

### Environment Configuration

#### Frontend (.env)
```
REACT_APP_API_URL=http://localhost:5001
REACT_APP_ENVIRONMENT=development
REACT_APP_VERSION=1.0.0
```

#### Server (.env)
```
PORT=5001
HTTPS_PORT=5443
MONGO_URI=mongodb://localhost:27017/devigram
JWT_SECRET=your_super_secure_jwt_secret_change_this_in_production_12345
JWT_EXPIRES_IN=7d
NODE_ENV=development
```

## How to Start the Application

### 1. Start MongoDB
Ensure MongoDB is running on your system

### 2. Start Server
```bash
cd server
npm start
```

### 3. Start Frontend
```bash
cd ..
npm start
```

## Testing the Application

### Test Admin Login
```powershell
Invoke-RestMethod -Uri "http://localhost:5001/admin/login" -Method POST -Headers @{"Content-Type"="application/json"} -Body '{"username":"admin","password":"admin123"}'
```

### Test Apply Form
```powershell
Invoke-RestMethod -Uri "http://localhost:5001/apply" -Method POST -Headers @{"Content-Type"="application/json"} -Body '{"firstName":"John","lastName":"Doe","email":"john@example.com","program":"Web Development","agreeTerms":true}'
```

## Common Issues & Solutions

### 1. "Cannot connect to server"
- Check if server is running: `netstat -an | findstr :5001`
- Restart server: `npm start`

### 2. "CORS error"
- Ensure frontend is running on `localhost:3000`
- Check CORS configuration in `server.js`

### 3. "Invalid credentials"
- Recreate admin user: `npm run setup-admin`
- Use correct credentials: admin/admin123

### 4. "MongoDB connection error"
- Ensure MongoDB is running
- Check MONGO_URI in server/.env

### 5. Frontend API calls failing
- Check REACT_APP_API_URL in .env
- Ensure it points to `http://localhost:5001`

## Known Issues

1. **express-mongo-sanitize**: Temporarily disabled due to compatibility issues with current Express version
2. **validator package**: Has a moderate security vulnerability (no fix available)

## Monitoring and Logs

### Server Logs
Check console output when starting the server for:
- MongoDB connection status
- Port binding confirmation
- Any middleware errors

### Browser Developer Tools
- Check Network tab for API call status
- Look for CORS errors in Console
- Verify request/response data

## Production Deployment Notes

1. Change JWT_SECRET to a strong, unique value
2. Update CORS origins to match production domains  
3. Enable HTTPS with proper certificates
4. Monitor rate limiting logs
5. Implement proper logging and error tracking