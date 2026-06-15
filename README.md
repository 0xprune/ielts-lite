# IELTS Lite — Simplify Learn. Score Higher.
# Landing page kursus IELTS online bareng Ms. Ayy

## 🚀 Deploy ke GitHub Pages

### 1. Bikin repo di GitHub
- Buka github.com → New Repository
- Nama repo: `ielts-lite` (atau bebas)
- Jangan centang apapun, langsung Create

### 2. Push project ini
```bash
git init
git add .
git commit -m "IELTS Lite landing page"
git branch -M main
git remote add origin https://github.com/USERNAME/ielts-lite.git
git push -u origin main
```

### 3. Aktifin GitHub Pages
- Buka repo → Settings → Pages
- Source: Deploy from a branch
- Branch: main → / (root) → Save
- Tunggu 1-2 menit, URL: `https://USERNAME.github.io/ielts-lite`

### 4. Custom domain (nanti)
- Settings → Pages → Custom domain
- Masukin domain kamu (contoh: `ieltslite.com`)
- Tambah CNAME record di DNS provider
- Centang Enforce HTTPS
