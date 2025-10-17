# Form Validation Rules

## Apply Form (/apply)

### ✅ **Fixed Validation Issues**
- **agreeTerms**: Now accepts both `true` (boolean) and `"true"` (string)
- **program**: Accepts any non-empty string (2-100 characters)
- **phone**: More flexible phone validation (10-15 digits with formatting)

### 📋 **Current Validation Rules**

#### **Required Fields**
```javascript
firstName: {
  type: "string",
  minLength: 2,
  maxLength: 50,
  pattern: /^[a-zA-Z\s]+$/,  // Letters and spaces only
  required: true
}

lastName: {
  type: "string", 
  minLength: 2,
  maxLength: 50,
  pattern: /^[a-zA-Z\s]+$/,  // Letters and spaces only
  required: true
}

email: {
  type: "email",
  normalized: true,  // Converts to lowercase, trims
  required: true
}

program: {
  type: "string",
  minLength: 2,
  maxLength: 100,
  required: true
}

agreeTerms: {
  type: "boolean|string",
  acceptedValues: [true, "true", "on", "yes", 1, "1"],
  required: true
}
```

#### **Optional Fields**
```javascript
phone: {
  type: "string",
  minLength: 10,
  maxLength: 15,
  pattern: /^[\d\s\-\+\(\)]+$/,  // Digits and phone formatting
  optional: true
}

experience: {
  type: "string",
  maxLength: 500,
  optional: true
}

goals: {
  type: "string", 
  maxLength: 500,
  optional: true
}

motivation: {
  type: "string",
  maxLength: 500, 
  optional: true
}

agreeMarketing: {
  type: "boolean",
  optional: true
}
```

### 📝 **Valid Example Submissions**

#### **Minimum Required Fields**
```json
{
  "firstName": "John",
  "lastName": "Doe", 
  "email": "john@example.com",
  "program": "Web Development",
  "agreeTerms": true
}
```

#### **All Fields**
```json
{
  "firstName": "Jane",
  "lastName": "Smith",
  "email": "jane@example.com", 
  "phone": "555-123-4567",
  "program": "Data Science",
  "experience": "2 years in analytics",
  "goals": "Learn machine learning",
  "motivation": "Career advancement", 
  "agreeTerms": true,
  "agreeMarketing": false
}
```

### ❌ **Common Validation Errors**

1. **Invalid firstName/lastName**
   ```json
   {"firstName": "John123"}  // ❌ Numbers not allowed
   {"firstName": "J"}        // ❌ Too short
   ```

2. **Invalid email**
   ```json  
   {"email": "notanemail"}   // ❌ Invalid format
   ```

3. **Missing agreeTerms**
   ```json
   {"agreeTerms": false}     // ❌ Must agree
   {"agreeTerms": "false"}   // ❌ Must agree
   ```

4. **Invalid phone**
   ```json
   {"phone": "abc-def-ghij"} // ❌ Must be digits/formatting only
   {"phone": "123"}          // ❌ Too short
   ```

### 🔧 **Testing Form Validation**

```powershell
# Test valid submission
Invoke-RestMethod -Uri "http://localhost:5001/apply" -Method POST -Headers @{"Content-Type"="application/json"} -Body '{"firstName":"Test","lastName":"User","email":"test@example.com","program":"Web Development","agreeTerms":true}'

# Test validation error
Invoke-RestMethod -Uri "http://localhost:5001/apply" -Method POST -Headers @{"Content-Type"="application/json"} -Body '{"firstName":"A","lastName":"User","email":"test@example.com","program":"Web Development","agreeTerms":true}'
```

### 🛡️ **Security Features**

- **Input Sanitization**: MongoDB injection protection
- **Length Limits**: Prevents buffer overflow attacks
- **Type Validation**: Ensures data integrity
- **Email Normalization**: Consistent email format
- **Rate Limiting**: 100 requests per 15 minutes per IP

The form validation is now working properly and accepts both frontend formats!