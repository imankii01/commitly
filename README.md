# 📌 AI-Powered Commit Message Generator (commitly)

## 📝 Overview
**commitly** is an AI-powered CLI tool that automatically generates meaningful commit messages by analyzing your staged Git changes. It supports **Google Gemini, OpenAI's ChatGPT (GPT-4), and Anthropic Claude**, allowing developers to create **clear, structured, and context-aware** commit messages effortlessly.

## 🎯 Key Features
✅ **Multi-Model Support** – Choose from Gemini, ChatGPT, or Claude AI models.  
✅ **Automatic Git Staging** – Runs `git add .` before generating a commit message.  
✅ **Smart AI Analysis** – Extracts meaningful changes from code diffs.  
✅ **Interactive Commit Selection** – Allows users to approve, regenerate, or modify suggestions.  
✅ **Error Handling & Debugging** – Provides clear logs and API failure handling.  
✅ **User-Friendly Setup** – Works with both technical and non-technical users.  
✅ **Secure & Configurable** – API key management for privacy and customization.  
✅ **Global Language Support** – AI understands multiple languages for international teams 🌍.

---

# 📥 Installation & Setup

### 🔹 Prerequisites
- **Git** installed (`git --version` to check).
- **Node.js** (v14 or later) installed (`node -v` to check).

### 🔹 Install the Package
```sh
npm install -g commitly
```

### 🔹 Configure API Key & AI Model
To use AI-generated commit messages, set up your preferred AI model:
```sh
commitly setup
```
You'll be prompted to enter:
1. **Your AI API Key** (Google Gemini, OpenAI, or Claude)
2. **The AI model you want to use** (`gemini`, `chatgpt`, or `claude`)

---

# 🚀 How to Use

### 🔹 1. Stage Your Code (Automatically Handled)
You don’t need to run `git add .` manually—**commitly does it for you!**

### 🔹 2. Generate Commit Message
```sh
commitly generate
```

### 🔹 3. Select & Confirm Your Commit Message
You'll see AI-generated commit messages with options:
- **Approve** ✅ – Uses the generated commit message.
- **Regenerate** 🔄 – Asks AI for a new suggestion.
- **Cancel** ❌ – Exits without committing.

### 🔹 4. Use in Git Commit
```sh
git commit -m "$(commitly generate)"
```
This directly applies the AI-generated commit message!

---

# 🔥 Why Use This Over Manual Commit Messages?

| Feature             | Traditional Commit Messages | AI-Powered Smart Commit |
|---------------------|---------------------------|-------------------------|
| Time Efficiency     | Takes minutes to think    | Instantly generates 🚀   |
| Standardization    | Inconsistent formatting    | Follows best practices  |
| Code Awareness     | Requires manual analysis  | AI understands context  |
| Multi-Language    | English only (mostly)      | Supports multiple languages 🌍 |

**Ideal for:** Developers, teams, and open-source contributors who want faster, clearer commit messages!

---

# 🛠 Configuration & Customization

### 🔹 Update API Key or Model
```sh
commitly setup
```
You can reconfigure at any time!

### 🔹 Check Current Configuration
```sh
cat ~/.commitlyrc
```

---

# 🔎 Troubleshooting

### ❓ AI Not Generating Messages?
✅ Ensure your API key is correctly set up (`commitly setup`).  
✅ Check for API rate limits (`commitly debug`).  
✅ Verify that your staged files contain actual code changes (`git diff --cached`).

### ❓ Command Not Found?
Run:
```sh
npm link
```
This will properly register the CLI tool.

---

# 🚀 Future Enhancements
🔹 **AI Confidence Score** – Show AI-generated message confidence levels.  
🔹 **Integration with GitHub & GitLab** – Auto-comment AI commits on PRs.  
🔹 **Support for Conventional Commits** – Enforce structured commit formats.  
🔹 **Voice-to-Commit Feature** – Dictate commit messages via speech recognition.

---

# 🤝 Contribute & Support
Found a bug or have a feature request? Open an issue at:
👉 [GitHub Repository](https://github.com/imankii01/commitly)

### 🔹 How to Contribute
We welcome contributions from everyone! Here's how you can get involved:
1. **Fork** the repository to your GitHub account.
2. **Clone** your forked repo and make the changes you want.
3. **Create a Pull Request (PR)** with a clear description of your changes.
4. Follow our **coding standards** and ensure your code passes the linting tests.

We review all PRs and are happy to help you through the process.

### 🔹 How You Can Improve commitly
- **Refactor code for better performance.**
- **Add support for additional Git features** (e.g., Git hooks, custom commit templates).
- **Enhance AI models** or implement new models for better accuracy and versatility.
- **Improve error handling** to ensure the tool works smoothly in all environments.
- **Support for more languages** to help global developers.

---

# 💸 Buy Me a Coffee ☕
If you enjoy using **commitly** and want to support its continued development, consider buying me a coffee! It helps fund new features, bug fixes, and keep the project alive.

👉 [Buy Me a Coffee](https://www.buymeacoffee.com/imankii01)

---

# 📜 License
MIT License © 2024 Ankit

---

# 📬 Contact  
💼 **Ankit** – Software Development Engineer  
📧 **private.ankit047@gmail.com**  
🔗 **LinkedIn:** [imankii01](https://linkedin.com/in/imankii01)  
🐙 **GitHub:** [imankii01](https://github.com/imankii01)