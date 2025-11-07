# 📤 GitHub Upload Guide

This guide will help you upload your Plant Disease Detection project to GitHub.

## ✅ Prerequisites Completed

- ✅ Git repository initialized
- ✅ All files added and committed
- ✅ .gitignore configured (model file excluded)
- ✅ README.md created
- ✅ LICENSE added
- ✅ Documentation complete

## 🚀 Step-by-Step Upload Process

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the **"+"** icon in the top right corner
3. Select **"New repository"**
4. Fill in the repository details:
   - **Repository name**: `plant-disease-detection` (or your preferred name)
   - **Description**: "Plant Disease Detection System using Deep Learning with Next.js and Flask"
   - **Visibility**: Choose Public or Private
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
5. Click **"Create repository"**

### Step 2: Connect Your Local Repository to GitHub

After creating the repository, GitHub will show you commands. Use these:

```bash
# Add the remote repository
git remote add origin https://github.com/YOUR_USERNAME/plant-disease-detection.git

# Verify the remote was added
git remote -v

# Push your code to GitHub
git branch -M main
git push -u origin main
```

**Replace `YOUR_USERNAME`** with your actual GitHub username.

### Step 3: Upload the Model File Separately

Since the model file (~203 MB) is too large for GitHub, you need to host it elsewhere:

#### Option A: GitHub Releases (Recommended)

1. Go to your repository on GitHub
2. Click on **"Releases"** (right sidebar)
3. Click **"Create a new release"**
4. Fill in:
   - **Tag version**: `v1.0.0`
   - **Release title**: `Initial Release - v1.0.0`
   - **Description**: "Initial release with trained model"
5. Drag and drop `plant_disease_recog_model_pwp.keras` to the attachments area
6. Click **"Publish release"**
7. Copy the download link and update `README.md` and `MODEL_DOWNLOAD.md`

#### Option B: Google Drive

1. Upload `plant_disease_recog_model_pwp.keras` to Google Drive
2. Right-click the file → **"Get link"**
3. Set permissions to **"Anyone with the link"**
4. Copy the link
5. Update `README.md` and `MODEL_DOWNLOAD.md` with the link

#### Option C: Dropbox

1. Upload the model file to Dropbox
2. Get a shareable link
3. Update `README.md` and `MODEL_DOWNLOAD.md` with the link

### Step 4: Update Documentation with Links

After uploading the model, update these files with the actual download link:

1. **README.md** - Update the "Download the Model File" section
2. **MODEL_DOWNLOAD.md** - Add the actual download links

```bash
# After editing the files
git add README.md MODEL_DOWNLOAD.md
git commit -m "docs: add model download links"
git push
```

### Step 5: Customize Your Repository

Update these placeholders in your files:

1. **README.md**:
   - Replace `yourusername` with your GitHub username
   - Replace `your.email@example.com` with your email
   - Add screenshots (optional)
   - Update contact information

2. **LICENSE**:
   - Replace `[Your Name]` with your actual name

3. **Repository Settings** (on GitHub):
   - Add topics/tags: `machine-learning`, `deep-learning`, `plant-disease`, `tensorflow`, `nextjs`, `flask`, `computer-vision`
   - Add a description
   - Add a website URL (if deployed)

### Step 6: Add a Repository Banner (Optional)

Create a banner image and add it to your README:

1. Create a banner (1200x630px recommended)
2. Upload to `public/` folder or use an image hosting service
3. Add to README.md:
   ```markdown
   ![Banner](public/banner.png)
   ```

## 🔧 Useful Git Commands

### Check Status
```bash
git status
```

### Add Changes
```bash
git add .
git add specific-file.txt
```

### Commit Changes
```bash
git commit -m "your commit message"
```

### Push Changes
```bash
git push
```

### Pull Latest Changes
```bash
git pull
```

### View Commit History
```bash
git log --oneline
```

### Create a New Branch
```bash
git checkout -b feature/new-feature
```

### Switch Branches
```bash
git checkout main
```

## 📝 After Upload Checklist

- [ ] Repository created on GitHub
- [ ] Code pushed successfully
- [ ] Model file uploaded (GitHub Releases, Google Drive, etc.)
- [ ] README.md updated with correct links
- [ ] MODEL_DOWNLOAD.md updated with download links
- [ ] LICENSE updated with your name
- [ ] Repository description added
- [ ] Topics/tags added
- [ ] Repository is public (if intended)
- [ ] Test clone and setup from scratch to verify instructions

## 🎯 Next Steps

### 1. Test Your Repository

Clone your repository in a different location and follow your own README to ensure everything works:

```bash
cd /different/location
git clone https://github.com/YOUR_USERNAME/plant-disease-detection.git
cd plant-disease-detection
# Follow README instructions
```

### 2. Add GitHub Actions (Optional)

Create `.github/workflows/ci.yml` for automated testing:

```yaml
name: CI

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm install
      - run: npm run lint
      - run: npm run build
```

### 3. Add Badges to README (Optional)

Add status badges to make your README more professional:

```markdown
![Build Status](https://github.com/YOUR_USERNAME/plant-disease-detection/workflows/CI/badge.svg)
![License](https://img.shields.io/github/license/YOUR_USERNAME/plant-disease-detection)
![Stars](https://img.shields.io/github/stars/YOUR_USERNAME/plant-disease-detection)
```

### 4. Create GitHub Pages (Optional)

Deploy your documentation or demo:

1. Go to repository **Settings** → **Pages**
2. Select source branch (usually `main`)
3. Select folder (`/docs` or `/root`)
4. Save and get your GitHub Pages URL

### 5. Add Issues and Project Board

- Create issue templates for bugs and features
- Set up a project board for task management
- Add labels for organization

## 🆘 Troubleshooting

### Authentication Failed

If you get authentication errors:

1. **Use Personal Access Token (PAT)**:
   - Go to GitHub Settings → Developer settings → Personal access tokens
   - Generate new token with `repo` scope
   - Use token as password when pushing

2. **Or use SSH**:
   ```bash
   git remote set-url origin git@github.com:YOUR_USERNAME/plant-disease-detection.git
   ```

### Large File Error

If you accidentally try to push the model file:

```bash
# Remove from staging
git rm --cached plant_disease_recog_model_pwp.keras

# Commit the removal
git commit -m "Remove large model file"

# Push
git push
```

### Merge Conflicts

If you have conflicts:

```bash
# Pull with rebase
git pull --rebase origin main

# Resolve conflicts in your editor
# Then:
git add .
git rebase --continue
git push
```

## 📚 Additional Resources

- [GitHub Documentation](https://docs.github.com)
- [Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)
- [Markdown Guide](https://www.markdownguide.org/)
- [Writing Good Commit Messages](https://chris.beams.io/posts/git-commit/)

## ✅ Final Verification

Run this checklist before sharing your repository:

1. ✅ Clone the repository fresh
2. ✅ Follow your own setup instructions
3. ✅ Verify all links work
4. ✅ Test the application end-to-end
5. ✅ Check for any sensitive information
6. ✅ Ensure .gitignore is working correctly
7. ✅ Verify model download instructions are clear

---

**Congratulations! Your project is now on GitHub! 🎉**

Share your repository:
- Tweet about it
- Post on LinkedIn
- Share in relevant communities
- Add to your portfolio

**Repository URL**: `https://github.com/YOUR_USERNAME/plant-disease-detection`
