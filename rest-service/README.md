# iWalet
<h2 align="center">
    iWalet : Website e-Wallet untuk platform Ikomers<br/>
</h2>
<hr>

> Disusun untuk memenuhi Tugas Milestone 2 - IF3110 Pengembangan Aplikasi Berbasis Web tahun 2023/2024 

## Table of Contents
1. [General Info](#general-information)
2. [Creator Info](#creator-information)
3. [Features](#features)
4. [Technologies Used](#technologies-used)
5. [Setup](#setup)
6. [Usage](#usage)
7. [Screenshots](#screenshots)
8. [Job Description](#jobdesc)

<a name="general-information"></a>

## General Information
**iWalet** merupakan sebuah _website_ dompet elektronik yang dibangun untuk memenuhi kebutuhan pengguna dalam melakukan sebuah transaksi jual beli. _Website_ iWalet dibangun dengan memanfaatkan teknolgi pembangunan _web_ standar beserta _framework_ seperti React dan Tailwind. Aplikasi ini memiliki dua _role user_ , yaitu: **User Biasa** sebagai pengguna dan **Admin** sebagai pemberi akses. Setiap peran memiliki akses dan fungsi yang berbeda-beda. Pembeli dapat melakukan _top-up_, _transfer_, melihat _history_ dan notifikasi, dan mengirim _report_. Sementara admin, dapat menyetujui permintaan berlangganan pengguna terhadap aplikasi. Selain itu, aplikasi IKOMERS telah menerapkah kaidah _Responsive Web_ sehingga tampilan antarmuka dapat digunakan pada berbagai macam resolusi.

<a name="creator-information"></a>

## Creator Information

| Nama                        | NIM      | E-Mail                      |
| --------------------------- | -------- | --------------------------- |
| Michael Utama               | 13521137 | 13521137@std.stei.itb.ac.id |
| Edia Zaki Naufal Ilman      | 13521141 | 13521141@std.stei.itb.ac.id |
| Mohammad Rifqi Farhansyah   | 13521166 | 13521166@std.stei.itb.ac.id |

<a name="features"></a>

## Features
1. Top-Up Page (Halaman untuk menambah saldo pengguna) - diakses oleh pengguna
2. Transfer Page (Halaman untuk melakukan transfer sesama pengguna) - diakses oleh pengguna
3. History Page (Halaman untuk melihat riwayat transaksi pengguna) - diakses oleh pengguna
4. Report Page (Halaman untuk melaporkan kekurangan aplikasi pada admin) - diakses oleh pengguna
5. Notifikasi (Fungsionalitas yang akan menampilkan informasi terbaru tentang dana masuk) - diakses oleh pengguna
6. Subscription Page (Halaman untuk melihat daftar pengguna dan melakukan aksi terhadap permintaan-nya) - diakses oleh admin
7. Accepted Page (Halaman daftar pengguna yang diterima permintaan berlangganannya) - diakses oleh admin
8. Rejected Page (Halaman daftar pengguna yang ditolak permintaan berlangganannya) - diakses oleh admin
9. Login Page (Halaman untuk dapat masuk ke aplikasi) - diakses oleh pengguna atau admin
10. Register Page (Halaman untuk dapat mendaftarkan akun ke aplikasi) - diakses oleh pengguna

<a name="technologies-used"></a>

## Technologies Used
- prisma
- jtw

<a name="setup"></a>

## Setup
1. Unduh dan _install_ seluruh kakas yang diperlukan untuk menjalankan _website_ ini
2. _Clone repository_ ini dengan menggunakan perintah `https://gitlab.informatika.org/if3110-2023-02-25/rest-service.git` pada terminal komputer Anda.
3. Buka _directory_ hasil _clone repository_ Anda di terminal.
4. Jalankan aplikasi dengan menggunakan perintah :
```
npm install
npx prisma generate
npx prisma migrate dev --name init --create-only
npx prisma migrate deploy
npm run start
```

<a name="usage"></a>

## Usage
1. Ikuti langkah instalasi aplikasi dan server pada poin [Setup](#setup).
2. Rest dapat digunakan.

<a name="screenshots"></a>

## Screenshots
<p>
  <p>Gambar 1. Login Page</p>
  <img src="/img/tampilan/ssLogin.png/">
  <nl>
  <p>Gambar 2. Register Page</p>
  <img src="/img/tampilan/ssRegister.png/">
  <nl>
  <p>Gambar 3. History Page</p>
  <img src="/img/tampilan/ssHistory.png/">
  <nl>
  <p>Gambar 4. Transfer Page</p>
  <img src="/img/tampilan/ssTransfer.png/">
  <nl>
  <p>Gambar 5. Top-Up Page</p>
  <img src="/img/tampilan/ssTopup.png/">
  <nl>
  <p>Gambar 6. Report Page</p>
  <img src="/img/tampilan/ssRep.png/">
  <nl>
</p>

<a name="jobdesc">

## Job Description

| Fitur                    | NIM      |
| ------------------------ | -------- |
| Login                    | 13521166 |
| Register                 | 13521166 |
| History                  | 13521166 |
| Transfer                 | 13521166 |
| Top-Up                   | 13521166 |
| Notifikasi               | 13521141 |
| Sub-Request              | 13521166 |
| Accept                   | 13521166 |
| Reject                   | 13521166 |
| Report                   | 13521137 | 