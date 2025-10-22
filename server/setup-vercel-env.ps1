# Vercel Environment Variables Setup Script
# Run these commands after successful deployment

Write-Host "Setting up Vercel environment variables..." -ForegroundColor Green

# You'll need to replace YOUR_PROJECT_NAME with the actual project name after deployment
$PROJECT_NAME = "devigram-server"  # or whatever name you choose

# Set environment variables
Write-Host "Setting MONGO_URI..." -ForegroundColor Yellow
npx vercel env add MONGO_URI production

Write-Host "Setting JWT_SECRET..." -ForegroundColor Yellow  
npx vercel env add JWT_SECRET production

Write-Host "Setting JWT_EXPIRES_IN..." -ForegroundColor Yellow
npx vercel env add JWT_EXPIRES_IN production

Write-Host "Setting NODE_ENV..." -ForegroundColor Yellow
npx vercel env add NODE_ENV production

Write-Host "Environment variables setup complete!" -ForegroundColor Green
Write-Host "You can also set them via the Vercel dashboard at: https://vercel.com/dashboard" -ForegroundColor Cyan