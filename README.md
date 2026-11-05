# iRent Phone - Sistem Penyewaan iPhone dan Samsung

Aplikasi web untuk menyewa ponsel iPhone dan Samsung. Penyewa dapat menjelajahi perangkat, melihat spesifikasi dan biaya sewa, lalu membuat pesanan, sedangkan admin mengelola data perangkat dan pesanan.

## Latar Belakang Masalah

Menyewa ponsel untuk kebutuhan sementara, misalnya liburan, acara, atau membuat konten, lebih hemat daripada membeli ponsel baru. Namun pada usaha rental kecil, prosesnya umumnya masih manual lewat chat dan catatan terpisah. Akibatnya:

- Calon penyewa sulit melihat daftar perangkat, spesifikasi, harga per hari, dan ketersediaan di satu tempat.
- Biaya sewa, deposit, dan total pembayaran dihitung manual sehingga mudah keliru.
- Status unit (tersedia atau sedang disewa) sulit dipantau.
- Riwayat pesanan tidak terdokumentasi dengan baik.

Aplikasi ini memusatkan data perangkat dan pesanan dalam satu sistem sehingga calon penyewa dapat memilih dan memesan dengan jelas, dan admin dapat memantau unit serta pesanan.

### Manfaat

- Calon penyewa dapat mencari perangkat, melihat harga dan deposit, lalu membuat pesanan dalam beberapa langkah.
- Biaya sewa dihitung otomatis dari durasi dan tanggal sewa.
- Status unit dan pesanan dapat dipantau oleh admin.
- Riwayat pesanan terdokumentasi dan mudah dicari.

## Target Pengguna dan Kebutuhan

| Pengguna | Kebutuhan |
|---|---|
| Penyewa (pengunjung, tanpa akun) | Mencari dan memfilter perangkat; melihat spesifikasi, kondisi, dan ketersediaan; menghitung biaya sewa dan deposit; membuat pesanan dengan mengisi data diri hanya saat transaksi; melihat status pesanan |
| Admin (pemilik/pengelola rental) | Login; mengelola data perangkat; memantau dan mengubah status pesanan; melihat ringkasan di dashboard |


## Fitur Utama

### Sisi Penyewa

1. **Beranda**: kolom pencarian, banner, pintasan kategori (iPhone, Samsung, dan model unggulan), dan daftar ponsel populer.
2. **Jelajah**: pencarian dan filter merek, model, harga per hari, serta kapasitas; kartu perangkat berisi foto, status ketersediaan, spesifikasi singkat, dan harga.
3. **Detail perangkat**: galeri foto, spesifikasi dan kondisi (kapasitas, warna, kondisi, kelengkapan), pengaturan durasi dan tanggal sewa, rincian biaya sewa, deposit, dan total pembayaran.
4. **Checkout penyewaan**: isian nama lengkap, nomor WhatsApp, alamat lengkap, metode serah terima (ambil sendiri atau pengiriman), dan ringkasan pesanan.
5. **Pesanan saya**: daftar pesanan beserta statusnya.
6. Data diri hanya diminta saat checkout; penyewa tidak perlu membuat akun.

### Sisi Admin

1. Login dan logout.
2. Dashboard: jumlah perangkat, tersedia, disewa, dan pesanan menunggu.
3. Kelola data perangkat (tambah, edit, hapus): merek, model, kapasitas, warna, kondisi, kelengkapan, harga per hari, deposit, dan status.
4. Kelola data pesanan dan ubah statusnya: menunggu, dikonfirmasi, disewa, dikembalikan, dibatalkan.
5. Hapus data dengan konfirmasi.
6. Tabel daftar data dengan pencarian dan filter.

### Rencana Pengembangan (Opsional)

- Pagination dengan jQuery AJAX
- Tampilan tanggal dan waktu dengan JavaScript
- Upload foto perangkat
- Cetak bukti pesanan
- Peringatan unit terlambat dikembalikan
- Halaman Profil penyewa (menu sudah ada di desain, belum dirancang)

## Wireframe

Wireframe berupa desain canva: [https://canva.link/j86g12g1ct4ejwu]. Buka berkas tersebut di browser; navigasi antarhalaman ada di bagian atas.

| No | Halaman | Pengguna |
|---|---|---|
| 1 | Beranda | Penyewa |
| 2 | Jelajah (daftar perangkat) | Penyewa |
| 3 | Detail perangkat | Penyewa |
| 4 | Checkout penyewaan (form) | Penyewa |
| 5 | Pesanan saya | Penyewa |
| 6 | Login admin | Admin |
| 7 | Dashboard admin | Admin |
| 8 | Data perangkat (daftar data) | Admin |
| 9 | Form tambah/edit perangkat | Admin |
| 10 | Data pesanan | Admin |

## Struktur Folder Awal

```
Irent-Phone/
├── README.md
├── .gitignore
├── index.php
├── wireframe/
│   └── wireframe (link canva)
├── assets/
│   ├── css/
│   │   └── style.css
│   └──  js/
│       └── main.js 
├── config/
├── includes/
└── pages/
    ├── admin/
    │   └── dashboard.html
    └── public/
        ├── beranda.html
        └── login.html
```

## Rencana Data Inti (gambaran awal)

users (admin), perangkat, pesanan

## Pengembang

- Nama Anggota:
  1. Nila Rahmatika (A11.2025.16565)
  2. Fityay Jovanka N.P. (A11.2025.16566)
  3. Nasayu Evania Rahma (A11.2025.16586)
- Mata kuliah: Pemogramana Berbasis Web
