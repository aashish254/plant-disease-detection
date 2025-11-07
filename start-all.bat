@echo off
echo ========================================
echo  Plant Disease Detection System
echo ========================================
echo.
echo Starting both Frontend and Backend...
echo.
echo Opening 2 terminal windows:
echo  1. Backend (Flask) - Port 5000
echo  2. Frontend (Next.js) - Port 3000
echo.
echo Press any key to continue...
pause > nul

start "Backend - Flask API" cmd /k "cd /d "%~dp0" && start-backend.bat"
timeout /t 3 > nul
start "Frontend - Next.js" cmd /k "cd /d "%~dp0" && start-frontend.bat"

echo.
echo ========================================
echo  Servers are starting...
echo ========================================
echo.
echo Backend will be available at: http://localhost:5000
echo Frontend will be available at: http://localhost:3000
echo.
echo Close this window after servers start.
echo.

timeout /t 5
exit
