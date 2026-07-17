# Apoorva Nandigama — Portfolio Website

Professional portfolio for Apoorva Nandigama, Electrical & Wireless Engineer.

---

## 📁 Folder Structure

```
apoorva-portfolio/
├── index.html
├── assets/
│   ├── css/style.css
│   ├── js/main.js
│   ├── images/
│   │   └── profile.jpg        ← Add headshot here (optional)
│   └── resume/
│       └── Apoorva_Nandigama_Resume.pdf  ← Add resume PDF here
└── README.md
```

---

## ✅ Things to complete before publishing

| Item | Action |
|---|---|
| Resume PDF | Place in `assets/resume/` named `Apoorva_Nandigama_Resume.pdf` |
| Profile photo | Place in `assets/images/` named `profile.jpg` (optional — initials show if absent) |

All links (LinkedIn, GitHub, email, DOI links) are already filled in from the resume.

---

## 🚀 Deploy to GitHub Pages

**Step 1 — Create a GitHub repository**
1. Go to https://github.com/new
2. Name it `portfolio` (or any name)
3. Set to **Public**, do NOT initialize with README
4. Click **Create repository**

**Step 2 — Push files**
```bash
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/portfolio.git
git push -u origin main
```

**Step 3 — Enable GitHub Pages**
1. Go to repo → **Settings** → **Pages**
2. Source: `main` branch, `/ (root)` folder
3. Click **Save**

**Step 4 — Live at:**
```
https://YOUR_GITHUB_USERNAME.github.io/portfolio/
```

**For future updates:**
```bash
git add .
git commit -m "update"
git push
```

---

## 📧 Email button

All "Email" buttons open Gmail compose with Apoorva's email pre-filled in the To field.

## 📄 Resume download

Drop `Apoorva_Nandigama_Resume.pdf` in `assets/resume/` — the download buttons link there automatically.
