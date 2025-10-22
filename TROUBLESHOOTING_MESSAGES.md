# Troubleshooting: Messages Not Loading

## Issue
Admin panel messages section is not loading applications.

---

## Quick Fixes

### 1. **Check if Backend Server is Running**

**Symptoms:**
- "Failed to load applications" error
- Console shows network error or fetch failed

**Solution:**
```bash
# Open a terminal in the server directory
cd D:\-git\devigram\server

# Start the server
npm start
```

The server should start on `http://localhost:5001`

Look for output like:
```
Server running on port 5001
MongoDB connected successfully
```

---

### 2. **Check MongoDB Connection**

**Symptoms:**
- Server starts but shows MongoDB connection error
- Can't retrieve applications

**Solution:**

Check `server/.env` file:
```env
MONGO_URI=mongodb://localhost:27017/devigram
# Or if using MongoDB Atlas:
# MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/devigram
```

Make sure MongoDB is running:
- **Local MongoDB**: Start MongoDB service
- **MongoDB Atlas**: Check internet connection

---

### 3. **Check Admin Authentication**

**Symptoms:**
- 401 Unauthorized error
- Automatically redirected to login

**Solution:**
1. Login again at `/admin-login`
2. Check browser console for token errors
3. Verify admin credentials are correct

---

### 4. **Check Browser Console**

Open browser DevTools (F12) and check the Console tab for:

**Expected logs when loading messages:**
```
Fetching applications from: http://localhost:5001/apply
Token: Present
Response status: 200
Applications loaded: X
```

**Common errors:**

#### Error: "Failed to fetch"
- Server is not running
- Wrong port number
- CORS issue

#### Error: "401 Unauthorized"
- Token expired or invalid
- Need to login again

#### Error: "500 Internal Server Error"
- Database connection issue
- Server-side error (check server logs)

---

## Step-by-Step Debugging

### Step 1: Verify Server is Running

1. Open terminal in `server` directory
2. Run `npm start`
3. Check for success message

### Step 2: Test API Directly

Open a new browser tab and try:
```
http://localhost:5001/apply
```

You should see:
- 401 error (expected - no token)
- Or JSON data if you're logged in

If you see "Cannot GET /apply" - server is running but route might be wrong.

### Step 3: Check Network Tab

1. Open DevTools (F12)
2. Go to Network tab
3. Click Messages in admin panel
4. Look for `/apply` request
5. Check:
   - Status code
   - Response
   - Headers (Authorization should be present)

### Step 4: Verify Data Exists

Check if there are applications in the database:

1. Open MongoDB Compass or Mongo shell
2. Connect to your database
3. Check `applications` collection
4. Verify documents exist

---

## Port Issues

### If server is running on a different port:

1. Check `server/.env` for PORT setting
2. Update `AdminDashboard.js` line 66:
   ```javascript
   const res = await fetch("http://localhost:YOUR_PORT/apply", {
   ```

### Default ports:
- Backend: `5001`
- Frontend: `3000`

---

## CORS Issues

If you see CORS error in console:

**Solution:** Check `server/server.js` has CORS enabled:
```javascript
const cors = require('cors');
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));
```

---

## Quick Test Commands

### Test if server responds:
```bash
# In PowerShell or CMD
curl http://localhost:5001/apply
```

### Check if MongoDB is running:
```bash
# For local MongoDB
mongod --version

# Check connection
mongo --eval "db.version()"
```

---

## Still Not Working?

### Check These Files

1. **server/routes/applyRoutes.js**
   - Verify route exists
   - Check if authentication middleware is correct

2. **server/server.js**
   - Verify CORS is configured
   - Check if routes are mounted correctly

3. **Browser Console**
   - Look for any red error messages
   - Check Network tab for failed requests

4. **Server Console**
   - Look for error messages
   - Check if requests are reaching the server

---

## Enhanced Debugging

I've added console logs to help debug. Check browser console for:

```javascript
Fetching applications from: http://localhost:5001/apply
Token: Present  // or Missing
Response status: 200
Applications loaded: 5  // Number of applications
```

These logs will help identify exactly where the issue is.

---

## Common Solutions Summary

| Problem | Solution |
|---------|----------|
| Server not running | `cd server && npm start` |
| Wrong port | Update fetch URL in AdminDashboard.js |
| MongoDB not connected | Start MongoDB or check connection string |
| Token expired | Login again |
| CORS error | Enable CORS in server.js |
| No applications | Add test data to database |

---

## Test Data

If database is empty, you can test by submitting an application through the `/apply` page.

---

## Contact

If issue persists after trying all solutions:
1. Check browser console for errors
2. Check server terminal for errors
3. Verify all files are saved
4. Restart both frontend and backend
5. Clear browser cache and try again

---

## Success Indicators

When everything works, you should see:
- ✅ No errors in browser console
- ✅ No errors in server console
- ✅ Messages section shows applications or "No applications yet"
- ✅ Notification: "Loaded X applications"
- ✅ Search box is functional
- ✅ Refresh button works
