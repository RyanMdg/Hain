# Hain

# 📱 Thesis Project - Setup & Git Workflow

Welcome to the **Hain** project!  
This README explains how to clone the repo, install dependencies, run the app (Expo), and follow our Git workflow (create branches, push, open a PR). Copy the commands below and follow them exactly.

---

## 🔧 Prerequisites

Make sure you have the following installed:

- Git
- Node.js (v16+ recommended)
- npm or yarn
- Expo (you can use `npx expo` — no global install required)
- (Optional) Android Studio or Xcode if you want to run emulators
- Expo Go app on your phone (for testing on a real device)

---

## 1. Clone the repository

Use HTTPS (recommended for beginners):

```bash
git clone https://github.com/RyanMdg/Hain.git
cd Hain
```

Or use SSH (if you already set up SSH keys on GitHub):

```bash
git clone git@github.com:RyanMdg/Hain.git
cd Hain
```

---

## 2. Install dependencies

Using npm:

```bash
npm install
```

Or using yarn:

```bash
yarn install
```

---

## 3. Run the project (Expo)

Start the Expo dev server:

```bash
npx expo start
```

Options while the server is running:

- Press `a` → open Android emulator (if set up)
- Press `i` → open iOS simulator (macOS + Xcode)
- Scan the QR code with **Expo Go** on your phone

If you want to directly open Android/iOS from the command:

```bash
npx expo start --android
npx expo start --ios
```

---

## 4. Create a feature branch (do NOT work on `main`)

Always create a branch for your task. Branch naming convention:

```
feature/<your-name>-<task>
fix/<your-name>-<bug>
chore/<your-name>-<task>
```

Example:

```bash
git checkout -b feature/ryan-login-screen
```

---

## 5. Work, commit, and push to your branch

After making changes:

```bash
git add .
git commit -m "feat(login): add login screen UI"
```

Push the branch to GitHub (first push uses `-u` to set upstream):

```bash
git push -u origin feature/ryan-login-screen
```

Subsequent pushes while on that branch:

```bash
git push
```

---

## 6. Keep your branch up-to-date with `main`

Before finalizing work, sync your branch with the latest `main`.

Option A — merge `main` into your branch (simple):

```bash
# from your branch
git fetch origin
git pull origin main
# fix conflicts if any, then:
git add .
git commit -m "fix: resolve merge conflicts"
git push
```

Option B — create branch from fresh main (recommended when starting a new task):

```bash
git checkout main
git pull origin main
git checkout -b feature/<your-name>-<task>
```

---

## 7. Open a Pull Request (PR)

1. Go to the repository on GitHub.
2. You should see a banner: **Compare & pull request** for your recently pushed branch — click it.
3. Or: `Pull requests` → `New pull request` → choose `base: main`, `compare: feature/your-branch`.
4. Fill in PR title and description (see template below).
5. Assign reviewers (at least one) and request review.
6. Submit the PR.

**Do not merge** your own PR unless you are the assigned reviewer and the repo rules allow self-merge.

---

## PR Description Template (copy to your PR)

```
## Summary
Short description of what you changed and why.

## Changes
- Added: <what you added>
- Fixed: <what you fixed>
- Updated: <what you updated>

## How to test
1. npm install
2. npx expo start
3. Steps to reproduce or test this change

## Related issue
Closes #<issue-number> (if any)
```

---

## 8. Merge Policy / Rules

- ❌ **Do not push directly to `main`**.
- ✅ Always create a branch and open a PR.
- ✅ PR must be reviewed and approved before merging.
- ✅ Include a clear description and testing steps in your PR.
- If branch protection is enabled, GitHub will enforce these rules (including for administrators).

---

## 9. Troubleshooting tips

- If `git push` fails with permission errors, check your GitHub authentication (HTTPS credentials or SSH keys).
- If `npm install` fails: delete `node_modules` and `package-lock.json` (or `yarn.lock`) and run install again:
  ```bash
  rm -rf node_modules package-lock.json
  npm install
  ```
- If Expo cannot connect to your device when using `localhost`, use your machine IP or ensure both phone and dev machine are on the same Wi-Fi.

---

## 10. Need help?

If something breaks or you’re unsure, post a short message in our group chat or open an Issue on GitHub describing:

- What you tried
- What command you ran
- Any error messages (copy/paste)

---

Thanks — follow this workflow and we’ll keep `main` stable.
