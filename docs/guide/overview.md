# API Usage Guide

Halaman ini adalah **panduan teknis** untuk menggunakan **RAION Battlepass API**
di aplikasi mobile yang kalian buat.

 **Catatan**

* Penjelasan apa itu API sudah ada di halaman utama
* Di sini fokus ke **cara pakai API**
* Contoh kode bersifat **ilustrasi** dan boleh disesuaikan

---

##  Base URL

Gunakan base URL berikut untuk semua request API:

```
https://raion-battlepass-2026-production.up.railway.app
```

Contoh request lengkap:

```
GET https://raion-battlepass-2026-production.up.railway.app
/songs/me
```

---

##  Authentication Flow (WAJIB URUT)

Semua fitur di aplikasi **HARUS** melewati flow berikut.

---

### 1️ Register User

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

---

### 2️ Login User

Login akan menghasilkan **access token**.

**Endpoint**

```
POST /auth/login
```

**Response**

```json
{
  "email": "user@mail.com",
  "password": "password123"
}
```

Token dapat dilihat menggunakan
**Endpoint**

```
GET /auth/
```

**Response**

```json
{
  "x-auth-token": "TOKEN_KAMU",
}
```

 **Simpan token ini**       
Token akan digunakan untuk semua request selanjutnya.

---

### 3️ Menggunakan Token

Tambahkan header berikut di setiap request:

```
Authorization: x-auth-token TOKEN_KAMU
```

---

##  Get User Songs

Menampilkan lagu yang kita upload di aplikasi.

**Endpoint**

```
GET /songs/me
```

---

### Flutter (Dio)

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
const response = await axios.get('/songs/me', {
  headers: {
    Authorization: `x-auth-token ${token}`,
  },
});

const songs = response.data;
```

---

### Update User Uploaded Song 

**Endpoint**

```
UPDATE /songs/update/{song_id}
```

---


### Remove User Uploaded Song 

**Endpoint**

```
DELETE /songs/delete/{song_id}
```

---


##  Error Handling (WAJIB ADA)

Contoh response error:

```json
{
  "message": "Unauthorized"
}
```

Yang **harus dilakukan aplikasi**:

* Tampilkan pesan error
* Redirect ke halaman login jika token invalid

---

##  Struktur Folder (Disarankan)

---

### Flutter

```
lib/
 ├── data/
 │   ├── api_service.dart
 │   ├── models/
 ├── ui/
 ├── storage/
```

---

### Android (Jetpack Compose)

```
data/
 ├── remote/
 ├── model/
ui/
```

---

### React Native

```
src/
 ├── services/
 ├── screens/
 ├── storage/
```

---

##  Penutup

Fokus utama battlepass ini adalah:

* Integrasi API
* Alur aplikasi jelas
* Kode rapi & bisa dibaca

UI gaperlu yang aneh-aneh sob,
yang penting **fitur jalan semua** 

**#UTAMAKAN FUNGSI DIBANDING GENGSI**
