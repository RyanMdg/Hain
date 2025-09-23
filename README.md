# Hain

# 📱 Thesis Project Setup Guide

Welcome to our project!  
Follow these steps carefully so you can set up the project, work on your own branch, and submit changes correctly.

---

## 🔹 1. Clone the Repository

First, open your terminal and run:

```bash
git clone https://github.com/RyanMdg/Hain.git

Then, go inside the project folder:


cd <RepoName>
🔹 2. Install Dependencies
Make sure you have Node.js and npm (or yarn) installed.

Run this to install all dependencies:

npm install
(or if we’re using yarn)


yarn install
🔹 3. Run the Project
For React Native (Expo):


npx expo start
This will start the Expo dev server.
Scan the QR code with your Expo Go app or run it on an emulator.

🔹 4. Create Your Own Branch
⚠️ Never work directly on the main branch!
Create a new branch for your feature or task:


git checkout -b feature/<your-name>-<task>
Example:
git checkout -b feature/ryan-login-screen

🔹 5. Push to Your Branch
After making changes, save and commit:

git add .
git commit -m "Added login screen UI"
Push your branch:

git push origin feature/<your-name>-<task>
🔹 6. Pull Latest Changes (Keep Your Branch Updated)
Before pushing new changes, always update your branch:


git pull origin main
If there are conflicts, fix them locally, then commit again.

🔹 7. Open a Pull Request (PR)
Go to our GitHub repo in the browser.

You will see a Compare & Pull Request button for your branch. Click it.

Write a short description of what you changed.

Submit the Pull Request.

Wait for approval (including from the repo owner).

✅ Rules
❌ Don’t push directly to main.

✅ Always create your own branch.

✅ Open a Pull Request for all changes.

```
