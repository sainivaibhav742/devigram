# Devigram - Modern E-Learning Platform 🎓

A full-stack, secure e-learning platform built with React and Node.js, featuring comprehensive authentication, admin management, and enterprise-grade security.

## 🌟 Key Features

### 🚀 **Complete Application Suite**
- **🏠 Home Page**: Modern landing page with animations
- **🔐 Authentication**: Secure login/signup with JWT tokens
- **📚 Courses**: Interactive course catalog with filtering
- **🏫 Campus**: University partnership programs
- **📝 Notes**: Study materials and resources
- **📖 Blogs**: Expert insights and articles
- **👥 Hire**: Talent recruitment platform
- **💬 Counselling**: Career guidance services
- **📋 Apply**: Comprehensive application system
- **⚙️ Admin Dashboard**: Full application management

### 🛡️ **Enterprise Security (91% Security Score)**
- **JWT Authentication**: Secure token-based authentication
- **Rate Limiting**: 100 requests/15min (5 for auth endpoints)
- **Input Validation**: Comprehensive form validation & sanitization
- **NoSQL Injection Protection**: Custom MongoDB injection prevention
- **Security Headers**: Helmet.js (XSS, CSRF, clickjacking protection)
- **HTTPS Ready**: SSL certificate generation & configuration
- **CORS Security**: Origin validation and secure headers

### 🎨 **Enhanced Design & Animations**
- **Ripple Effects**: Material Design button interactions
- **Floating Elements**: Animated background shapes
- **Hover Animations**: Enhanced card interactions
- **Scroll Effects**: Dynamic navbar behavior
- **Gradient Backgrounds**: Modern visual design
- **Responsive Design**: Mobile-first approach

### ✅ Complete Sections on Home Page
- Hero section with animated code editor
- Features showcase (6 main features)
- Success stories with testimonials
- Statistics with animated counters
- Advantages section with benefits
- Alumni showcase
- Google reviews section
- "Still not sure" preview section
- Newsletter signup
- Enhanced CTA section

### 🛠️ **Full-Stack Architecture**

**Frontend:**
- **React 18**: Latest React with hooks and modern patterns
- **React Router**: Client-side routing with protected routes
- **Bootstrap 5**: Responsive framework with custom components
- **Custom CSS**: Enhanced styling with animations and themes

**Backend:**
- **Node.js & Express**: RESTful API server
- **MongoDB**: Database with Mongoose ODM
- **JWT Authentication**: Secure admin authentication system
- **Bcrypt**: Password hashing with 12-round salting
- **Express Validator**: Comprehensive input validation
- **Rate Limiting**: API protection against abuse

## 🎨 Design Enhancements

### Animation Features
- **Icon Pulse**: Breathing animation for feature icons
- **Card Hover**: Lift and shadow effects
- **Ripple Buttons**: Material design interactions
- **Floating Shapes**: Background animation elements
- **Smooth Transitions**: CSS cubic-bezier animations

### Visual Improvements
- **Gradient Overlays**: Modern background effects
- **Glass Morphism**: Backdrop blur effects
- **Enhanced Typography**: Better font hierarchy
- **Color Consistency**: Unified color scheme
- **Shadow System**: Layered depth effects

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or Atlas)
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/sainivaibhav742/devigram.git
cd devigram

# Install frontend dependencies
npm install

# Install backend dependencies
cd server
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your MongoDB URI and JWT secret

# Create admin user
npm run setup-admin
```

### Development

```bash
# Start backend server (from server directory)
npm start
# Server runs on http://localhost:5001

# Start frontend (from root directory)
npm start
# App runs on http://localhost:3000
```

### Production

```bash
# Generate SSL certificates
npm run generate-ssl

# Start production server with HTTPS
npm run prod

# Build frontend for production
npm run build
```

## 📁 Project Structure

```
devigram/
├── 📺 Frontend (React App)
│   ├── src/
│   │   ├── components/        # Reusable UI components
│   │   ├── pages/             # Page components
│   │   │   ├── AdminDashboard.js  # Admin panel
│   │   │   ├── AdminLogin.js      # Admin authentication
│   │   │   ├── Apply.js           # Application form
│   │   │   └── [other pages]
│   │   ├── styles/            # CSS files
│   │   ├── utils/             # Utility functions
│   │   ├── App.js             # Main app component
│   │   └── index.js           # Entry point
│   └── package.json           # Frontend dependencies
│
├── 🔧 Backend (Node.js API)
│   ├── controllers/           # Business logic
│   │   ├── adminController.js     # Admin operations
│   │   └── applyController.js     # Application handling
│   ├── middleware/            # Express middleware
│   │   └── authMiddleware.js      # JWT authentication
│   ├── models/                # Database models
│   │   ├── AdminModel.js          # Admin user model
│   │   └── ApplicationModel.js    # Application model
│   ├── routes/                # API routes
│   │   ├── adminRoutes.js         # Admin endpoints
│   │   └── applyRoutes.js         # Application endpoints
│   ├── scripts/               # Utility scripts
│   │   ├── createAdmin.js         # Admin user setup
│   │   └── updateAdminPassword.js # Password management
│   ├── ssl/                   # SSL certificates
│   ├── server.js              # Main server file
│   ├── https-server.js        # HTTPS server
│   ├── generate-ssl.js        # SSL generation
│   ├── package.json           # Backend dependencies
│   └── .env                   # Environment variables
│
└── 📄 Documentation
    ├── README.md              # This file
    ├── ARCHITECTURE.md        # Architecture details  
    ├── SECURITY.md            # Security guide & assessment
    ├── TROUBLESHOOTING.md     # Common issues & solutions
    └── FORM_VALIDATION.md     # Form validation rules
