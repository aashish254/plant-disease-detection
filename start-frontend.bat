@echo off
echo ========================================
echo  Plant Disease Detection - Frontend
echo ========================================
echo.
echo Starting Next.js development server...
echo.

if not exist node_modules (
    echo Installing dependencies...
    call npm install
    echo.
)

echo ========================================
echo  Starting Next.js on Port 3000
echo ========================================
echo.

call npm run dev

pause
