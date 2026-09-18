# UI/UX DESIGN SPECIFICATION (`uiux-design.md`)

## 1. Design Philosophy

**Clean, Minimalist, & Distraction-Free:** Dominasi warna hangat dan islami (Emerald Green, Soft Cream/Sand, Slate Gray).

**Kid-Friendly Parent Tool:** Antarmuka dirancang mudah dioperasikan orang tua bersama anak saat belajar di tablet.

## 2. Layout Structure (Single Page / Dashboard View)

```text
+-------------------------------------------------------------------+
|  [Header] EduPrompt Syar'i - Generator Gambar Belajar Anak        |
+-------------------------------------------------------------------+
|  [BLOK 1: MATERI PELAJARAN]                                       |
|  - Pilih Topik: [ Fikih Salat / Urutan Shaf v ]                   |
|  - Teks Pelajaran / Hadits:                                       |
|    [ Masukkan ringkasan hadits urutan shaf / materi di sini... ]  |
+-------------------------------------------------------------------+
|  [BLOK 2: TEMA VISUAL BENDA MATI (FAVORIT ANAK)]                  |
|  - Pilih Objek Favorit:                                           |
|    [ (o) Mobil & Truk  ( ) Pesawat  ( ) Kereta Api  ( ) Balok Kayu]
|  - Gaya Gambar (Art Style):                                       |
|    [ (o) 3D Cute Isometric  ( ) Clean Vector  ( ) LEGO Clay ]    |
|  - Nuansa Warna: [ Cerah Ceria / Lembut Pastel v ]                |
+-------------------------------------------------------------------+
|                   [ GENERATE PROMPT SEKARANG ]                    |
+-------------------------------------------------------------------+
|  [HASIL PROMPT NANO BANANA 2]                                     |
|  +-------------------------------------------------------------+  |
|  | Positive Prompt:                                            |  |
|  | "3D isometric miniature diorama of colorful toy cars neatly|  |
|  | aligned in straight prayer rows facing one direction..."   |  |
|  | Negative Prompt:                                            |  |
|  | "human, person, faces, living beings, animals, eyes..."    |  |
|  +-------------------------------------------------------------+  |
|  [ Salin Prompt Utama ]          [ Salin Negative Prompt ]        |
+-------------------------------------------------------------------+
```

## 3. Interaction States

### Empty State

Menampilkan placeholder inspiratif, misalnya contoh hadits imam shalat dan tema mobil balap.

### Generate Click

Transisi instan (target <10 ms) dengan merakit template string menjadi prompt final.

### Copy Feedback

Tombol berubah hijau dengan label **"Berhasil Disalin!"** selama 2 detik setelah prompt berhasil disalin.

## 4. Responsive and Accessibility Notes

- Gunakan layout satu kolom pada layar kecil dan tablet dengan lebar maksimum yang nyaman dibaca.
- Sediakan area sentuh minimal 44 × 44 px untuk tombol, radio button, dan selector.
- Pastikan kontras teks dan latar memenuhi kebutuhan keterbacaan.
- Gunakan label yang jelas untuk setiap input dan kontrol.
- Output prompt dapat dibaca, dipilih, dan disalin tanpa interaksi yang rumit.