```

## 🎯 Key Features

### Interactive Elements
- **Course Filtering**: Dynamic category filtering
- **Form Validation**: Real-time form feedback
- **Loading States**: Button loading animations
- **Password Toggle**: Show/hide password
- **Responsive Navigation**: Mobile-friendly menu

### Performance Optimizations
- **Component Splitting**: Modular architecture
- **CSS Optimization**: Efficient styling
- **Image Optimization**: Responsive images
- **Bundle Optimization**: React Scripts optimization

## 🔗 API Endpoints

### Authentication
```
POST /admin/login          # Admin login
GET  /admin/verify         # Verify JWT token
```

### Applications
```
POST /apply                # Submit application
GET  /apply                # Get all applications (admin only)
```

### Default Admin Credentials
```
Username: admin
Password: admin123
```
🔒 **For production**: Run `npm run update-admin-password` to generate a secure password

## 🌟 Design Highlights

### Modern UI/UX
- **Clean Layout**: Minimalist design approach
- **Consistent Spacing**: Systematic spacing scale
- **Accessible Colors**: WCAG compliant color scheme
- **Interactive Feedback**: Visual response to user actions
- **Professional Typography**: Readable font hierarchy

### Animation System
- **Micro-interactions**: Subtle hover effects
- **Page Transitions**: Smooth navigation
- **Loading Animations**: Engaging wait states
- **Scroll Animations**: Progressive disclosure
- **Button Effects**: Material design ripples

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Tablet Support**: Perfect tablet experience
- **Desktop Enhanced**: Rich desktop interactions
- **Cross-browser**: Compatible with all modern browsers

## 🔧 Customization

The design system uses CSS custom properties for easy theming:

```css
:root {
  --primary-500: #0ea5e9;
  --primary-600: #0284c7;
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
  --radius-xl: 1.5rem;
  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
```

## 🛡️ Security Features

- **🔐 JWT Authentication**: Secure admin authentication with environment-based secrets
- **⏱️ Rate Limiting**: Protection against brute force attacks (100/15min, 5/15min for auth)
- **🛡️ Input Validation**: Comprehensive validation and sanitization
- **🚫 NoSQL Injection Protection**: Custom middleware preventing MongoDB injection
- **📜 Security Headers**: Helmet.js providing XSS, CSRF, and clickjacking protection
- **🔒 HTTPS Ready**: SSL certificate generation and secure server configuration
- **🌐 CORS Security**: Origin validation and secure cross-origin requests

**Security Score: 91% (HIGH)** 🛡️

## 🚀 Deployment

### Environment Variables

**Backend (.env)**:
```env
PORT=5001
HTTPS_PORT=5443
MONGO_URI=mongodb://localhost:27017/devigram
JWT_SECRET=your_super_secure_jwt_secret_change_this_in_production
JWT_EXPIRES_IN=7d
NODE_ENV=development
```

**Frontend (.env)**:
```env
REACT_APP_API_URL=http://localhost:5001
REACT_APP_ENVIRONMENT=development
REACT_APP_VERSION=1.0.0
```

### Production Checklist

- [ ] Update JWT_SECRET with a strong, unique value
- [ ] Generate secure admin password: `npm run update-admin-password`
- [ ] Configure production CORS origins
- [ ] Generate SSL certificates: `npm run generate-ssl`
- [ ] Set NODE_ENV=production
- [ ] Use HTTPS: `npm run prod`

## 📈 Performance & Optimization

- **Component Splitting**: Modular architecture for better tree-shaking
- **Lazy Loading**: Code splitting for optimal loading
- **Security Optimizations**: Rate limiting and input validation
- **Database Optimization**: Connection pooling and timeout configuration
- **Bundle Optimization**: React Scripts with custom optimizations

## 📚 Documentation

- **SECURITY.md**: Complete security guide with 91% security assessment
- **TROUBLESHOOTING.md**: Common issues and solutions
- **FORM_VALIDATION.md**: Form validation rules reference
- **ARCHITECTURE.md**: Technical architecture details

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Built with ❤️ by the Devigram team**

*A modern, secure, full-stack e-learning platform with enterprise-grade security and beautiful user experience.*
