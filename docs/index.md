# Halo para calon developer! 👋
  
Selamat datang di **RAION Community Battlepass**   

Sebelum kalian resmi jadi bagian dari keluarga RAION, ada satu challenge kecil yang harus kalian selesaikan. Santai aja, ga ribet kok   
Di sini kalian bakal ngerasain gimana rasanya bikin **aplikasi musik ala Spotify** dengan API sungguhan.

Yuk, kita bahas bareng apa aja yang perlu kalian kerjain!

---

## KETENTUAN BATTLEPASS

Di battlepass ini, kalian diminta untuk membuat **aplikasi music streaming sederhana**.  
Fokus utama penilaian ada di **fungsionalitas dan integrasi API**, bukan cuma tampilan.

### Aplikasi Wajib Menggunakan API Raion Battlepass
API ini berperan sebagai **otak aplikasi**, yang menangani:
- Autentikasi pengguna
- Manajemen lagu & playlist
- Riwayat pemutaran musik

Semua data musik akan diambil dari API yang sudah disediakan.

---

## Teknologi yang Bisa Digunakan
Gunakan **salah satu** dari teknologi berikut:

- **Jetpack Compose**
- **Flutter**
- **React Native**

> Bebas pilih ya! Ga ngaruh ke penilaian.

---

## Fitur Wajib di Dalam Aplikasi

Aplikasi yang kalian buat **minimal harus memiliki fitur berikut**.  
Semua endpoint sudah tersedia di backend, jadi tugas kalian adalah **mengintegrasikannya ke aplikasi mobile**.

---

### Authentication

- **Current User Data**  
  Melihat User aktif  
  `PUT /auth/`

- **Register**  
  Pengguna bisa membuat akun baru  
  `POST /auth/signup`

- **Login**  
  Pengguna bisa masuk ke aplikasi  
  `POST /auth/login`

- **Get Current User**  
  Menampilkan data user yang sedang login  
  `GET /api/auth/me`

---

### Music & Streaming

- **Get All Songs**  
  Menampilkan daftar semua lagu  
  `GET /songs/getall`

- **Get User Song**  
  Menampilkan daftar lagu yang diupload user 
  `GET /songs/me`

- **Update Song**  
  Memperbarui informasi lagu  
  `PUT /songs/update/{song_id}`

- **Delete Song**  
  Menghapus lagu
  `DELETE /songs/delete/{song_id}`

---


## Desain Tidak Perlu Ribet
UI **Ga harus yang heboh banget**.  
Yang penting:
- Memutar lagu **di aplikasi**
- Autentikasi berfungsi dengan baik (login & signup)
- Mengambil data melalui API (getAll)

 **Bonus poin** kalau UI/UX kalian rapi dan enak dipakai.

---

## BONUS POIN
Nilai tambahan untuk kalian yang:

- Menampilkan keseluruhan atribut 
- Menulis kode yang **clean & readable**
- Membuat **unit test** (minimal 1 endpoint)

---

