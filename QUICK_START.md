# 🚀 Quick Start - Upload to GitHub

## ⚡ 3-Step Upload Process

### Step 1: Create GitHub Repository (2 minutes)
1. Go to: https://github.com/new
2. Name: `plant-disease-detection`
3. Description: "Plant Disease Detection System using Deep Learning"
4. **Public** or Private
5. **DO NOT** check any initialization options
6. Click **"Create repository"**

### Step 2: Push Your Code (1 minute)

Copy and run these commands (replace `YOUR_USERNAME`):

```bash
git remote add origin https://github.com/YOUR_USERNAME/plant-disease-detection.git
git branch -M main
git push -u origin main
```

### Step 3: Upload Model File (5 minutes)

**Option A: GitHub Releases** (Recommended)
1. Go to your repo → **Releases** → **"Create a new release"**
2. Tag: `v1.0.0`, Title: `Initial Release`
3. Drag `plant_disease_recog_model_pwp.keras` to attachments
4. Click **"Publish release"**
5. Copy the download link

**Option B: Google Drive**
1. Upload `plant_disease_recog_model_pwp.keras` to Google Drive
2. Right-click → **"Get link"** → Set to "Anyone with the link"
3. Copy the link

Then update the model links in:
- `README.md` (line 67)
- `MODEL_DOWNLOAD.md` (lines 8, 13, 18)

```bash
git add README.md MODEL_DOWNLOAD.md
git commit -m "docs: add model download link"
git push
```

## ✅ Done!

Your repository is live at: `https://github.com/YOUR_USERNAME/plant-disease-detection`

## 📝 Quick Customization

Before sharing publicly, update:

1. **LICENSE** - Replace `[Your Name]` with your name
2. **README.md** - Replace `yourusername` and email
3. **GitHub Settings** - Add topics: `machine-learning`, `deep-learning`, `tensorflow`, `nextjs`, `flask`

## 📚 Full Documentation

For detailed instructions, see:
- **GITHUB_UPLOAD_GUIDE.md** - Complete step-by-step guide
- **PROJECT_SUMMARY.md** - Full project overview
- **README.md** - User documentation

---

**Need help?** Check GITHUB_UPLOAD_GUIDE.md for troubleshooting.
