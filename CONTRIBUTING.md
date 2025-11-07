# Contributing to Plant Disease Detection System

Thank you for considering contributing to this project! We welcome contributions from everyone.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Setup](#development-setup)
- [Pull Request Process](#pull-request-process)
- [Coding Standards](#coding-standards)
- [Commit Message Guidelines](#commit-message-guidelines)

## 📜 Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code. Please report unacceptable behavior to the project maintainers.

### Our Standards

- Be respectful and inclusive
- Welcome newcomers and help them learn
- Focus on what is best for the community
- Show empathy towards other community members

## 🤝 How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the existing issues to avoid duplicates. When creating a bug report, include:

- **Clear title and description**
- **Steps to reproduce** the issue
- **Expected behavior** vs **actual behavior**
- **Screenshots** if applicable
- **Environment details** (OS, Node version, Python version, etc.)

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, include:

- **Clear title and description**
- **Use case** - why is this enhancement needed?
- **Proposed solution** or implementation ideas
- **Alternatives considered**

### Your First Code Contribution

Unsure where to begin? Look for issues labeled:
- `good first issue` - simple issues for beginners
- `help wanted` - issues that need attention

## 🛠️ Development Setup

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/your-username/plant-disease-detection.git
   cd plant-disease-detection
   ```

3. **Add upstream remote**:
   ```bash
   git remote add upstream https://github.com/original-owner/plant-disease-detection.git
   ```

4. **Install dependencies**:
   ```bash
   # Frontend
   npm install
   
   # Backend
   cd backend
   python -m venv venv
   venv\Scripts\activate  # Windows
   pip install -r requirements.txt
   ```

5. **Create a branch** for your changes:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## 🔄 Pull Request Process

1. **Update your fork** with the latest upstream changes:
   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

2. **Make your changes** following our coding standards

3. **Test your changes** thoroughly:
   ```bash
   # Frontend tests
   npm run lint
   npm run build
   
   # Backend tests
   python -m pytest  # if tests exist
   ```

4. **Commit your changes** with clear commit messages

5. **Push to your fork**:
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Create a Pull Request** on GitHub with:
   - Clear title describing the change
   - Detailed description of what changed and why
   - Reference to related issues (e.g., "Fixes #123")
   - Screenshots for UI changes

7. **Wait for review** - maintainers will review your PR and may request changes

8. **Address feedback** if requested

9. **Celebrate** when your PR is merged! 🎉

## 💻 Coding Standards

### Frontend (TypeScript/React)

- Use **TypeScript** for type safety
- Follow **React best practices** and hooks guidelines
- Use **functional components** over class components
- Keep components **small and focused**
- Use **meaningful variable and function names**
- Add **comments** for complex logic
- Format code with **Prettier** (if configured)

Example:
```typescript
// Good
const handleImageUpload = async (file: File): Promise<void> => {
  // Implementation
};

// Avoid
const func1 = (x: any) => {
  // Implementation
};
```

### Backend (Python/Flask)

- Follow **PEP 8** style guide
- Use **type hints** where appropriate
- Write **docstrings** for functions and classes
- Keep functions **small and focused**
- Handle **errors gracefully**
- Use **meaningful variable names**

Example:
```python
# Good
def preprocess_image(image: Image) -> np.ndarray:
    """
    Preprocess the input image for model prediction.
    
    Args:
        image: PIL Image object
        
    Returns:
        Preprocessed numpy array
    """
    # Implementation
    pass

# Avoid
def proc(img):
    # Implementation
    pass
```

### General Guidelines

- **Don't commit** large files (models, datasets)
- **Don't commit** sensitive data (API keys, passwords)
- **Don't commit** `node_modules/` or `venv/`
- **Do write** clear, self-documenting code
- **Do add** comments for complex logic
- **Do test** your changes before submitting

## 📝 Commit Message Guidelines

Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

### Examples

```bash
feat(frontend): add image preview before upload

fix(backend): resolve model loading issue on Windows

docs(readme): update installation instructions

style(components): format code with prettier

refactor(api): simplify prediction endpoint logic

test(backend): add unit tests for image preprocessing

chore(deps): update tensorflow to 2.17.0
```

## 🧪 Testing

- Write tests for new features
- Ensure existing tests pass
- Test on multiple browsers (for frontend changes)
- Test on different operating systems if possible

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Flask Documentation](https://flask.palletsprojects.com/)
- [TensorFlow Documentation](https://www.tensorflow.org/api_docs)

## ❓ Questions?

Feel free to:
- Open an issue for questions
- Join our discussions
- Contact the maintainers

Thank you for contributing! 🙏
