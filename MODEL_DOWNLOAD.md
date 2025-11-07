# 📦 Model Download Instructions

The trained model file (`plant_disease_recog_model_pwp.keras`) is approximately **203 MB** and is not included in this repository due to GitHub's file size limitations.

## 🔽 Download the Model

### Option 1: Google Drive (Recommended)
1. Download from: [Google Drive Link] (You need to upload and add the link)
2. Place the file in the root directory of the project
3. Verify the file name is exactly: `plant_disease_recog_model_pwp.keras`

### Option 2: Dropbox
1. Download from: [Dropbox Link] (You need to upload and add the link)
2. Place the file in the root directory of the project
3. Verify the file name is exactly: `plant_disease_recog_model_pwp.keras`

### Option 3: Other Cloud Storage
1. Download from: [Your Link] (You need to upload and add the link)
2. Place the file in the root directory of the project
3. Verify the file name is exactly: `plant_disease_recog_model_pwp.keras`

## 📍 File Placement

After downloading, your project structure should look like this:

```
plant-disease-detection/
├── app/
├── backend/
├── components/
├── lib/
├── public/
├── plant_disease_recog_model_pwp.keras  ← Place the model here
├── package.json
├── README.md
└── ...
```

## ✅ Verification

To verify the model is correctly placed:

1. Check the file exists in the root directory
2. File size should be approximately 203 MB
3. File extension should be `.keras`
4. Run the backend server - it should load without errors:
   ```bash
   cd backend
   python app.py
   ```

If you see "Model loaded from: ..." in the console, the model is correctly loaded!

## 🚨 Troubleshooting

### Model Not Found Error
- **Error**: `FileNotFoundError: [Errno 2] No such file or directory`
- **Solution**: Ensure the model file is in the root directory (same level as `package.json`)

### Model Loading Error
- **Error**: `Unable to load model`
- **Solution**: 
  - Verify the file is not corrupted (check file size)
  - Re-download the model file
  - Ensure you have TensorFlow 2.17.0 installed

### Memory Error
- **Error**: `MemoryError` or `ResourceExhausted`
- **Solution**: 
  - Close other applications to free up RAM
  - Ensure you have at least 4GB of free RAM

## 📧 Need Help?

If you encounter issues downloading or using the model:
1. Check the [Issues](https://github.com/yourusername/plant-disease-detection/issues) page
2. Open a new issue with details about your problem
3. Contact the maintainers

## 🔐 Model Information

- **File Name**: `plant_disease_recog_model_pwp.keras`
- **Size**: ~203 MB
- **Format**: Keras/TensorFlow SavedModel
- **Input Shape**: (160, 160, 3)
- **Output Classes**: 39
- **Framework**: TensorFlow 2.17.0

---

**Note**: The model file is essential for the application to work. The backend will not start without it.
