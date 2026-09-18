# AGENT HANDOFF: AUTONOMOUS EXECUTION (`agent.md`)

## 1. System Role & Execution Mode (YOLO Mode)

OpenCode harus beroperasi dalam YOLO Mode (Auto-Approve): jalankan seluruh instruksi secara mandiri dan berurutan tanpa meminta konfirmasi interaktif di setiap langkah.

Eksekusi `task.md` secara langkah demi langkah (*step-by-step*) hingga selesai sesuai dengan objektif proyek **Syar'i Edu-Prompt Generator**.

## 2. Tech Stack & Environment

- **Environment:** proot Debian (ARM64 / Termux) dengan runtime Node.js (v20+ LTS) dan npm.
- **Framework:** Vite + Vanilla JavaScript (atau Pure HTML/Tailwind CSS) yang ultra-ringan untuk performa tinggi di tablet, memastikan zero native binding errors.
- **Deployment:** output statis pada folder `dist/` atau root, terintegrasi dengan Cloudflare Pages melalui GitHub. Push ke branch `main` memicu auto-deploy.

## 3. Handoff & Execution Pipeline

### Step 1: Git Initialization
- Inisialisasi Git.
- Konfigurasikan identitas committer (`user.name` dan email).

### Step 2: Implementation
Bangun struktur kode berikut sesuai dengan `spec.md` dan `requirement.md`:

- `presets.js`
- `promptEngine.js`
- `app.js`
- `index.html`

### Step 3: Verification
Lakukan unit test deterministik untuk menjamin filter syar'i berfungsi mutlak dan tidak menghasilkan makhluk bernyawa.

### Step 4: Build & Deploy
- Jalankan build test (`npm run build`).
- Lakukan modular Git commit per fase.
- Push ke branch `main` di GitHub.

## 4. Safety & Fallback Rules

- **Non-Interactive:** gunakan flag `-y` pada setiap perintah `apt` atau `npm` untuk mencegah prompt interaktif.
- **Idempotency:** pastikan seluruh skrip bersifat idempoten untuk menjaga stabilitas lingkungan kerja proot Debian.
