# 🌿 Plant Disease Detection System

A full-stack web application that uses deep learning to detect and classify plant diseases from leaf images. Built with Next.js, React, TailwindCSS on the frontend and Flask, TensorFlow on the backend.

![Plant Disease Detection](https://img.shields.io/badge/TensorFlow-2.17.0-orange)
![Next.js](https://img.shields.io/badge/Next.js-14.2.3-black)
![Python](https://img.shields.io/badge/Python-3.8+-blue)
![License](https://img.shields.io/badge/License-MIT-green)

## 🌟 Features

- **Real-time Disease Detection**: Upload plant leaf images and get instant disease predictions
- **39 Disease Classes**: Supports detection across multiple plant species including:
  - Apple, Blueberry, Cherry, Corn, Grape, Orange, Peach, Pepper, Potato, Raspberry, Soybean, Squash, Strawberry, Tomato
- **Confidence Scoring**: View prediction confidence levels and top 3 predictions
- **Interactive Dashboard**: Modern UI with statistics, history tracking, and performance metrics
- **Quiz Mode**: Test your knowledge about plant diseases
- **Image Gallery**: Browse through sample plant disease images
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## 🏗️ Tech Stack

### Frontend
- **Framework**: Next.js 14 (React 18)
- **Styling**: TailwindCSS
- **UI Components**: Custom components with Lucide React icons
- **Charts**: Chart.js with react-chartjs-2
- **Language**: TypeScript

### Backend
- **Framework**: Flask 3.0
- **ML Framework**: TensorFlow 2.17
- **Image Processing**: Pillow (PIL)
- **API**: RESTful API with CORS support

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18 or higher)
- **Python** (v3.8 or higher)
- **npm** or **yarn**
- **pip** (Python package manager)

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/aashish254/plant-disease-detection.git
cd plant-disease-detection
```

### 2. Download the Model File

The trained model file is too large for GitHub. Download it from GitHub Releases:

- **GitHub Releases**: [Download Model File (203 MB)](https://github.com/aashish254/plant-disease-detection/releases/download/v1.0.0/plant_disease_recog_model_pwp.keras)

Place the `plant_disease_recog_model_pwp.keras` file in the root directory of the project.

### 3. Frontend Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

The frontend will be available at `http://localhost:3000`

### 4. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Create virtual environment
python -m venv venv

# Activate virtual environment
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Run Flask server
python app.py
```

The backend API will be available at `http://localhost:5000`

## 🎯 Quick Start

### Using the Batch Scripts (Windows)

For convenience, use the provided batch scripts:

```bash
# Start both frontend and backend
start-all.bat

# Or start them individually
start-frontend.bat
start-backend.bat
```

### Manual Start

**Terminal 1 - Frontend:**
```bash
npm run dev
```

**Terminal 2 - Backend:**
```bash
cd backend
venv\Scripts\activate  # On Windows
python app.py
```

## 📁 Project Structure

```
plant-disease-detection/
├── app/                          # Next.js app directory
│   ├── page.tsx                  # Home page with upload functionality
│   ├── layout.tsx                # Root layout
│   ├── globals.css               # Global styles
│   ├── gallery/                  # Image gallery page
│   ├── history/                  # Detection history page
│   ├── performance/              # Performance metrics page
│   ├── quiz/                     # Quiz page
│   └── statistics/               # Statistics page
├── backend/                      # Flask backend
│   ├── app.py                    # Main Flask application
│   ├── requirements.txt          # Python dependencies
│   └── venv/                     # Virtual environment (not in git)
├── components/                   # React components
│   ├── ui/                       # UI components
│   └── ...                       # Other components
├── lib/                          # Utility functions
├── public/                       # Static assets
├── plant_disease_recog_model_pwp.keras  # ML model (download separately)
├── package.json                  # Node.js dependencies
├── tsconfig.json                 # TypeScript configuration
├── tailwind.config.ts            # TailwindCSS configuration
├── next.config.mjs               # Next.js configuration
└── README.md                     # This file
```

## 🔌 API Endpoints

### Base URL: `http://localhost:5000`

#### 1. Health Check
```http
GET /
```
Returns API status and model information.

#### 2. Predict Disease
```http
POST /predict
Content-Type: multipart/form-data

Body: {
  file: <image_file>
}
```
Returns prediction with confidence score and top 3 predictions.

#### 3. Get All Classes
```http
GET /classes
```
Returns list of all 39 disease classes supported by the model.

## 🧪 Usage Example

### Using the Web Interface

1. Navigate to `http://localhost:3000`
2. Click "Upload Image" or drag and drop a plant leaf image
3. Wait for the prediction results
4. View the detected disease, confidence score, and recommendations

### Using the API (cURL)

```bash
curl -X POST http://localhost:5000/predict \
  -F "file=@path/to/your/plant-image.jpg"
```

### Using the API (Python)

```python
import requests

url = "http://localhost:5000/predict"
files = {"file": open("plant_leaf.jpg", "rb")}
response = requests.post(url, files=files)
print(response.json())
```

## 🎨 Screenshots

<!-- Add screenshots of your application here -->

## 🧠 Model Information

- **Architecture**: Convolutional Neural Network (CNN)
- **Input Size**: 160x160 pixels
- **Classes**: 39 (38 diseases + 1 healthy/background)
- **Framework**: TensorFlow/Keras
- **Image Format**: RGB (3 channels)

## 🤝 Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Plant disease dataset from [PlantVillage Dataset](https://github.com/spMohanty/PlantVillage-Dataset)
- TensorFlow and Keras teams for the amazing ML framework
- Next.js team for the excellent React framework

## 📧 Contact

For questions or support, please open an issue on GitHub or contact:
- **Email**: aashishmahato01@gmail.com
- **GitHub**: [@aashish254](https://github.com/aashish254)

## 🐛 Known Issues

- Model file is large (~200MB) and must be downloaded separately
- First prediction may take longer due to model loading

## 🔮 Future Enhancements

- [ ] Add more plant species and diseases
- [ ] Implement user authentication
- [ ] Add treatment recommendations
- [ ] Mobile app version
- [ ] Batch image processing
- [ ] Model performance optimization
- [ ] Multi-language support

## ⚙️ Environment Variables

Create a `.env.local` file in the root directory (optional):

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

---

Made with ❤️ by [Aashish Mahato](https://github.com/aashish254)