## TENTANG API
API berfungsi sebagai jembatan antara aplikasi dan server.  
Dokumentasi lengkap bisa kalian akses di:

 **[RAION Battlepass API Documentation]( https://raion-battlepass-2026-production.up.railway.app/redoc)**  

---
::: details Yuk kenalan lebih lanjut dengan API

### Apa Sih Itu API?

API (Application Programming Interface) itu ibarat jalur komunikasi antar aplikasi atau sistem. Gampangnya, API berperan sebagai jembatan yang menghubungkan aplikasi di HP kamu (frontend) dengan sistem di server (backend). Lewat API inilah aplikasi bisa ngobrol sama server seperti minta data atau ngirim data.

Contohnya, waktu kamu buka aplikasi pemutar musik, aplikasi tersebut bakal minta data ke server lewat API, seperti playlist favorit atau top chart lagu. Server lalu membalas permintaan itu dengan data yang dibutuhkan, dan isinya langsung muncul di layar kamu

### Gimana Cara Kerja API?

1. **Frontend Mengirim Permintaan (request)**:

   - Aplikasi frontend (misal aplikasi di handphone) ngirim permintaan ke server lewat API. Permintaan ini bisa berupa data yang ingin kamu ambil misalkan daftar lagu atau data yang ingin kamu kirim seperti menambah lagu ke playlist.
   - Permintaan ini menggunakan protokol yang disebut HTTP. Umumnya ada beberapa jenis permintaan seperti `GET`(mengambil data), `POST`(mengirim data baru), `PUT`(memperbarui data), dan `DELETE`(menghapus data).

2. **Backend Memproses Permintaan**:

   - Server backend akan menerima permintaan tersebut dan memprosesnya.
   - Jika kamu meminta data, server akan mengambilnya dari database dan mengirimkan jawabannya.
   - Jika permintaan berisi data baru misal membuat playlist, server akan menyimpan data tersebut di database.

3. **Frontend Menerima Respons (Response)**:

   - Setelah permintaan diproses, server akan mengirimkan respons yang berisi data yang kamu minta atau konfirmasi bahwa tindakan kamu misalnya, membuat playlist berhasil.
   - Data yang dikirimkan biasanya dalam bentuk **JSON**, format yang mudah dibaca oleh aplikasi frontend.

   ### Jenis-jenis API

- **REST API**: API yang paling umum digunakan. API ini menggunakan URL untuk mengakses data dan biasanya menggunakan metode HTTP seperti `GET`, `POST`, `PUT`, dan `DELETE`.
- **GraphQL**: API yang memungkinkan aplikasi untuk meminta hanya data yang dibutuhkan, jadi tidak ada data yang terbuang (over-fetching) atau data yang kurang (under-fetching).
- **SOAP API**: API yang lebih kompleks dan biasanya digunakan dalam aplikasi yang lebih besar atau sistem lama.

### Manfaat API

- **Penghubung Antar Aplikasi**: API memungkinkan aplikasi yang berbeda, bahkan yang dibangun dengan teknologi yang berbeda, untuk saling berkomunikasi.
- **Akses ke Data dan Layanan**: API memungkinkan aplikasi untuk mengakses data yang ada di server atau layanan eksternal, seperti data cuaca atau layanan pembayaran.
- **Skalabilitas dan Modularitas**: Dengan API, aplikasi bisa dibangun dengan komponen yang terpisah dan saling berhubungan, sehingga lebih mudah untuk dikembangkan dan dikelola.

### API dalam Aplikasi Mobile

Dalam aplikasi mobile, API digunakan untuk menghubungkan aplikasi di handphone dengan server. Beberapa contoh penggunaan API dalam aplikasi mobile:

- **Mengambil data**: Misalnya, aplikasi mengambil daftar peringkat lagu teratas.
- **Mengirim data**: Misalnya, aplikasi mengirimkan data login atau membuat playlist baru.
- **Autentikasi dan Otorisasi**: API juga digunakan untuk memverifikasi identitas pengguna, seperti saat login ke aplikasi.

Jadi, meskipun aplikasi frontend (seperti di handphone) dan backend (seperti server) dibangun dengan teknologi yang berbeda, API membantu keduanya untuk berkomunikasi dengan cara yang seragam.

:::


##  PENGUMPULAN KARYA

Kirim hasil karya kalian melalui form berikut:

 **Form Pengumpulan Battlepass**

###  Bentuk Pengumpulan
Link Google Drive yang berisi:
- File **.apk** aplikasi 
- Video demo aplikasi (maks. 2 menit) 
- Video penjelasan kode (maks. 5 menit) 
- Link repository GitHub 📄

>  **Note:**  
> Jangan melakukan update repository atau folder Drive setelah deadline ya!  
> nanti **didiskualifikasi** wlee😜

---

## CONTACT PERSON

Kalau ada kendala atau pertanyaan, bolee banget hubungi kita yahhh:

- **Hery** — [0853-4042-3060](https://wa.me/6285340423060)  
- **Tian** — [0878-6052-1201](https://wa.me/6287860521201)  
---

Good luck, and happy coding! 🤭  
Kami tunggu karya terbaik kamuu!
