# <span style="font-size: 2.2rem; font-weight: 700;">🚀 SATRIA SMAGER</span>
<span style="opacity: 0.85;">Sistem Administrasi Tata Tertib Siswa – SMAN 1 Geger</span>


<p style="font-size: 1.05rem; line-height: 1.6;">
<strong>SATRIA SMAGER</strong> adalah aplikasi web modern yang dirancang untuk membantu sekolah dalam mengelola tata tertib dan pelanggaran siswa secara cepat, akurat, dan transparan. Aplikasi ini menyediakan sistem pencatatan, pemantauan, dan visualisasi data pelanggaran siswa dengan antarmuka yang <i>clean</i> dan mudah digunakan.
</p>

---

## ✨ <span style="font-size: 1.4rem;">Fitur Utama</span>

### 🔐 1. Sistem Login Multi-Role
* **Admin/Guru BK** → Mengelola data penuh siswa & pelanggaran.
* **Siswa** → Memantau analisis skor & riwayat pelanggaran pribadi.

### 📝 2. Manajemen Pelanggaran
* Fungsi CRUD (Tambah, Edit, Hapus) jenis pelanggaran.
* Kustomisasi poin pelanggaran (ringan, sedang, berat).
* Filter dan pencarian data *realtime*.

### 👥 3. Manajemen Akun Siswa
* Tambah akun siswa baru (otomatis membuat *login* berdasarkan NIS).
* Kelola data siswa.

### 📊 4. Dashboard Statistik Interaktif
* Grafik *pie* mingguan untuk analisis tren.
* Lini masa aktivitas pelanggaran terbaru.
* Rekap total skor siswa dengan poin tertinggi.

### 🎯 5. Riwayat Pelanggaran Siswa
* Tampilan transparan untuk siswa.
* Menampilkan kode, deskripsi, poin, dan tanggal pelanggaran.

### 📱 6. UI/UX Modern & Responsif
* Mengadopsi tren desain 2025 (minimalis & fungsional).
* Animasi yang halus (*smooth animation*).
* Tata letak responsif penuh untuk *desktop* & *mobile*.

---

## 🏗️ <span style="font-size: 1.3rem;">Teknologi & Struktur</span>

### Stack Teknologi
Proyek ini dibangun sebagai aplikasi **Frontend-Only** yang ringan dan cepat.

| Bidang | Teknologi | Keterangan |
| :--- | :--- | :--- |
| **Frontend** | HTML, CSS, JavaScript (ES6) | Kode inti aplikasi. |
| **Storage** | `localStorage` | **Tanpa Backend!** Semua data disimpan lokal di browser. |
| **Chart** | Chart.js | Untuk visualisasi data dan grafik di dashboard. |


---

# 🚀 Cara Menjalankan Proyek

## 1. Clone Repository
```git clone https://github.com/yourusername/satria-smager.git```

## 2. Jalankan Proyek
---

### 🔥 A. Menggunakan Live Server (Paling Mudah)
1. Install ekstensi **Live Server** di VSCode  
2. Klik kanan **`login.html`**  
3. Pilih **"Open with Live Server"**  
4. Aplikasi berjalan di: ```http://localhost:5500/```


---

### 🐍 B. Menjalankan dengan Python Local Server
```python -m http.server 8000```

Lalu buka:
```http://localhost:8000/login.html```


---

## 📌 Database Lokal
Aplikasi menyimpan data pada:
```localStorage.accounts```
```localStorage.pelanggaran```
