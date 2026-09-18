# TASK IMPLEMENTATION LIST (`task.md`)

**Project:** Syar'i Edu-Prompt Generator for Nano Banana 2  
**Target Environment:** OpenCode / Termux / Static Web

## Phase 1: Environment & Project Initialization

- [ ] 1.1 Verifikasi environment (Node.js, npm, git) di lingkungan proot Debian.
- [ ] 1.2 Inisialisasi proyek (Vite Vanilla JS atau pure static project) dan struktur direktori.
- [ ] 1.3 Konfigurasi Tailwind CSS via CDN untuk styling responsif.
- [ ] 1.4 Setup `.gitignore` untuk manajemen repositori.

## Phase 2: Preset Engine & Syar'i Dictionary

- [ ] 2.1 Pembuatan `js/presets.js` dengan kamus tema benda mati (mobil, truk, pesawat, kereta, meja belajar, arsitektur masjid).
- [ ] 2.2 Implementasi mapping metafora hadits (misal: urutan imam salat/shaf ke barisan kendaraan/balok).
- [ ] 2.3 Pembuatan kamus Negative Prompt syar'i (tanpa makhluk bernyawa: manusia, hewan, wajah, dll).

## Phase 3: Deterministic Prompt Assembler

- [ ] 3.1 Pembuatan `js/promptEngine.js` untuk parsing materi pelajaran dan ekstraksi kata kunci.
- [ ] 3.2 Implementasi perakitan Positive Prompt khusus untuk Nano Banana 2.
- [ ] 3.3 Injeksi Negative Prompt syar'i dan sanitasi kata terlarang secara otomatis.

## Phase 4: UI & Interaction Layer

- [ ] 4.1 Pengembangan `index.html` dan `js/app.js` dengan layout responsif mobile/tablet.
- [ ] 4.2 Implementasi 2 blok input (materi dan konfigurasi visual) serta card selector tema favorit anak.
- [ ] 4.3 Penambahan tombol copy-to-clipboard dengan feedback visual untuk hasil prompt.

## Phase 5: Build, Git Sync, & Cloudflare Pages Deployment

- [ ] 5.1 Proses build output ke direktori `dist/` dan manajemen git commit per fase.
- [ ] 5.2 Push repositori ke branch main di GitHub untuk trigger auto-deploy Cloudflare Pages.
- [ ] 5.3 Alternatif deployment via CLI menggunakan `npx wrangler pages deploy`.

## Phase 6: Final Verification & Agent Completion Checkmark

- [ ] 6.1 Verifikasi akhir seluruh fungsi dan pembaruan status di `agent.md`.
