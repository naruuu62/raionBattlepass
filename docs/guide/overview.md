# API Usage Guide

Halaman ini adalah **panduan teknis** untuk menggunakan **RAION Battlepass API**
di aplikasi mobile yang kalian buat.

**Catatan**

- Penjelasan apa itu API sudah ada di halaman utama
- Di sini fokus ke **cara pakai API**
- Contoh kode bersifat **ilustrasi** dan boleh disesuaikan

---

## Base URL

Gunakan base URL berikut untuk semua request API:

```
https://raion-battlepass-2026-production.up.railway.app
```

Contoh request lengkap:

```
GET https://raion-battlepass-2026-production.up.railway.app
/songs/me
```

## Endpoint Authentication

### 1. Register User

Digunakan saat user pertama kali membuat akun.

**Endpoint**

```
POST /auth/signup
```

**Request Body**

```json
{
  "name": "User",
  "email": "user@mail.com",
  "password": "password123"
}
```

**Response Body**

```json
ISI DISINI NANTI TIAN
```

---

### 2. Login User

Login akan menghasilkan **access token**.

**Endpoint**

```
POST /auth/login
```

**Response Body**

```json
ISI DISINI NANTI TIAN
```

**Simpan token ini**  
Token akan digunakan untuk beberapa request selanjutnya. Informasinya bisa kamu liat di dokumentasi API  
**[RAION Battlepass API Documentation](https://raion-battlepass-2026-production.up.railway.app/docs)**

### 3. Menggunakan Token

Setelah kamu login, kamu akan memperoleh JWT token yang digunakan sebagai verifikasi pada beberapa request selanjutnya (kecuali endpoint **songs/me**). Jadi simpan baik-baik ya ini di aplikasi kamu (clue: Storage)

```
Authorization: x-auth-token TOKEN_KAMU
```

### 4. Current User Data

Jika kamu ingin mendapatkan data user dari database tanpa perlu login terus-menerus, kamu bisa menggunakan token yang kamu dapatkan dari login sebelumnya untuk memperoleh data user.

**Endpoint**

```
GET /auth/
```

**Header:**

```
x-auth-token: TOKEN_KAMU
```

**Contoh Response**

```json
{
  "id": "id_user",
  "name": "NAMA_KAMU",
  "email": "EMAIL_KAMU"
}
```

---

## Endpoint Music

### 1. Get User Songs

Menampilkan lagu yang pernah user upload

**Endpoint**

```
GET /songs/me
```

**Header:**

```
x-auth-token: TOKEN_KAMU
```

**Response Body**

```json
ISI DISINI NANTI TIAN
```

---

### 2. Update Song

Endpoint untuk menyunting judul dan artis lagu yang pernah diupload oleh user.

**Endpoint**

```
UPDATE /songs/update/{song_id}

Contoh:
UPDATE /songs/update/yawf7aw72781gyuaiwuif-a38qfhaiuah
```

**Header:**

```
x-auth-token: TOKEN_KAMU
```

**Request Body**

```json
ISI DISINI NANTI TIAN
```

**Response Body**

```json
ISI DISINI NANTI TIAN
```

---

### 3. Delete Song

Menghapus lagu yang pernah diunggah oleh user.

**Endpoint**

```
DELETE /songs/delete/{song_id}
```

**Header:**

```
x-auth-token: TOKEN_KAMU
```

**Request Body**

```json
ISI DISINI NANTI TIAN
```

**Response Body**

```json
ISI DISINI NANTI TIAN
```

---

### 4. Upload Song

Mengunggah lagu dengan datanya ke database

**Endpoint**

```
POST /songs/upload
```

**Header:**

```
x-auth-token: TOKEN_KAMU
```

**Request Body**

```json
ISI DISINI NANTI TIAN
```

**Response Body**

```json
ISI DISINI NANTI TIAN
```

---

### 5. Get All Song

Mendapatkan seluruh data lagu yang ada di database.

**Endpoint**

```
GET /songs/getall
```

**Request Body**

```json
ISI DISINI NANTI TIAN
```

**Response Body**

```json
ISI DISINI NANTI TIAN
```

## Contoh Implementasi

Berikut adalah beberapa contoh implementasi buat endpoint di atas. Tentu kamu bebas memakai cara apapun, feel free to explore guys.

### Flutter

```dart
final response = await dio.get(
  '/songs/me',
  options: Options(
    headers: {
      'Authorization': 'x-auth-token $token',
    },
  ),
);

final songs = response.data;
```

---

### Jetpack Compose (Retrofit)

```kotlin
@GET("/songs/me")
suspend fun getSongs(
    @Header("Authorization") token: String
): List<Song>
```

Pemanggilan:

```kotlin
val songs = api.getSongs("x-auth-token $token")
```

---

### React Native (Axios)

```js
const response = await axios.get("/songs/me", {
  headers: {
    Authorization: `x-auth-token ${token}`,
  },
});

const songs = response.data;
```

## Penutup

Fokus utama battlepass ini adalah:

- Integrasi API
- Alur aplikasi jelas
- Kode rapi & bisa dibaca

UI gaperlu yang aneh-aneh sob,
yang penting **fitur jalan semua**

**#UTAMAKAN FUNGSI DIBANDING GENGSI**
