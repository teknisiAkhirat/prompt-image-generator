# Requirement Document

## 1. Functional Requirements (FR)

### FR-1: Blok 1 (Input Materi Pelajaran)
- Input textarea untuk materi belajar (contoh: "Hadits Urutan Imam Salat", "Rukun Islam", "Adab Makan").
- Dropdown kategori fikih/materi:
  - Salat & Shaf
  - Wudhu & Bersuci
  - Adab Sehari-hari
  - Sejarah & Geografi Islam

### FR-2: Blok 2 (Tema Visual Favorit Anak)
- Pilihan tema benda mati yang disukai anak:
  - Mobil Balap & Truk Konstruksi (Diecast Toy Cars, Colorful Trucks)
  - Pesawat Terbang & Jet (Airplane models, Cloud skyway)
  - Kereta Api Cepat & Rel (Wooden Train Tracks, Railway order)
  - Blok Kayu Edukasi & Meja Belajar (Montessori wooden blocks, books)
  - Pemandangan Alam & Arsitektur Masjid Minimalis (Mosque arch, night sky, trees, desert dunes)
- Pilihan Art Style anak:
  - 3D Cute Isometric Clay
  - Flat Vector Infographic
  - Clean LEGO Style Bricks

### FR-3: Generator Engine (Tanpa Model AI)
- Mengonfigurasi prompt Bahasa Inggris lengkap yang terstruktur dengan sintaks Nano Banana 2.
- Otomatis menyertakan blok Negative Prompt khusus syar'i.

### FR-4: Output & Actions
- Tampilan box output prompt dengan syntax highlighting ringkas.
- Tombol Copy Prompt 1-klik dengan notifikasi "Tersalin!".
- Tombol Reset dan Contoh Template Cepat.

## 2. Syar'i Compliance Requirements (Non-Negotiable)

### SR-1
Mutlak TIDAK menampilkan wujud manusia (lelaki, wanita, anak-anak) baik foto, ilustrasi, maupun siluet.

### SR-2
Mutlak TIDAK menampilkan hewan atau karakter kartun bermata/bernyawa.

### SR-3
Penggambaran urutan salat/shaf dialihkan menjadi analogi metafora benda mati (misal: saf mobil rapi di lintasan atau balok nomor urut).

### SR-4
Penyertaan filter kata larangan internal untuk mencegah keluarnya elemen terlarang.

## 3. Non-Functional Requirements (NFR)
- Ringan, tanpa latensi server, bisa berjalan offline (cukup buka file index.html).
- Tampilan responsif nyaman digunakan di browser tablet layar sentuh.

## 4. Acceptance Criteria
- User dapat memasukkan materi belajar dan memilih kategori.
- User dapat memilih tema visual favorit anak dan art style.
- Aplikasi menghasilkan prompt Bahasa Inggris terstruktur tanpa memerlukan model AI eksternal.
- Prompt yang dihasilkan otomatis memuat negative prompt syar'i.
- Output prompt dapat disalin dengan satu klik.
- Aplikasi dapat dijalankan secara offline dengan membuka file HTML saja.
- Antarmuka dapat diakses dengan nyaman di perangkat tablet / layar sentuh.
- Output visual yang dihasilkan tidak pernah melanggar batasan syar'i yang ditetapkan.

## 5. Constraints / Notes
- Fokus pada generator prompt berbasis teks, bukan generator gambar model AI.
- Semua prompt harus dibuat secara manual dan aman sesuai persyaratan syar'i.
- Penggunaan bahasa Inggris pada prompt tetap dipertahankan untuk kompatibilitas dengan sintaks Nano Banana 2.
- Semua fitur harus berjalan murni di frontend dan tidak bergantung pada server backend.
