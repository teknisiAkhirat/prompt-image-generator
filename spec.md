# TECHNICAL SPECIFICATION (`spec.md`)

**Project:** Syar'i Educational Prompt Generator for Nano Banana 2  
**Tech Stack:** Client-Side Single Page Application (HTML5, Tailwind CSS via CDN / Pure CSS, Vanilla JavaScript ES6+). Tidak memerlukan runtime backend/AI server, berjalan instan di web browser lokal maupun live hosting.

## 1. System Architecture

Aplikasi bekerja 100% secara deterministik di sisi klien (*Client-Side Rule-Based System*):

### Input Processing

Menangkap teks pelajaran (Blok 1) dan preferensi visual benda mati (Blok 2).

### Template & Preset Engine

- Mengonversi konsep pelajaran menjadi tata letak visual infografis/poster islami.
- Memasukkan objek inanimate menarik bagi anak, misalnya barisan mobil mainan untuk representasi urutan shaf, gerbong kereta untuk urutan rukun, serta buku dan lampu belajar untuk adab.
- Menyuntikkan *Negative Prompts* dan *Syar'i Enforcers* untuk meniadakan wajah, mata, makhluk hidup, patung, salib, dan elemen terlarang lainnya.

### Output Generator

Menggabungkan parameter menjadi prompt bahasa Inggris presisi tinggi yang kompatibel dengan Nano Banana 2 (standar prompt Stable Diffusion / FLUX).

## 2. Inanimate Syar'i Visual Metaphor Engine (Preset Library)

Kunci aplikasi tanpa AI model adalah kamus metafora visual benda mati:

### Tema Transportasi & Kendaraan (Mobil, Kereta, Pesawat, Truk)

Kasus urutan shaf / imam fikih direpresentasikan dengan barisan kendaraan mainan yang rapi dan menghadap satu arah kiblat, atau diagram lintasan yang bersih.

### Tema Alat Tulis & Ruang Belajar (Study Desk, Wooden Blocks)

Balok kayu bertuliskan angka urutan rukun, serta buku terbuka dengan kaligrafi ornamen geometris.

### Tema Alam & Bangunan Islami (Nature & Islamic Architecture)

Mihrab masjid kosong, jam matahari, ornamen arabesque, bintang langit malam, pemandangan pegunungan, dan gurun tanpa siluet makhluk bernyawa.

## 3. Prompt Assembly Algorithm

Formula generator:

```text
[Subject & Inanimate Scene] + [Educational Text/Concept Layout] + [Art Style for Kids: 3D Pixar claymation / clean vector / isometric toy miniature] + [Lighting & Composition] + [Syar'i Constraint Enforcement]
```

### Contoh Injeksi Syar'i Otomatis

**Positive keywords:**

```text
clean composition, no people, inanimate objects only, empty prayer hall, toy cars neatly aligned in rows, educational poster layout, Arabic geometric calligraphy, soft friendly lighting
```

**Negative keywords:**

```text
person, human, boy, girl, face, eyes, living creature, animal, characters, statue, crosses, photographic depiction of souls
```
