@echo off
echo ========================================
echo  Plant Disease Detection - Backend
echo ========================================
echo.
echo Starting Flask API server...
echo.

cd backend

if not exist venv (
    echo Creating virtual environment...
    python -m venv venv
    echo.
)

echo Activating virtual environment...
call venv\Scripts\activate

echo.
echo Installing/Updating dependencies...
pip install -r requirements.txt

echo.
echo ========================================
echo  Starting Flask Server on Port 5000
echo ========================================
echo.

python app.py

pause
